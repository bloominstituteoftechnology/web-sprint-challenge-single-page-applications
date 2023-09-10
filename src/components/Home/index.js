
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/pizza');
  }
  return (
    <div className="main-body">
        <div className="pizza-body">
          <p>Your favorite food, delivered while coding</p>
          <button id="order-pizza" onClick={() => handleClick()}>Pizza?</button>
        </div>
    </div>
  )
}
