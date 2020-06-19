import React from 'react';
import { Route, Link, Switch, NavLink } from "react-router-dom";

export default function Home(){


    return(

        
      <header>
      <h1 className="favoriteFood">
        Your favorite food<br/> delivered while coding! 🍕🍕
      </h1>

      <Link to="/pizza">
        <button className="homeBtn">Want Pizza? Click Here!</button>
      </Link>
    </header>
    )
}