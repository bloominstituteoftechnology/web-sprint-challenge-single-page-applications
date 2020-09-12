import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="header">
      <h1>Lambda Eats</h1>
      <div className="nav-buttons">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/help">Help</Link>
        </button>
      </div>
    </div>
  );
};
export default App;
