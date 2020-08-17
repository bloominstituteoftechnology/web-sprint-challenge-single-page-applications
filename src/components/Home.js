import React from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';


const Home= () => {
    return(
        <div className = "flex">
            <Container fluid = "sm">
                 <img src="https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="logo"/>
            </Container>
            <p>Home To The Famouse American Style of Turtle Neck Pizza!</p>
            <Link to = "/pizza">
                <Button color = "info" type = "submit">Order Now</Button> 
            </Link>
        </div>
    )
}

export default Home;