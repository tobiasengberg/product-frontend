import React, {useState} from 'react';
import styled from "styled-components";
import { BsTrash3 } from "react-icons/bs";

const ShoppingList = styled.div`
  width: 700px;
  margin: 50px;
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
    & > div:nth-child(2)> p:first-child {
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
  & > p {
    text-align: right;
    font-weight: bold;
    padding-right: 10px;
  }
  & h1 {
    margin-bottom: 40px;
  }
`;

const ShoppingCart = () => {

    const [shopping, setShopping] = useState([
        {id: 1, brand: "Tesco", price: 23, description: "A kind of healthy", amount: 9},
        {id: 2, brand: "Nike", price: 2008, description: "Strive for more", amount: 1},
    ]);

    const handleIncrease = (id) => {
        changeAmount(1, id)
    }
    const handleDecrease = (id) => {
        changeAmount(-1, id)
    }
    const changeAmount = (number, id) => {
        let newArray = [...shopping];
        if(!(newArray[id -1].amount === 1 && number < 0)) {
            newArray[id -1].amount += number;
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
                itemsCost+= product.price * product.amount;
                return (
                <div key={product.id}>
                    <img src={`/img/${product.id}.png`} alt=""/>
                    <div>
                        <p>{product.brand}</p>
                        <p>{product.description}</p>
                    </div>
                    <BsTrash3 onClick={() => trashItem(product.id)}/>
                    <div>
                        <p onClick={() => handleDecrease(product.id)}>-</p>
                        <p onClick={() => handleIncrease(product.id)}>+</p>
                        <p>{product.amount}</p>
                    </div>
                    <p>{product.price * product.amount}</p>
                </div>
                )
            })}
            <p>Items cost: {itemsCost}</p>
            <p>Shipping cost: {
                shippingCost = itemsCost > 500 ? 0 : 79
            }</p>
            <p>Total cost: {itemsCost + shippingCost}</p>
        </ShoppingList>
    );
};

export default ShoppingCart;