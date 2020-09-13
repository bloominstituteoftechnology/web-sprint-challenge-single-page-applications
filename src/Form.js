import React, {useState} from "react";


const Form = props => {
    const [pizzaOrder, setPizzaOrder] =useState({name:'', pizzaSize: '', toppingOne: false, toppingTwo:false, toppingThree:false, toppingFour:false, specialRequest: ''});

    const handlerUpdate = event => {
        setPizzaOrder({...pizzaOrder, [event.target.name]:event.target.value});
        console.log(event.target.name);
        console.log(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Pizza Order Submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
             <div className="order-name">
                <h3>Build Your Own Pizza</h3>
                <label htmlfor="nameInput">Name: </label>
                  <input 
                    onChange={handlerUpdate}
                    placeholder="Name For The Order"
                    id="nameInput"
                    name="Name"
                    type="text"
                    value={pizzaOrder.name}
                 />
            </div>
        </form>
    )

}