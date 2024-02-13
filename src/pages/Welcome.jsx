import React from 'react';
import styled from "styled-components";
import '../css/colors.css';
import axios from "axios";
import {useLoaderData} from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ColorBar = styled.div`
    display: flex;
    & > div {
        width: 70px;
        height: 70px;
    }
`;

const CampaignSection = styled.div`
    
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: var(--site-value);
    margin: 30px auto;
    text-align: center;
    gap: 10px;
    & h1 {
        font-size: 4rem;
        color: var(--light-cl3);
        text-align: left;
    }
    & > div {
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        & div {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
        }
    }
`;

const ProductSection = styled.div`
    display: grid;
    grid-template-columns: 400px 400px;
`;


const Separator = styled.div`
height: 50vh;
`;

export const welcomeLoader = () => {
    return axios.get('/home').then(response => response.data);
}

const Welcome = () => {

    const welcome = useLoaderData();
    return (
        <div>

            <CampaignSection>
                <div className="bg-light3">{welcome.campaignes[0].title}</div>
                <div>
                    <div className="bg-light2">{welcome.campaignes[1].title}</div>
                    <div className="bg-light2">{welcome.campaignes[2].title}</div>
                    <div className="bg-light2">{welcome.campaignes[3].title}</div>
                </div>
                <h1>Welcome to the Site</h1>
            </CampaignSection>
            <ProductSection>
                <ProductCard product={welcome.products[0]}/>
                <ProductCard product={welcome.products[1]}/>
            </ProductSection>
            <Separator></Separator>
            <ColorBar>
                <div className="bg-light1">
                    <p className="italic">Text</p>
                </div>
                <div className="bg-light2"></div>
                <div className="bg-light3"></div>
                <div className="bg-light4"></div>
                <div className="bg-light5"></div>
            </ColorBar>
            <ColorBar>
                <div className="bg-light1-1"></div>
                <div className="bg-light2-1"></div>
                <div className="bg-light3-1"></div>
                <div className="bg-light4-1"></div>
                <div className="bg-light5-1"></div>
            </ColorBar>
        </div>
    );
};

export default Welcome;