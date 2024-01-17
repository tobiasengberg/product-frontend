import React from 'react';
import {Link, useLoaderData, useParams} from "react-router-dom";
import styled from "styled-components";

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

const Product = ({shopping, setShopping}) => {
    const products = useLoaderData();

    const paramsTest = useParams();
    console.log(paramsTest);

    const individualProduct = products !== undefined &&
        products.filter( product => product.id == paramsTest.productId)[0];

    const addProduct = () => {
        let success = 1;
        for (let i = 0; i < shopping.length; i++) {
            if(individualProduct.id === shopping[i].id) {
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
        let newProduct = {...individualProduct, amount: 1};
        let newArray = [...shopping, newProduct];
        setShopping(newArray);
    }

    return (
        <div>
            <h1>Product page</h1>
            <Link to="/products/overview">Back to Overview</Link>
            <div className="single-product">
                <p className="product-name">{individualProduct.name}</p>
                <p className="product-desc">{individualProduct.description}</p>
                <p className="product-price" >{individualProduct.price}</p>
                <p className="product-cat">{individualProduct.category}</p>
                <BuyButton onClick={addProduct}>Buy</BuyButton>
            </div>
        </div>
    );
};

export default Product;