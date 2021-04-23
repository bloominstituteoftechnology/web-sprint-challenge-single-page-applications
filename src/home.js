import { Link, useRouteMatch } from 'react-router-dom';
import React from 'react';

const HomePage = () => {
    const { url } = useRouteMatch()
  return (
    <div className = "mainContainer">
        <h1>Pizza Ready In 60 Seconds</h1>
        <Link to={`${url}pizza`}><button id = "redirect">Order Now</button></Link>
    </div>
  );
};
export default HomePage;

