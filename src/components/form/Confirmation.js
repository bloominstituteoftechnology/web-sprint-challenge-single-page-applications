import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = props => {
const { order } = props;

    return (
        <>
        <h1 style={{color: 'red'}}>{order.name}, your {order.size.toLowerCase()} pizza is on its way!</h1>
        <button><Link to="/">RETURN</Link></button>
        </>
    )
}

export default Confirmation;