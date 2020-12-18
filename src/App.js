import React from "react";
import { Header } from './Components/Header'
import { Form } from './Components/Form'
import { Home } from './Components/Home'
// import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header/>
      <Form/>
      <Home/>
    </>
  );
};
export default App;
