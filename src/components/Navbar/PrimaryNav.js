import React, { Component, useState } from "react";
import { MenuItems } from './MenuItems';
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
    if (types != undefined && window.screen.width < 992) {
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
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={'nav-item'} >
                <div className="nav-item-primary">
                  <NavLink
                    to={item.path} className='nav-links' onClick={(e) => { this.ToggleDropdown(e, item.types) }}>
                    {item.title}
                  </NavLink>
                </div>

                {item.types != undefined ? <div className={"secondary-dropdown" + (this.state.toggledropdown ? ' show' : ' hide')}><SecondaryNav className='secondary-holder' path={item.path} MenuItems={item} categories={item.types} /></div> : null}

              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}
export default PrimaryNav;