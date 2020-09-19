import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const NavBar = styled.nav `
display: flex;
justify-content: center;


`

const Buttons = styled.div ` 
display: flex;
flex-direction: column;
margin-left: 80%;
`

const StyledButtons = styled.div `
border: 3px solid black;
border-radius: 8px;
text-align: center;
`

export default function Navigation(){
    return(
        <NavBar>
      <h2>Lambda Eats</h2>
      <Buttons className="buttons">
      <StyledButtons><Link to = '/'><h4>Home</h4></Link></StyledButtons>
      <StyledButtons><h4>Help</h4></StyledButtons>
      </Buttons>
    </NavBar>
    )
}