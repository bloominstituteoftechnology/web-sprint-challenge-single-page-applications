import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Card from "./Card";

const Homepage = () => {
  return (
    <>
      <Header>
        <h1 style={{ color: "tomato" }}>Lambda Eats</h1>
        <Nav />
      </Header>
      <Intro>
        <h1 style={{ color: "white" }}>
          Your favorite food delivered while coding
        </h1>
        <IntroButton>
          <Link to="/pizza" style={{ textDecoration: "none" }}>
            Pizza?
          </Link>
        </IntroButton>
      </Intro>
      <Content style={{ marginBottom: "100px" }}>
        <Shelf>
          <h3>Food delivery in Gotham City</h3>
        </Shelf>
        <Shelf>
          <Card
            title="Gotham City Police Department"
            desc="1737S 2000E"
            time="10-30min"
            cost="4.99 Delivery Free"
            img="./images/GCPD_Detective_Comics_990.png"
          ></Card>
          <Card></Card>
          <Card></Card>
        </Shelf>
        <hr />
        <Shelf>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Shelf>
      </Content>
    </>
  );
};
export default Homepage;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 5%;
`;

const Intro = styled.div`
  background-color: teal;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 400px;
`;

const IntroButton = styled.a`
  background-color: white;
  padding: 7px 15px;
  color: maroon;
  border: 2px solid orange;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    font-size: 20px;
    padding: 10px 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Shelf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 30px;
`;
