import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = props => {
    return(
        <Navigation>
            <Link to="/">Home</Link>
        </Navigation>
    )
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background: darkgoldenrod;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 6rem;

    a{
        text-decoration: none;
        color: white;
        font-weight: bold;
        margin-right: 40px;
        font-size: 2rem;
    }
`

export default NavBar;