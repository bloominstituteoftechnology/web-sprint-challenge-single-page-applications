import React from "react";
import Header from './components/header/Header';
import HomePage from './components/HomePage';
import Form from './components/form/Form';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route path="/" component={Header}/>
      <Route path="/" component={HomePage}/>
      <Route path="/form" component={Form}/>
    </>
  );
};
export default App;
