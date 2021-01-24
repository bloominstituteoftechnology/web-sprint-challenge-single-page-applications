import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <Route path="/">
        <Links>Home</Links>
      </Route>
      <Links>Help</Links>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  // border: 2px dotted black;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const Links = styled.a`
  color: white;
  text-decoration: none;
  padding: 5px 15px;
  width: 100%;
  height: 23px;
  background-color: black;
  border: 1px solid white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: white;
    box-shadow: inset 8px 0px 0px 0px tomato;
    color: maroon;
  }
`;

export default Nav;
