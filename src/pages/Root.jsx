import React, {useState} from 'react';
import { NavLink, Outlet} from "react-router-dom";
import {SiteValues} from "../SiteValues";

const Root = ({counter}) => {


    return (
        <div>
            <div className="site-header-info">
                <p>{`Free Shipping from ${SiteValues.FreeShipping} kr`}</p>
            </div>
            <nav className="site-navigation">
                <ul className="nav-options">
                    <li className="nav-item"><NavLink to="/products">Products</NavLink></li>
                    <li className="nav-item"><NavLink to="/shoppingcart">Shopping Cart<span className="shopping-cart-icon">{counter}</span></NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Root;