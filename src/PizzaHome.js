import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

export default function PizzaHome() {
    const { url } = useRouteMatch()
    return (
        <div className="mainContainer">
            <h1>Picasso Pizza!</h1>
            <h1>Let's make some art!</h1>
            <Link to={`${url}pizza`}><button id="redirect">Become a pizza artist!</button></Link>
        </div>
    );
};
