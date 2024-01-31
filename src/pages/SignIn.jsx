import React, {useState} from 'react';
import styled from "styled-components";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user, password);
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
        </Container>
    );
};

export default SignIn;