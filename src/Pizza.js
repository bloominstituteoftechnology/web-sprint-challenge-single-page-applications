import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import PizzaMaker from './PizzaMaker';

export default function Pizza(props) {
    const { pizza } = props;
    if (!pizza) {
        return ('retrieving...')
    }

    return (
        <Card body inverse color="success" style={{margin:"24px 5%"}}>
            <CardBody>
                <CardTitle>Your Pizza</CardTitle>
                <CardText>{pizza.personalPizza}</CardText>
                <CardText>{pizza.smallPizza}</CardText>
                <CardText>{pizza.mediumPizza}</CardText>
                <CardText>{pizza.largePizza}</CardText>
                <CardText>{pizza.xlargePizza}</CardText>
            </CardBody>
        </Card>
    )
}