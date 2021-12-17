import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`

    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  .header-button{
      border: lightgrey 1px solid;
      padding: 8px 12px;
      &:hover{
          border: grey 1px solid;
          background-color: lightgrey;
      }
  }
  .header-text{
      font-size: 3rem;
  }
`


export default function Header(props) {
    return (
        <>
            <StyledHeader>
                <Link to="/" className='header-text'>Lambda Eats</Link>
                <div>
                <Link to="/" className='header-button'>Home</Link>
                <a className='header-button' href=''>Help</a>
                </div>
            </StyledHeader>
        </>
    )
}