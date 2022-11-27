import React from "react";
import {Route, Link} from 'react-router-dom'
import styled from "styled-components";

const StyledWrapper = styled.div`
    background-image: url(https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60);
    background-repeat: no-repeat;
    background-position: center;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15%;
    border:dashed 5px black;
`;

const StyledPlace1 = styled.div`
    display: flex;
  background-image: url(https://images.unsplash.com/photo-1585159183446-0fc0eaf9e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWNkb25hbGRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60);
  max-width: 35%;
  height: 20rem;
  `;
  const StyledPlaces2 = styled.div` 
    display: flex;
    background-image: url(https://images.unsplash.com/photo-1574547070285-7eba5c706ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8V2F3YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60);
    max-width: 35%;
    height: 15rem;
    background-repeat: no-repeat;
    `;

    const StyledPlaces3 = styled.div` 
    background-image: url(https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcmJ1Y2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60);
    max-width: 35%;
    height: 20rem;
    `;

function Home(props) {
    return (
        <div className="home-wrapper">
            <header>
                <h1>Bloomtech Eats</h1>
                <div className="nav-links">
                    <Link to="/"><button>Home</button></Link>
                    <button>Help</button>
                </div>
            </header>
            <StyledWrapper className="buy-pizza">
                <h1>Your favorite food,<br></br> Delivered while coding</h1>
                <Link to="/pizza"><button id="order-pizza">Order your Pizza!</button></Link>                
            </StyledWrapper>
            <div >
                <h3>Food Delivery Available!</h3>
                <StyledPlace1 className="places1">
                </StyledPlace1>
                    <button id="morder">Order from Mcdonalds!</button>
                <StyledPlaces2>
                </StyledPlaces2>
                <button id="morder">Order your Wawa Special Today!</button>
                <StyledPlaces3></StyledPlaces3>
                <button id="morder">Place Your StarBucks order</button>
            </div>
        </div>

        
    )
}


export default Home