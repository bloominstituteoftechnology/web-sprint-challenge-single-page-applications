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
  background-color: darkRed;
  border: 2px solid black;
  h1 {
    color: white;
  }
  nav {
    a {
      text-decoration: none;
      color: white;

      &:hover {
        color: black;
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
