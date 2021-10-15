import React from 'react'
import { useHistory } from "react-router-dom";

const OrderCards = () => {
    const history = useHistory();
    const handleRoute = () =>{ 
        history.push("/pizza");
      }
    
    return (
        <div class='card card--featured'>
        <div class='card__side-by-side--m'>
          <div class='card__image'>
            <img src='https://images.unsplash.com/photo-1593504049359-74330189a345?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=627&amp;q=80' />
          </div>
          <div class='card__content padding-large--l'>
            <h2>Need a pizza now?</h2>
            <p>Build your favorite now.</p>
            <div class='card__button' id="order-pizza" onClick={handleRoute} >Build Now</div>
          </div>
        </div>
      </div>
    )
}

export default OrderCards