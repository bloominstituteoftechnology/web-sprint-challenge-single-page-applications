import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home (props) {
    const {order} = props;
    const nav = useNavigate();
    const routeToPizzaOrder = () => {
        nav('/order-pizza')
    }
    return (
        <div className="home-wrapper" id="order-pizza">
            <img 
                className="home-image"
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt='Pizza Eatery'
            />
            <button onClick={routeToPizzaOrder} className="md-button shop-button">
                Order
            </button>   
        </div>
    );
}