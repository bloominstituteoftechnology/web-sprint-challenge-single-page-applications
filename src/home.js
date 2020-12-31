import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"


export default function Home() {







  return (
    <>
    <StyleSection>
      <StyleContainer>
        <StyledH1>Your Favorite Food, Delivered While Coding </StyledH1>
      </StyleContainer>
      <StyledDiv>
       <Link to="/shop">
         <StyleButton>Got Pizza?</StyleButton>
         </Link> 
      </StyledDiv>
    </StyleSection>
    
    
      <div>

        <Styledh2> More to Come ... Under Construction!</Styledh2>
      </div>

      


  
        
    </>
  );
}

const StyleSection = styled.section`
  background: beige;
  height: 70vh;
  width: 100%;
`;

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleButton = styled.button`
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 2%;
  padding-top: 3%;
  background: #561717;
  color: beige;
  font-weight: bold;
  border-radius: 50px;
  font-size: 1.3rem;
`;
const StyledH1 = styled.h1`
  margin-top:6%;
  font-size: 2.7rem;
  color: #a32020;
  font-weight: bold;
  padding:2%;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

const Styledh2 =styled.h2`
font-size:3rem;
text-align:center;
font-weight:bold;
color:#e81414;


`