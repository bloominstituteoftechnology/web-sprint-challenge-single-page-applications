import React from 'react'
import styled from 'styled-components'

const NoMatchStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;

const NoMatch = () => {
    return (
        <NoMatchStyled>
            <h1>404! 💩</h1>
        </NoMatchStyled>
    )
}

export default NoMatch
