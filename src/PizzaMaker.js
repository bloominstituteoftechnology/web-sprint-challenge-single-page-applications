import React from 'react';
import { Form, Input, Button } from 'reactstrap';

export default function PizzaMaker(props) {
    // var price = '0'; // Starting Price

    const {
        onSubmit,
        values,
    } = props
    return (
        <Form onSubmit={onSubmit}>
            
            <h2>Build Your Own Pizza</h2>
            <h3>Choose Your Size</h3>
            <Input type="select" name="pizzaSize">
                {/* onChange=priceChange(4) didn't work */ }
                <option id="personalPizza" name="personalPizza" value={values.personalPizza}>8 inch (Personal)</option>
                <option value={values.smallPizza}>10 inch (Small)</option>
                <option value={values.mediumPizza}>12 inch (Medium)</option>
                <option value={values.largePizza}>14 inch (Large)</option>
                <option value={values.xlargePizza}>16 inch (X-Large)</option>
            </Input>

            <h3>Choose Your Sauce</h3>
            <Input type="radio" name="sauce" value="Original" /> Original<br />
            <Input type="radio" name="sauce" value="Extra Original" /> Extra Original<br />
            <Input type="radio" name="sauce" value="Garlic" /> Garlic<br />
            <Input type="radio" name="sauce" value="BBQ" /> BBQ<br />

            <h3>Add Toppings</h3>
            <Input type="checkbox" name="pepperoni" value="Pepperoni" /> Pepperoni<br />
            <Input type="checkbox" name="sausage" value="Sausage" /> Sausage<br />
            <Input type="checkbox" name="bacon" value="Bacon" /> Bacon<br />

            <h3>Special Instructions</h3>
            <Input type="textarea" name="special"></Input><br />

            <Input type="number" name="quantity" onChange="quantity()" /><br />
            <div>{/*${changePrice(price)}.00*/}$15.00</div>
            <Button name="submitOrder" onClick="order()">Submit Order</Button>
        </Form>
    )
    // function changePrice(val) {
    //     price = price + val;
    //     return price;
    // }
}