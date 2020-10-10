import React  from "react";
import {Route} from 'react-router-dom'





const NavBar = () => {
  return (
    <>
      <nav className="navbar">
          <Route exact path= '/' >
          <button>Home</button>
          </Route>
          <button>Form</button>
      </nav>
    </>
  );
};
export default NavBar;
