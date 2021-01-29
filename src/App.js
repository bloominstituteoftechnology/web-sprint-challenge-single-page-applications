import { React, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Validation/formSchema"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
