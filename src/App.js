import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import styled from "styled-components";
import Pic from './components/Pic'
import OrderPizza from './components/pizza'
import * as yup from "yup";
import schema from "./validations/formSchema";

const Container = styled.div`
*{
  padding:0px;
  margin:0px;
  font-family: san-serif;
  text-align: center;
  color: dodgerblue;
}`;

const initialFormValues = {
  //Text
  username: '',
  special: '',
  //dropdown
  size: '',
  //checkboxes
  ham: false,
  olives: false,
  onions: false,
  cheese: false,

};

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
