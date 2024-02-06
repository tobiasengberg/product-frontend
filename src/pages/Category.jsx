import React from 'react';
import axios from "axios";
import {useLoaderData} from "react-router-dom";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 20px;
`;

export const categoryLoader = ({params}) => {
    return axios.get(`/product/${params.categoryName}`).then(result => result.data);
}

const Category = () => {
    const products = useLoaderData();
    return (
        <Container>
            {products !== undefined && products.map( product => (
                <ProductCard product={product} />
            ))}
        </Container>
    );
};

export default Category;