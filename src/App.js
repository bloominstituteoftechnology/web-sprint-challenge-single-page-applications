import Form from "./Form";
import React,{ useState }from "react";
import {Link, Route, Router} from 'react-dom';




const App = () => {
  return(
<div className="bones">
  <Router>
    <Link to="/Form">
      <button>Submit</button></Link>
      <Route path="/Form">

      </Route>
  </Router>
  </div>
  )}

  export default App;