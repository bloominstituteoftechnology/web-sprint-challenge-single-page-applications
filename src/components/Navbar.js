import React from 'react';
import{ Link }  from 'react-router-dom';
import styled from 'styled-components';



const NavBar = props => {
    return (
        <Navigation>
            <Link to='/'>Home</Link>
        </Navigation>
    );
       
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background: darkgoldenrod;
    display: flex;
    justify-content: flex-end;
    height: 5rem;
    
        a{
            text-decoration: none;
            color: #fff;
            font-weight: bold;
            margin-right: 40px;
            top-padding: 200%;
        }

`


export default NavBar;