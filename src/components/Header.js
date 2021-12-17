import React from 'react';
import styled from 'styled-components';

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
                <a className='header-text'>Lambda Eats</a>
                <div>
                <a className='header-button'>Home</a>
                <a className='header-button'>Help</a>
                </div>
            </StyledHeader>
        </>
    )
}