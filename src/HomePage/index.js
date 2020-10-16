import React from 'react'
import Pizza from "../assets/Pizza.jpg";
import {Link} from 'react-router-dom'
import {NavBar, NavBarLink, HeroBG, HeroImg, HeroH2, HeroBtn} from './HomeStyles'
const HomePage = () => {
    return (
        <>
             <NavBar className="navBar">
        <div className="heading">
          <h1>Lamba Eats</h1>
        </div>
        <div className="buttonLink">
          <NavBarLink to='/'>Home</NavBarLink>
          <NavBarLink to='/help'>Help</NavBarLink>
        </div>
      </NavBar>
      <HeroBG className="heroImg">
        <HeroImg src={Pizza} />
        <HeroH2>Your Favourite Food, delivered while coding</HeroH2>
        <HeroBtn to='form'>Pizza?</HeroBtn>
      </HeroBG>
      <div className="foodPlaceWrapper">
        <h2>Food Delivery in Gotham City</h2>
        <div className="foodPlace">
          <img src={'#'}/>
          <h3>McDonalds</h3>
          <span>$ - American - Fast Food - Burgers</span>
          <h3>20-30mins</h3>
          <h3>5.99$ Delivery Fee</h3>
        </div>
      </div>
        </>
    )
}

export default HomePage
