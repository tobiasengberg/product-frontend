import React from 'react';
import { Link, useLoaderData, useParams } from "react-router-dom";
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

const Product = ({ shopping, setShopping }) => {
    const products = useLoaderData();
    const paramsTest = useParams();

    // const individualProduct = products !== undefined && products.filter(product => product.id == paramsTest.productId)[0];
    const individualProduct = products.find(a => a.id === parseInt(paramsTest.productId));

    const addProduct = () => {
        /* let success = 1;

        for (let i = 0; i < shopping.length; i++) {
            if (individualProduct.id === shopping[i].id) {
                addAmount(i);
                success = 0;
            }
        }
        success === 1 && addItem(); */

        const isAlreadyInCart = Boolean(shopping.find(a => a.id === individualProduct.id));
        if (isAlreadyInCart) addAmount(individualProduct.id);
        else addItem();
    }

    const addAmount = (id) => {
        let newArray = [...shopping];
        /*newArray[id - 1].amount += 1;
        setShopping(newArray); */

        newArray.find(a => a.id === id).amount += 1;
        setShopping(newArray);
    }

    const addItem = () => {
        /* let newProduct = { ...individualProduct, amount: 1 };
        let newArray = [...shopping, newProduct];
        setShopping(newArray); */

        individualProduct.amount = 1
        setShopping([...shopping, individualProduct])
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