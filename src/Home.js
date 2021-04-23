import React from "react";
import { useHistory } from "react-router-dom";


export default function Home (){
    const history = useHistory();

    // Functions:
    const routeToOrder = ()=>{
        history.push('/order');
    }

    return (
        <div className ="homeContainer">
            {/* Background Img */}
            <img className ="homeImage" src ="https://pwpizza.com/wp-content/uploads/2019/05/pw_pizza_home_hero-2-1024x682.jpg" alt ="pizza"/>
            {/* Order Btn */}
            <button onClick = {routeToOrder} className ="orderBtn">Order Now!</button>
        </div>
    )
}
