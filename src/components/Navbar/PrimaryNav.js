import React, { Component} from "react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SecondaryNav from "./SecondaryNav";

class PrimaryNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggledropdown: false
    }
    this.ToggleDropdown = this.ToggleDropdown.bind(this);
  }
  ToggleDropdown(e, types) {
    if (types !== undefined && window.screen.width < 992) {
      e.preventDefault();
      this.setState({
        toggledropdown: !this.state.toggledropdown
      })
    }

  }
  render() {
    return (
      <div className="primary-links">
        <ul className="links-holder">
          {this.props.items.map((item, index) => {
            return (
              <li key={index} className={'nav-item'} >
                <div className="nav-item-primary">
                  <NavLink
                    to={item.path} className='nav-links' onClick={(e) => { this.ToggleDropdown(e, item.types) }}>
                    {item.title}
                  </NavLink>
                </div>

                {item.types !== undefined ? <div className={"secondary-dropdown" + (this.state.toggledropdown ? ' show' : ' hide')}><SecondaryNav className='secondary-holder' path={item.path} MenuItems={item} categories={item.types} /></div> : null}

              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}
export default connect(mapStateToProps)(PrimaryNav);