import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    border-bottom: solid black;
    border-right: solid black;
    border-radius: 25px;
    background-color: 	rgb(128, 128, 128,0.5);

    h2 {
        text-align: center;
    }

    .specifics {
        margin: 1rem;
    }
 
`;
const constants = ["chicken","pepperoni","ham","sausage","extraCheese","mushroom"]
function Orders({details}) {
    return(
        <StyledDiv key={details.id} className="order container">
            <h2>Order Number: {details.id}</h2>
            <div className="specifics">
                <p>Size: {details.size}</p>
                <p>Sauce: {details.sauce}</p>
                <div>
                <p>Toppings:</p>
                    <ul>
                        {constants.map((topping,idx) => {
                            if(details[topping] === true){
                                return(
                                    <li>{topping}</li>
                                )
                            }
                        })}
                    </ul>
                </div>
                <p>{details.gluton ? "Gluten Free Crust" : "Regular Crust"}</p>
                <p>Special instructions</p>
                <p>{details.special === "" ? "none" : details.special}</p>
            </div>

        </StyledDiv>
    )
}

export default Orders