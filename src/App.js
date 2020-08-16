import React, {useState} from "react";
import "./App.css"
import Home from "./Components/Home"
import Food from "./Components/Food"
import Item from "./Item";
import Pizza from "./Components/Pizza"
import { Link, Route, Switch} from 'react-router-dom'
import data from './data'

export default function App() {
    // we use data in a couple of components, so instead of pulling it into state inside of child components,
  // we manage state in the parent component (App), and pass into our children so that all data is kept in sync across app
  // this also limits calls to an API if data were from API instead of static file
  const [products, setProducts] = useState(data)

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          {/* Link is an <a> with default behavior re-written so that navigation is handled purely client-side. No server requests for new HTML/JS/CSS!*/}
          <Link to="/">Home</Link>
          <Link to="/order">Order</Link>
        </div>
      </nav>
      <Switch>

        <Route path="/order/:banana">
          <Item items={products} />
        </Route>
  
       
        <Route path="/order" render={(props) => {
          console.log('react router props', props)
          return < Food history={props.history} items={products} />
        }} />
        <Route path ="/buildyourownpizza" render={(props)=>{
          console.log('react router props',props)
          return <Pizza history={props.history} items={products}/>
        }}/>
        {/* component={Home} passes Home as a variable to render when path matches. This is using a render method that passes Route props into Home, such as 'history', 'location', and 'match', 
      however it does not allow us to declare props on Home, since HOme is a variable and not JSX */}
        <Route path="/" component={Home} />
        </Switch>

    </div>
  );
}
