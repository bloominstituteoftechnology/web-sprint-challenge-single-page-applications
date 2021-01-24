import React, { useState } from "react";

//imported router
import { BrowserRouter as Router, Route, Link,} from 'react-router-dom'


//Imported yup 
import * as yup from 'yup'

//imported components
import Pizza from './Pizza'





const App = () => {
  //state for data that is gathered from the order form
  const [form, setForm] = useState({
    name: '',
    pSize:'',
    pepporoni: false,
    cheese: false,
    bacon: false,
    pineapple: false,
    spInstructions:'',
  })

  //Slice of state for disabled button until form is complete
  const [disabled, setDisabled] = useState(true)



  return (
    <Router>
      
      <Route exact path='/'> 
          <div>
            <div>
                <h1>Lambda Eats</h1>
                <Link to='/'>
                  <button>Home</button>
                </Link>  
                  <button>Help</button>
            </div>

            <br />

            <div>
                <p>Your favorite food delivered while coding</p>
                <Link to="/pizza">
                  <button >Pizza?</button>
                </Link>
            </div>

            <br />

            <div>
                <h3>Food Delivery in Gotham City</h3>

            </div>
          </div>
      </Route> 


      <Route path='/pizza'>
        <Pizza
          form={form}
          setForm={setForm}
          disabled={disabled}
          />
      </Route>
      
      
      
    </Router>
  );
};
export default App;
