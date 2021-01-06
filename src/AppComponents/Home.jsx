import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="jumbotron">
        <p>Your favorite food, delivered while coding</p>
        <NavLink to="pizza">Pizza?</NavLink>
      </div>
    </div>
  );
}

export default Home;
