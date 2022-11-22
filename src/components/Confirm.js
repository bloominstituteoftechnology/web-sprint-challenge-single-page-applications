import React from "react";
import {Link} from 'react-router-dom'
import Orders from "./Orders";
import styled from "styled-components";

const StyledDiv = styled.div`
    .reset-button{
        align-content: center;
        display: flex;
        justify-content: center;
        margin: 1rem;
    }

    .order-details{
        margin: 0 auto;
        max-width: 30rem;
        position: relative;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 10rem;
        padding-bottom: 3rem;
    }

`;

function Confirm(props) {
    const {orders, clear} = props


    return (
        <StyledDiv className="confirm-wrapper">
            <header>
                <h1>Bloomtech Eats</h1>
                <div className="nav-links">
                    <Link to="/"><button>Home</button></Link>
                    <button>Help</button>
                </div>
            </header>
            <div className="order-success">
                <h2>Success! Your order is on the way</h2>
            </div>
            <div className="reset-button"><button onClick={clear}>Clear Orders</button></div>
            
            <div className="order-details">
                {
                    orders.map(order =>{
                        return (
                            <Orders key={order.id} details={order} />
                        )
                    })
                }
            </div>

        </StyledDiv>
    )
}

export default Confirm