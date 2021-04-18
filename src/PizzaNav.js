import { Link } from 'react-router-dom'
import React from 'react';

export default function PizzaNav() {
    return (
        <div className="header">
            <div className="navBar">
                <h1>Lambda Eats!</h1>
                <div>
                    <Link to="/">Home</Link>
                    <a>Help</a>
                </div>
            </div>
        </div>
    );
};
