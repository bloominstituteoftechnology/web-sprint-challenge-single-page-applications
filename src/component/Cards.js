import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

          <CardItem
              src='images/pizza.jpg'
              text='Chain serving pizzas with a variety of toppings & sauces in a simple space.'
              label='Lambda Pizza Free Delevery'
              path='/pizza'
            />

            <CardItem
              src='images/McDonald.jpg'
              text='McDonalds explore the hidden flavors deep inside the Beef Burger'
              label='Fast-Food  $5.99 Delevery Fee'
              path='/McDonald'
            />
            <CardItem
              src='images/starbucks.jpg'
              text='Best Coffee in the world various flavors!'
              label='Coffee, Tea, Break-fast and Lunch'
              
              path='/Starbucks'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/stickHouse.jpg'
              text='Unassuming counter-serve joint doling out Hawaiian-style grilled meats, noodle soups & burgers.'
              label='Waikiki Hawaiian BBQ'
              path='/services'
            />
            <CardItem
              src='images/vegan.jpg'
              text='Counter-serve Mediterranean eatery with an outdoor seating area and kebabs.'
              label='The Green Olive'
              path='/products'
            />
            <CardItem
              src='images/bakery.jpg'
              text='Homey bakery & coffee bar specializing in custom wedding and occasion cakes, pastries and cookies.'
              label='Alpine Pastry and Cakes'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;