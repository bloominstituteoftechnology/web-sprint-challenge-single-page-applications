import React, {useState} from "react";
import {Route} from "react-router-dom";
import Home from "./Components/Home"
import Header from "./Components/Header"
import Pizza from "./Components/Pizza"
import Confirmation from "./Components/Confirmation"

const App = () => {
  const [order, setOrder] = useState({})
  return (
    <>
    <Header />
    <Route path='/' exact component={Home}/>
    <Route path='/pizza' component={() => <Pizza setOrder={setOrder} />}/>
    <Route path='/confirmation' component={() => <Confirmation order={order} />}/>
    </>
  );
};
export default App;
