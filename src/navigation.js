import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components"



export default function Navigation (){
    return (

      <StyleNav>
        <h2>Lambda Eats</h2>
        <StyleLinks>
          <Link to="/">
            <StyleListItem>Home</StyleListItem>
          </Link>
          <Link to="/shop">
            <StyleListItem>Shop</StyleListItem>
          </Link>
        </StyleLinks>
      </StyleNav>
    )
}
    //      <div>
    //       <Nav className="nav-bar" navbar>
    //       <NavbarBrand className="nav-header">Lambda Eats </NavbarBrand>

    //       <Link to="/" className="nav-link">
    //         <NavItem className="nav-item">
    //           Home
    //         </NavItem>
    //         </Link>

    //         <Link to="/shop" className="nav-link">
    //         <NavItem className="nav-item">
    //           Shop
    //         </NavItem>
    //         </Link>

    //       </Nav>
    // </div>
    


  const StyleNav = styled.nav`
display:flex;
justify-content:space-around;
align-items:center;
min-height:10vh;
background:rgb(148, 148, 87);
color:rgb(99, 7, 7);

`
  const StyleLinks = styled.ul`
width:50%;
display:flex;
justify-content:space-around;
align-items:center;
list-style:none;
`
  const StyleListItem = styled.li`
text-decoration:none;
`



