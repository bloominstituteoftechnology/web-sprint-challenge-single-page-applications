import React from "react";
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  
  const handleClick = () => {
    history.push("/pizza"); 
  }; 

  return (
    <div className="App">
      <h1 className="welcome">Lambda Eats</h1>
      <p>Welcome to the Pizza Portal</p>
      <button onClick={handleClick}>Order Now</button>
    </div>
  );
};
export default App;
