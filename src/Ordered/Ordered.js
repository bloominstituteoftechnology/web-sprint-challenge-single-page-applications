import React from "react";
import {  Router, Route, NavLink } from 'react-router-dom'



const Ordered = (props) => {

    const {order} = props;
    return (
        <div>
            Ordered Sir{order.name}
        </div>
    );


};

export default Ordered;