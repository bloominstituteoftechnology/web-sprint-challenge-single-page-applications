import React from 'react'



import { Link } from 'react-router-dom'


//Styling
import  styled  from 'styled-components'
const Container = styled.div`
  background-color: #287D7D;
  text-align: center;
  padding: 1px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-family: Gill Sans;
  color: #FFFF9D
  
`

const CenterContainer = styled.div`
  background-color: #A1E8D9;
  
  padding: 100px;
  margin: 0 auto;
  
  font-size: 40px;

`


export default function HomePage() {
    return (
       
        <Container>
            <div>
                <h1>Lambda Eats</h1>
                <Link to='/'>
                  <button>Home</button>
                </Link>  
                <Link to='/help'>
                  <button>Help</button>
                </Link>  
            </div>

            <br />

            <CenterContainer>
                <p>Your favorite food delivered while coding</p>
                <Link to="/pizza">
                  <button >Pizza?</button>
                </Link>
            </CenterContainer>

            <br />

            <div>
                <h3>Food Delivery in Gotham City</h3>

            </div>
           
        </Container>
        
    );
}