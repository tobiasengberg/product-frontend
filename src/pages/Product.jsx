import React from 'react';
import {Link, useLoaderData, useParams} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const BuyButton = styled.button`
  background-color: forestgreen;
  color: white;
  padding: 10px 15px;

  &:hover {
    background-color: darkgreen;
  }

  &:active {
    background-color: #072807;
  }
`;

export const productLoader = ({params}) => {
    return axios.get(`/product/item/${params.productId}`).then(result => result.data);
}

const Product = ({shopping, setShopping}) => {
    const product = useLoaderData();


    const addProduct = () => {
        let success = 1;
        for (let i = 0; i < shopping.length; i++) {
            if(product.id === shopping[i].id) {
                addAmount(i);
                success = 0;
            }
        }
        success === 1 && addItem();
    }

    const addAmount = (id) => {
        let newArray = [...shopping];
        newArray[id].amount += 1;
        setShopping(newArray);
    }

    const addItem = () => {
        let newProduct = {...product, amount: 1};
        let newArray = [...shopping, newProduct];
        setShopping(newArray);
    }

    return (
        <div>
            <h1>Product page</h1>
            <Link to="/products/overview">Back to Overview</Link>
            <div className="single-product">
                <p className="product-name">{product.name}</p>
                <p className="product-desc">{product.description}</p>
                <p className="product-price" >{product.price}</p>
                <p className="product-cat">{product.category}</p>
                <BuyButton onClick={addProduct}>Buy</BuyButton>
            </div>
            <div>Reviews</div>
            <div>Details</div>
        </div>
    );
};

export default Product;