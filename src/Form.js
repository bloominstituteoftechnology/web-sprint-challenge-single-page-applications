import React, {useState} from "react";


const Form = props => {
    const [pizzaOrder, setPizzaOrder] =useState({name:'', pizzaSize: '', toppingOne: false, toppingTwo:false, toppingThree:false, toppingFour:false, specialRequest: ''});

    const handlerUpdate = event => {
        setPizzaOrder({...pizzaOrder, [event.target.name]:event.target.value});
        console.log(event.target.name);
        console.log(event.target.value);
    }