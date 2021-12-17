import React from "react";
import OrderScreen from "./components/orderScreen/OrderScreen";
import MainPage from "./components/mainPage/MainPage";
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className='main-container'>
      <div className='grid-container'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <MainPage />
            </Route>
            <Route exact path='/pizza'>
              <OrderScreen />
            </Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div>

  );
};
export default App;
