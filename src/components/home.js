//importing my statements
import React from "react"
import { useHistory } from "react-router"
import styled from "styled-components";

const Buttonhome = styled.div`
    padding: 0%;
`

export default function Home()
{
    
    const history = useHistory();

    
    const routeToForm = () => 
    {
      
      console.log(history);

     
      history.push("pizza");
    }

    //Return function
  return (
        <div className = "homebox">
            <Buttonhome id= "order-pizza" onClick={routeToForm}>ORDER YOU SOME PIZZA</Buttonhome>
        </div>
    )};