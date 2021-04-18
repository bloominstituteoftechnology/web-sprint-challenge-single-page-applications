import React from "react";
import './App.css';
import './styles.css'
import Form from './components/Form'

//import { Route, Link} from 'react-router-dom'
const App = () => {
  return (
    <div className='container'>
      <div className= 'homePage'>
       <h1>Lambda Eats</h1>
      <nav><h2><ul>Home</ul>
      <ul>Help</ul>
      </h2></nav> </div>
         
       <div className='textContainer'>
          <h2>Your favourite food dilvered while coding</h2>
          <button>Pizza</button>
        </div>
<Form/>
      
    </div>
    
  );
};
export default App;
