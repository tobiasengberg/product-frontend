import React, {useContext, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {LoginContext} from "../contexts";

const Container = styled.div`
    margin: 100px auto;
    width: 400px;
    & h2 {
        padding-bottom: 2rem;
    }
    & form {
       display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

const SignIn = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [forecast, setForecast] = useState();
    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/login?useCookies=true', {
            email: `${user}`,
            password: `${password}`
        })
            .then(response => {
                console.log(response.status);
                response.status == 200 && setLoggedIn(true);
            })
    }

    const handleTest = () => {
        axios.get('/weatherforecast')
            .then(response => {
                setForecast(response.data);
                console.log(response.data);
            })
            .catch(error => {
                setForecast();
                console.log(error);
            });
    }

    const handleLogout = () => {
        axios.post('/logout', {}).then(response => {
            console.log(response.status);
            response.status == 200 && setLoggedIn(false);
        })
            .catch(error => console.log(error));
    }
    return (
        <Container>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">User</label>
                <input
                    type="text"
                    id="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Sign in</button>
            </form>
            {forecast !== undefined && forecast.map(f => (
                <p key={f.temperatureF}>{f.temperatureC}</p>
            ))

            }
            <button onClick={handleTest}>Test</button>
            <button onClick={handleLogout}>Logout</button>
        </Container>
    );
};

export default SignIn;