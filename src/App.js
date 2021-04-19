import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./index.css";
import OrderForm from "./form.js";
 

 
// Primary Div 
const MainDiv = styled.div`
display: block;
flex-flow: column nowrap;
margin: 0px;
padding: 0px;
background: rgb(255,0,0);
background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,119,0,0.8323704481792717) 100%);
`; 

//Navigation Styling
const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: center;
    border-bottom: solid 5px;
    border-bottom-color: rgba(255,119,0);
    border-bottom-color: linear-gradient(90deg, rgba(255,102,0,0.8323704481792717) 0%, rgba(255,21,0,1) 49%, rgba(255,0,0,1) 100%);
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px 10px;
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
    background-color: red;
    color: white;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 5px;
    margin-left: 0px;
    padding: 10px 30px;
    box-shadow: 3px 3px 3px rgba(43, 4, 2, .5);
`;

// Hero Styling
const HeroDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
   
`;

const HeroText = styled.h2`
    color: white;
    align-self: center;
    
    font-family: 'Anton', sans-serif;
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;
`;


const PizzaButton = styled(ButtonLinks)`
    align-items: center;
    border-radius: 20%;
    border: none;
    box-shadow: 5px 5px 5px rgba(43, 4, 2, .5);
    
`;

// First Row of Cards
const TopCards = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 95%;
    margin: 20px;
    
`;

const CardBox = styled.div`
    width: 25vw;
    height: 20vh;
    background: red;
    margin: 10px 10px;
    padding: 10px;
`;

const CardText = styled.h2`
justify-content: center;
color: #333333;
background: #FFFFFF;
padding: 10px;
text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15);
`;



// Second Row of Cards
const BottomCards = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 95%;
    margin: 20px;
    
`;

//Footer
const Footer = styled.p`
    display: flex;
    justify-content: center;
`;
 
// App
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
                     <div className="Logo"> 
                        <HeroText>Your favorite food while coding</HeroText>
                        <PizzaButton to={OrderForm}>Want Pizza?</PizzaButton>
                    </div>
                    
            </HeroDiv>

            <TopCards>
                    <CardText>Best Food Deliver for those late night pushes!</CardText>
                    <CardBox>
                        <div>
                        <button>McDonalds</button> 
                        </div>
                    </CardBox>
                    <CardBox>
                        <div>
                        <button>Taco Bell</button> 
                        </div>    
                    </CardBox>
                    <CardBox>
                        <div>
                        <button>Subway</button> 
                        </div>
                    </CardBox>

            </TopCards>
            <BottomCards>
                    <CardText>Best Food Deliver for those late night pushes!</CardText>
                    <CardBox>
                        <div>
                        <button>McDonalds</button> 
                        </div>
                    </CardBox>
                    <CardBox>
                        <div>
                        <button>Taco Bell</button> 
                        </div>    
                    </CardBox>
                    <CardBox>
                        <div>
                        <button>Subway</button> 
                        </div>
                    </CardBox>

            </BottomCards>

            <Footer>
                <p>Copyright 2020 - WebPT23</p>
            </Footer>
          
        
{/* 
<Route exact path="/" component={App} />
<Route exact path="/pizza" component={OrderForm} /> */}
</MainDiv>
    );
}