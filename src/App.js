import React from "react";
import PizzaMaker from "./PizzaMaker";
import Pizza from "./Pizza";
import { Button, Container, FormGroup, Row, Form } from 'reactstrap'

const App = () => {
  return (
    <Container>
    <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Form>
          <Row>
        <FormGroup>
          <Button className="col-6" onClick="goHome()">Home</Button> Simple Redirect to Homepage
          <Button className="col-6" onClick="pizzaMaker()">Build a Pizza</Button>
        </FormGroup>
          </Row>
          </Form>
        </nav>
      </header>
    <PizzaMaker /> { /* Return this only if Build a Pizza Button was clicked */ }
    {/* <HomePage /> Return this only when Build a Pizza is not open */}
    <Pizza />
    </Container>
  );
};
export default App;
