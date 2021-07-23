import React from "react";
import '../styles.css'
import { useLocation } from "react-router-dom";

const Confirmation = (props) => {
    const location = useLocation();
    // console.log(location.state)
    const entries =  Object.entries(location.state.orderData)
    // console.log(toppings)
    const toppings =  entries.filter((entrie) => { 
        if(entrie[1] === true)return entrie[0]
    }).map(elem=>elem[0]);
   
console.log(toppings)

  return (
    <div className='confirmation-wrapper'>
        
       <h3>Name:</h3>
       <div>{location.state.orderData.name}</div>

       <h3>Size:</h3>
       <div>{location.state.orderData.size}</div>
       
       <h3>Toppings:</h3>
       {toppings.map(e=><div>{e}</div>)}

       <h3>Specia instructions:</h3>
       <div>{location.state.orderData.special}</div>

      <h1>Your pizza is on the way!!!</h1>
      <h2>Enjoy this dog with pizza</h2>
    </div>
  );
};
export default Confirmation;