import React from "react";

export default function Order(props){
    const {details} = props;

    if(!details) {
        return <h3>Order not yet created.</h3>
    }

 return (
     <div className="completedOrder">
         <h4>{details.name}</h4>
         <p>Size: {details.size}</p>
         <p>Toppings: {details.toppings}</p>
         <p>Special Instructions: {details.instructions}</p>
     </div>
 )
}