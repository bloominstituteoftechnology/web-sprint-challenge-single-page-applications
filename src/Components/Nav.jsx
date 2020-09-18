import React from 'react'
import { NavLink, Link } from "react-router-dom"
import styled from 'styled-components'

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`
const styledLink = {
  padding: '10px 30px',
  backgroundColor: 'black',
  color: 'white',
}

export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">
        <h4 style={{ color: 'red', textTransform: 'uppercase' }}>Lambda Eats</h4>
      </Link>
      <div>
        <Link to="/" style={styledLink} >Home</Link>
        <Link to="/order" style={styledLink} data-cy="orderLink">Order</Link>
        <Link to="/cart" style={styledLink} data-cy="cartLink">Cart</Link>
      </div>
    </StyledNav>
  )
}