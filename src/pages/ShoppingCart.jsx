import React from 'react';
import styled from "styled-components";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const ShoppingList = styled.div`
  width: 700px;
  margin: 50px;
  & > a {
    & img {
      max-height: 100px;
    }
    & > div {
      background-color: #eee;
      margin-bottom: 50px;
      border-bottom: 1px solid #555;
      display: flex;
      justify-content: space-between;
      padding: 10px;

      & > div:nth-child(2) > p:first-child {
        font-weight: bold;
      }

      & > div {
        display: flex;
        flex-direction: row;
      }

      & > div > p {
        padding-left: 8px;
      }

      & > div:nth-child(2) {
        flex-direction: column;
      }


    }

  }
  & > p {
    text-align: right;
    font-weight: bold;
    padding-right: 10px;
  }
  
  & h1 {
    margin-bottom: 40px;
  }
  
`;

const ShoppingCart = ({ shopping, setShopping }) => {

  const changeAmount = (change, id) => {
    let newArray = [...shopping];
    let objectToChange = shopping.find(product => product.id === id);
    if (!(objectToChange.amount === 1 && change === "decrease")) {
      objectToChange.amount += (change === "decrease") ? -1 : 1;
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
      <h1>Products to buy</h1>
      {shopping.map(product => {
        itemsCost += product.price * product.amount;

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
          >
            <div key={product.id}>
              <img src={`/img/${product.id}.png`} alt="" />
              <div>
                <p>{product.brand}</p>
                <p>{product.description}</p>
              </div>
              <BsTrash3 onClick={() => trashItem(product.id)} />
              <div>
                <p onClick={() => changeAmount("decrease", product.id)}>-</p>
                <p onClick={() => changeAmount("increase", product.id)}>+</p>
                <p>{product.amount}</p>
              </div>
              <p>{(product.price * product.amount).toFixed(2)}</p>
            </div>
          </Link>
        )
      })}
      <p>Items cost: {itemsCost.toFixed(2)}</p>
      <p>Shipping cost: {
        shippingCost = itemsCost > 500 || itemsCost === 0 ? 0 : 79
      }</p>
      <p>Total cost: {(itemsCost + shippingCost).toFixed(2)}</p>
    </ShoppingList>
  );
};

export default ShoppingCart;