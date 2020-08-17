import React from "react";
/*
 name: "",
        size:"",
        peperoni:"",
        sausage:"",
        turtleNeck:"",
        anchovies:"",
        special:""
*/
const Order = (props) => {
    return (
    <div className = "orders">
      {props.post.map(post => (
        <div>
            <h4>Name:{post.name}</h4>
            <p>Pizza Size:{post.size}</p>
        </div>
      ))}
    </div>
    )
}

export default Order;