import React from 'react'
import styled from 'styled-components'

const HeaderBox = styled.div`
    border: 1px solid black;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const CoName = styled.h2``

const Pages = styled.div`
    padding-right: 2%;
`

const Button = styled.button`
    border: 1px solid black;
    font-size: 1.2rem;
    padding: .5rem 2rem;
`

const Header = () => {
    return (
        <HeaderBox>
            <CoName>Give Me Pizza Or Give Me Death</CoName>
            <Pages>
                <Button>Home</Button>
                <Button>Help</Button>
            </Pages>
        </HeaderBox>
    )
}

export default Header