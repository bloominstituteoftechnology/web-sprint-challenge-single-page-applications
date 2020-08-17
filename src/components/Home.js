import React from "react";
import { Button } from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom';
import Carousel from "./Carousel.js";
import { Container, Row, Col } from 'reactstrap';
const Home= () => {
    return(
        <div className = "flex">
            <Container fluid = "sm">
              <Carousel></Carousel>
      </Container>
        <p>Home To The Famouse American Style of Turtle Neck Pizza!</p>
              <Link to = "/pizza"><Button color = "secondary" type = "submit">Click Here To Create You're Own Custom Pizza!</Button> </Link>
        </div>
    )
}

export default Home;