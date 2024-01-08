import React from 'react';
import { NavLink, Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div>
            <nav className="site-navigation">
                <ul className="nav-options">
                    <li className="nav-item"><NavLink to="/products/overview">Products</NavLink></li>
                    <li className="nav-item"><NavLink to="/shoppingcart">Shopping Cart</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Root;