import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import 'src\index.css';
 

const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
   
    text-align: center;
    border-bottom: solid 5px red;
    margin: 0 auto;
    `;

const NavHeader = styled.h1`
    align-self: center;
    font-family: 'Anton', sans-serif;
    background: rgb(242,7,7);
    background: linear-gradient(90deg, rgba(242,7,7,1) 0%, rgba(255,175,0,0.8267682072829132) 100%);
    color: White;
    border: solid 3px linear-gradient(90deg, rgba(242,7,7,1) 0%, rgba(255,175,0,0.8267682072829132) 100%);;
    padding: 10px 20px;
    box-shadow: 5px 5px 5px rgba(43, 4, 2, .5);
`;

const NavLinks = styled.div`
    align-self: center;
    display: flex;
    font-weight: bold;
    font-family: Lato, sans-serif;
    `;

const ButtonLinks = styled(Link)`
    border: solid 3px white;
    background-color: red;
    color: white;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 0px;
    margin-left: 0px;
    padding: 10px 30px;
`;

const HeroDiv = styled.div`
    background-color: blue;
    
`;

const TopCards = styled.div`
    background-color: red;
    border-bottom: solid 3px white;
    
`;
const BottomCards = styled.div`
    background-color: red;
    border-bottom: solid 3px white;
    
`;

const PizzaButton = styled(ButtonLinks)`
    border-radius: 20%;
    border: none;
    box-shadow: 5px 5px 5px rgba(43, 4, 2, .5);
`;

const MainDiv = styled.div`
display: block;
margin: 0;
padding: 0;
background: rgb(221,221,221);
background: linear-gradient(90deg, rgba(221,221,221,1) 0%, rgba(255,119,0,0.8323704481792717) 100%);
`;

export default function App() {
    return ( 
       <MainDiv>
            <NavDiv>
                <NavHeader>Lambda Eats</NavHeader>
                <NavLinks>
                <ButtonLinks to="/">Home</ButtonLinks>
                <ButtonLinks to="help">Help</ButtonLinks>
                </NavLinks>
            </NavDiv>

            <HeroDiv>
              
                    <h2>Your favorite food while coding</h2>
                    <img src="Assets/Pizza.jpg" alt="Pizza" />
                    <PizzaButton to="orderform">Pizza?</PizzaButton>
                 
            </HeroDiv>

            <TopCards>
                    <h2>Best Food Deliver for those late night pushes!</h2>
                    <div>
                    <button>McDonalds</button> 
                    </div>
                    <div>
                    <button>Taco Bell</button>    
                    </div>
                    <div>
                    <button>SubWay</button> 
                    </div>

            </TopCards>
            <BottomCards>
                    <h2>Best Food Deliver for those late night pushes!</h2>
                    <div>
                    <button>McDonalds</button> 
                    </div>
                    <div>
                    <button>Taco Bell</button>    
                    </div>
                    <div>
                    <button>SubWay</button> 
                    </div>

            </BottomCards>
          
        </MainDiv>

     
    );
}