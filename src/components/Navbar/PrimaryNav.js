import React, { Component, useState} from "react";
import React, { Component, useEffect, useState} from "react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SecondaryNav from "./SecondaryNav";
export function PrimaryNav({items}){

  const [toggledropdown,setToggledropdown]=useState(false);
  function ToggleDropdown(e, types) {
    if (types !== undefined && window.screen.width < 992) {
      e.preventDefault();
     setToggledropdown(!toggledropdown)
    }
  
  }
  return (
    <div className="primary-links">
      <ul className="links-holder">
        {items.map((item, index) => {
          return (
            <li key={index} className={'nav-item'} >
              <div className="nav-item-primary">
                <NavLink
                  to={item.path} className='nav-links' onClick={(e) => { ToggleDropdown(e, item.types) }}>
                  {item.title}
                </NavLink>
              </div>

              {item.types !== undefined ? <div className={"secondary-dropdown" + (toggledropdown ? ' show' : ' hide')}><SecondaryNav className='secondary-holder' path={item.path} MenuItems={item} categories={item.types} /></div> : null}

            </li>
          );
        })}

      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}
export default connect(mapStateToProps)(PrimaryNav);