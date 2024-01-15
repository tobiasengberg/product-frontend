import React from 'react';
import axios from "axios";
import {Link, useLoaderData} from "react-router-dom";

export const productsLoader = () => {
    return axios.get("/products.json").then(result => result);

}

const ProductsList = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1>List of products</h1>
            {products !== undefined && products.map( product => (
                <div>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;