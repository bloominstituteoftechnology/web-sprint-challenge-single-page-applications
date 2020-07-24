import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

export default function Header(){
    return(
        <div>
            <h1>Lambda Eats</h1>
            <Link to='/'><button>Home</button></Link>
            <button>Help</button>
        </div>
    )
}

    