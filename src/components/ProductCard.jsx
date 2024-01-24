import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    margin: 10px;
    box-shadow: 
            rgba(0, 0, 0, 0.1) 0 4px 6px -1px, 
            rgba(0, 0, 0, 0.06) 0 2px 4px -1px;
    display: flex;
  flex-direction: column;
  & img {
    filter: grayscale(50%);
    aspect-ratio: 5/3;
    object-fit: cover;
  }
  & > div {
    padding: 10px;
  }
  `;
const ProductCard = ({product}) => {
    return (
        <Card>
            <img src={`/img/${product.id}.png`} alt={product.name}/>
            <div>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
                <p>{product.price}</p>
                <p>{product.category}</p>
            </div>
        </Card>
    );
};

export default ProductCard;