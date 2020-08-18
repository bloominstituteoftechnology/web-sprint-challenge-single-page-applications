import React, {useState} from "react";
import "./App.css"
import Home from "./Components/Home"
import Food from "./Components/Food"
import Item from "./Components/Item";
import Pizza from "./Components/Pizza"
import { Link, Route, Switch} from 'react-router-dom'
import data from './data'
import PizzaForm from "./Components/PizzaForm"
export default function App() {  
  const [products, setProducts] = useState(data)

  return (
    <div className="App">
      
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          {/* Link is an <a> with default behavior re-written so that navigation is handled purely client-side. No server requests for new HTML/JS/CSS!*/}
          <Link to ="/">Home  </Link>
          <Link to ="/order">Order </Link>
          <Link to ="/buildyourownpizza">Pizza</Link>
        </div>
      </nav>
      
      <Switch>

        <Route path="/order/:yumyum">
          <Item items={products} />
        </Route>
  
       
        <Route path="/order" render={(props) => {
          console.log('react router props', props)
          return < Food history={props.history} items={products} />
        }} />
        
          <Route path ="/buildyourownpizza" component={PizzaForm}/>

        <Route path="/" component={Home} />
        
        </Switch>

    </div>
  );
}
