import React, { useState } from "react";
import { BrowserRouter as Router, Switch , Route, NavLink, useRouteMatch } from 'react-router-dom'
import Form from "./Form/Form";
import Ordered from "./Ordered/Ordered";
const App = () => {
  const {url} = useRouteMatch();
  const [onit,setOnit] = useState(true);
  return (
    <Switch>
    
  
  
    <Route path={`${url}`} components={<Form />} />
      
    ,
    <Route path={`${url}/pizza`}  components={<Ordered />} />
    
  

    </Switch>
  )};
export default App;
