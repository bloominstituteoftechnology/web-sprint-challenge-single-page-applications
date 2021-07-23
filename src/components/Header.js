import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'


export default function Home() {
    // const {title} = props;
    // const history = useHistory();
    // const routeToPizzaForm = () => {
    //     history.push('/pizza')}

    return (
        <Headers>
            <div>
                <h1>Lamabda Eats</h1>
                <nav className="home-login-subscribe">
                    <a href="index.html">HOME</a>
                    <a href="index.html">LogIn/Out</a>
                    <a href="index.html">Subscribe</a>
                    <Link to={'/pizza'}>
                        <button id="order-pizza">ORDER PIZZA</button>
                    </Link>
                    {/* <button id='order-pizza' onClick={routeToPizzaForm}>Pizza?</button> */}
                </nav>
            </div>
            <section className="logo">
            </section>
        </Headers>
    )
}

const Headers = styled.div`
h1{
    font-family: 'Chelsea Market', cursive;
    font-size: 2rem;
    color: black;
    padding-left: 2%;
    margin-bottom: 2%;
    
}
h2{
font-family: 'Chelsea Market', cursive;
font-size: 4rem;
color: black;
padding-left: 2%;
}

a{
text-decoration: none;
background-color: rgb(179, 170, 170);
padding: 1%;
border-radius: 25%;
margin: 0 1%;
&:hover{
    background-color: rgb(11, 223, 57);
    transform:scale(2);
    transition: all 0.5s ease-in-out;
}
transition: all 0.5s ease-in-out;

button{
text-decoration: none;
background-color: rgb(179, 170, 170);
padding: 1%;
border-radius: 25%;
margin: 0 1%;
&:hover{
    background-color: rgb(11, 223, 57);
    transform:scale(2);
    transition: all 0.5s ease-in-out;
}
transition: all 0.5s ease-in-out;


header{
background-color:#444c55;
}
nav{
display:flex;
flex-direction: row;
justify-content:flex-start;
margin: 1%;	
}`

