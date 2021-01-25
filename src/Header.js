import React from "react";
import "./App.css";
import { useHistory } from 'react-router-dom';



const Header = () => {
  const history = useHistory();

  return (
    <>
            <button className="button" onClick={(evt) => history.push(`/`)}>Home</button>
            
            <button className="button" onClick={(evt) => history.push(`/help`)}>Help</button>
    </>
  );
};
export default Header;