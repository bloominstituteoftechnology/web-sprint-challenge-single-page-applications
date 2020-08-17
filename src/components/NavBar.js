import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 90%;
  height: 90px;
  font-size: 2.1rem;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: White;
  border: 2px solid black;
  h1 {
    color: Red;
  }
  nav {
    a {
      text-decoration: none;
      color: black;

      &:hover {
        color: blue;
      }
    }
  }
`;

const NavBar = (props) => {
  return (
    <NavContainer>
      <div>
        <h1>LAMBDA EATS</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </NavContainer>
  );
};

export default NavBar;
