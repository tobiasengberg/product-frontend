import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import styled from "styled-components";
import axios from "axios";
import {useLoaderData} from "react-router-dom";

const Container = styled.div`
    width: 1200px;
    margin: auto;
    & div > div > ul > li {
        padding: 10px 30px;
    }
`;

export const userLoader = () => {
    return axios.get('/customer').then(response => response.data);
}
const User = () => {
    const userData = useLoaderData();

    return (
        <Container>
            <h1>User</h1>
            <TabView>
                <TabPanel header="Orders">
                    {userData.orders.map( (order, index) =>
                        (
                            <p key={index}>{order}</p>
                        )
                    )}

                </TabPanel>
                <TabPanel header="Account details">
                    <p>{userData.account}</p>
                </TabPanel>
                <TabPanel header="Invoices">
                    {userData.invoices.map( (invoice, index) =>
                        (
                            <p key={index}>{invoice}</p>
                        )
                    )}
                </TabPanel>
                <TabPanel header="Payment options">
                    <p>{userData.paymentOptions}</p>
                </TabPanel>
            </TabView>
            </Container>


    );
};

export default User;