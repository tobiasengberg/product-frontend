import React, {useState} from 'react';
import { NavLink, Outlet} from "react-router-dom";
import {SiteValues} from "../SiteValues";

const Root = ({counter}) => {


    return (
        <div>
            <div className="site-header-info">
                <p>{`Free Shipping from ${SiteValues.FreeShipping} kr`}</p>
            </div>
            <nav className="primary-site-navigation">
                <ul className="nav-options">
                    <li className="primary-nav-item nav-item"><NavLink to="/products">Products</NavLink></li>
                    <li className="primary-nav-item nav-item"><NavLink to="/signin">Sign in</NavLink></li>
                    <li className="primary-nav-item nav-item"><NavLink to="/shoppingcart">Shopping Cart<span
                        className="shopping-cart-icon">{counter}</span></NavLink></li>
                </ul>
            </nav>
            <nav className="secondary-site-navigation">
                <ul className="nav-options">
                    <li className="secondary-nav-item nav-item"><NavLink to="/products/category/finance">Finance</NavLink></li>
                    <li className="secondary-nav-item nav-item"><NavLink to="/products/category/consumerservices">Consumer Services</NavLink></li>
                    <li className="secondary-nav-item nav-item"><NavLink to="/products/category/technology">Technology</NavLink></li>
                    <li className="secondary-nav-item nav-item"><NavLink to="/products/category/healthcare">Health Care</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Root;