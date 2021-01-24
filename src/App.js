import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Card from "./Card";

const App = () => {
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
        <Route
          path="/"
          render={() => {
            return <IntroButton>Pizza?</IntroButton>;
          }}
        />
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

const Header = styled.div`
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

const IntroButton = styled.div`
  background-color: white;
  padding: 5px 15px;
  color: maroon;
  border: 2px solid orange;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    // background-color: lightgray;
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

export default App;
