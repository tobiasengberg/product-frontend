import React from 'react';
import {Link, useLoaderData, useParams} from "react-router-dom";

const Product = () => {
    const products = useLoaderData();

    const paramsTest = useParams();
    console.log(paramsTest);

    const individualProduct = products !== undefined &&
        products.filter( product => product.id == paramsTest.productId)[0];

    const addToCart = () => {

    }

    return (
        <div>
            <h1>Product page</h1>
            <Link to="/products/overview">Back to Overview</Link>
            <div className="single-product">
                <p className="product-name">{individualProduct.name}</p>
                <p className="product-desc">{individualProduct.description}</p>
                <p className="product-price" onClick={addToCart}>{individualProduct.price}</p>
                <p className="product-cat">{individualProduct.category}</p>
            </div>
        </div>
    );
};

export default Product;