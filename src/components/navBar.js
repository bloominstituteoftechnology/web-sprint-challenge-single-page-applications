import React  from "react";
import {Route,Link} from 'react-router-dom'





const NavBar = () => {
  return (
    <>
      <nav className="navbar">
          <Route exact path= '/' >
          <button>Home</button>
          </Route>
          <Link to="/pizza"> <button>Form</button> </Link>
     </nav>
    </>
  );
};
export default NavBar;
