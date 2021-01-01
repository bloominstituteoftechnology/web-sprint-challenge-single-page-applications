import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"


export default function Nav (){

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

const StyleNav = styled.nav `
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
const StyleListItem =styled.li`
text-decoration:none;



`