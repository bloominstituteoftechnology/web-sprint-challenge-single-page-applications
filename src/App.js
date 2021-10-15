import React from "react";
import OrderScreen from "./components/orderScreen/OrderScreen";
import MainPage from "./components/mainPage/MainPage";
import './App.css'

const App = () => {
  return (
    <div class='main-container'>
  <div class='grid-container'>
    <MainPage />
    <OrderScreen />
  </div>
</div>

  );
};
export default App;
