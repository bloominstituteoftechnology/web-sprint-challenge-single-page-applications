import React from "react";
import { Header } from "./Homepage";
import Nav from "./components/Nav";
import Form from "./components/Form";

const Pizza = () => {
  return (
    <>
      <Header>
        <h1 style={{ color: "tomato" }}>Lambda Eats</h1>
        <Nav />
      </Header>
      <Form />
    </>
  );
};
export default Pizza;
