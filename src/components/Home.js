import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {

    const HomePage = styled.div`

    `

return (
    <div>
        <HomePage>
            <nav>
                <Link to={'/'}>
                    Lambda Eats
                </Link>
            </nav>
            <div>
                <h1>
                    Pizza Time
                </h1>
                <Link to={'/pizza'}>
                    Order
                </Link>
            </div>
        </HomePage>
    </div>
)
}

export default Home