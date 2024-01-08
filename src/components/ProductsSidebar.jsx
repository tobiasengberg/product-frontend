import React from 'react';
import {Link, Outlet} from "react-router-dom";

const ProductsSidebar = () => {
    return (
        <div className="products-page">
            <div className="products-sidebar">
                <h2>Categories </h2>
                <h3><Link to="/products/powertools">Power tools</Link></h3>
                <h3>Cords</h3>
                <h3>Energy sources</h3>
            </div>
            <Outlet />
        </div>
    );
};

export default ProductsSidebar;