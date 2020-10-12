
import React from 'react'
import '../App.css';
import { Link, useRouteMatch } from 'react-router-dom'
// import React, from 'react'

const Fbtn = (props) =>{

    const {url} = useRouteMatch();
    const clickIt = () =>{
        console.log('clicked')
    }


//     const clickIt = () =>{
//         history.pushState('/pizza/' + url)
// location.reload()
//     }
    const {theOrder}  = props;
    return (
        <div>
            <button onClick={clickIt} name="order">Add 2 Order</button>
        </div>
    );
};

export default Fbtn;

