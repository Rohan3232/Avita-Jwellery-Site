import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';

function SecondaryNav({ path, categories, MenuItems, className }) {
    const currentUrl = window.location.pathname;
    return (
        <ul className={className}>{Object.keys(categories).map((item, index) => {
            return (
                <li key={item} className="nav-item">
                    <NavLink
                        to={path + '/' + categories[item].name}
                        className='nav-links'>
                        {categories[item].name}
                    </NavLink>
                    {MenuItems[categories[item].name.replaceAll(' ', '')] !== undefined ? <SecondaryNav tag={Link} path={path + '/' + categories[item].name} MenuItems={MenuItems} categories={MenuItems[categories[item].name.replaceAll(' ', '')]} /> : null}
                </li>
            )

        })}
        </ul>
    );
}
export default SecondaryNav;