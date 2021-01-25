import React from "react";
import { Header } from "./Homepage";
import Nav from "./Nav";
import Form from "./Form";

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
