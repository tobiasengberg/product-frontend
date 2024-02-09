import React, {useState} from 'react';
import { NavLink, Outlet} from "react-router-dom";
import {SiteValues} from "../SiteValues";
import {LoginContext} from "../contexts";
import axios from "axios";

const Root = ({counter}) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogout = () => {
        axios.post('/logout', {}).then(response => {
            console.log(response.status);
            response.status == 200 && setLoggedIn(false);
        })
            .catch(error => console.log(error));
    }
    return (
        <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
            <div className="site-header-info">
                <p>{`Free Shipping from ${SiteValues.FreeShipping} kr`}</p>
            </div>
            <nav className="primary-site-navigation">
                <ul className="nav-options">
                    <li className="primary-nav-item nav-item"><NavLink to="/products">Products</NavLink></li>
                    {loggedIn ? <li className="primary-nav-item nav-item"><button onClick={handleLogout}>Sign Out</button></li>
                        : <li className="primary-nav-item nav-item"><NavLink to="/signin">Sign In</NavLink></li>
                    }
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
        </LoginContext.Provider>
    );
};

export default Root;