import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <StyledFooter>
            <hr />
            <hr />
            <p> Designed by: Virginia Scirrotto™</p>
            <p>All Rights Reserved © 2020</p>
        </StyledFooter>    
    )
}

const StyledFooter = styled.footer `
p {
    text-align: center;
    text-shadow: 2px 2px 5px whitesmoke;
    padding: 15px;
    margin: 0 auto;
}
`



export default Footer