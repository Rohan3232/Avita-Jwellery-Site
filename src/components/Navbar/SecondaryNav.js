import React, { Component, useState } from "react";
import { connect } from 'react-redux';
import { NavLink, Router, Link, Route } from 'react-router-dom';
import { addProduct } from "../actions/cartActions";

class SecondaryNav extends Component {
    constructor(props) {
        super(props)
        this.state={
            currentUrl:window.location.pathname
        }
    }
    render() {
        const categories = this.props.categories;
        const MenuItems = this.props.MenuItems;
        return (
            <ul className={this.props.className}>{Object.keys(categories).map((item, index) => {
                return (
                    <li key={item} className="nav-item">
                        <NavLink
                            to={this.props.path+'/' + categories[item].name}
                            className='nav-links'>
                            {categories[item].name}
                        </NavLink>
                        {MenuItems[categories[item].name.replaceAll(' ','')] != undefined ? <SecondaryNav {...this.props}  tag={Link} path={this.props.path+'/' + categories[item].name} MenuItems={MenuItems} categories={MenuItems[categories[item].name.replaceAll(' ','')]} /> : null}
                    </li>
                )
                
            })}
            </ul>
        );
    }
}
export default SecondaryNav;