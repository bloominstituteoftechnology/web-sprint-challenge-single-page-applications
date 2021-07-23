import React from "react";
import '../styles.css';
import { useHistory } from 'react-router-dom';
import pizzaImg from '../Assets/Pizza.jpg';
const Home = () => {

    const history = useHistory()
    const routeToOrder = () => {
      console.log('finished fetching items...')
      history.push('/pizza')
    }
  return (
    <div className='home-wrapper'>
       <img
        className='home-image'
        src={pizzaImg}
        alt=''
      />
      <button
      id='order-pizza'
        onClick={routeToOrder}
        className='md-button shop-button'
      >
        Shop now!
      </button>
     
    </div>
  );
};
export default Home;