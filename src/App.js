import Form from "./Form";
import React from "react";
import {Link, Route, BrowserRouter} from 'react-router-dom';
import "./App.css";



const App = () => {
  return(
<div className="bones">
  <h1>Pizza Place</h1>
  <BrowserRouter>
    <Link to= 'Form'>
      submit Order Here
      </Link>
      <Route path= '/Form' component={Form} />


  </BrowserRouter>
  <Form />
  </div>
  )}

  export default App;