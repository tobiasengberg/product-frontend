import React from 'react';
import styled from "styled-components";
import { BsTrash3 } from "react-icons/bs";
import {Link} from "react-router-dom";
import {SiteValues} from "../SiteValues";

const CostSection = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    font-size: 1.3rem;
    text-align: right;
    padding-right: 10px;
    padding-left: 30px;
  }
  p:last-child {
    font-weight: bold;
    padding-top: 10px;
  }
`;

const ProductItem = styled.div`
  & img {
    max-height: 100px;
    filter: grayscale(40%);
  }

  & > div {
    background-color: #edf0f7;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 120px 290px 90px 120px auto;
    padding: 10px;
      text-align: end;
    & > a > p:first-child {
      font-weight: bold;
        
    }

    & > div {
      display: flex;
      flex-direction: row;
    }

    & > div > p {
      padding-left: 8px;
    }

    & > a {
      flex-direction: column;
        text-align: start;
    }
  }
`;

const ShoppingList = styled.div`
  width: 700px;
  margin: 50px auto;
  color: #2a364b;
  & h1 {
    margin-bottom: 40px;
    text-align: center;
  }
`;

const ShoppingCart = ({shopping, setShopping}) => {

        const changeAmount = (change, id) => {
            let newArray = [...shopping];
            let objectToChange = shopping.find(product => product.id === id);
            if(!(objectToChange.amount === 1 && change === "decrease"))
            {
                objectToChange.amount += ( change === "decrease" ) ? -1 : 1;
                setShopping(newArray);
            }
        }

    const trashItem = (id) => {
        let newArray = shopping.filter(product => product.id !== id);
        setShopping(newArray);
    }

    let itemsCost = 0;
    let shippingCost = 0;


    return (
        <ShoppingList>
            <h1>Product items</h1>
            {shopping.length === 0 ?
                <ProductItem>
                    <div>
                        <p>-</p>
                        <p>Shopping cart contains no items</p>
                        <p>-</p>
                    </div>
                </ProductItem>
                :
                shopping.map(product => {
                itemsCost+= product.price * product.amount;
                return (
                    <ProductItem >
                        <div key={product.id}>
                            <img src={`/img/${product.id}.png`} alt=""/>
                            <Link to={`/products/product/${product.id}`}>
                                <p>{product.name}</p>
                                <p>{product.description.substring(0, 40)} ...</p>
                            </Link>
                            <BsTrash3 onClick={() => trashItem(product.id)}/>
                            <div>
                                <p onClick={() => changeAmount("decrease", product.id)}>-</p>
                                <p onClick={() => changeAmount("increase", product.id)}>+</p>
                                <p>{product.amount}</p>
                            </div>
                            <p>{(product.price * product.amount).toFixed(2)}</p>
                        </div>
                    </ProductItem>
                )})
            }
            <CostSection>
                <div>
                    <p>Items cost:</p>
                    <p>Shipping cost:</p>
                    <p>Total cost:</p>
                </div>
                <div>
                    <p>{itemsCost.toFixed(2)}</p>
                    <p>{
                        (shippingCost = itemsCost > SiteValues.FreeShipping || itemsCost === 0 ? 0 : 79).toFixed(2)
                    }</p>
                    <p>{(itemsCost + shippingCost).toFixed(2)}</p>
                </div>
            </CostSection>
        </ShoppingList>
    );
};

export default ShoppingCart;