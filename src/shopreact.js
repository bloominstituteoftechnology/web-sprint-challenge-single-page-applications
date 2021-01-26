import React, { useState, useEffect } from "react";
import { FormGroup, Label, Input,CustomInput, Button   } from 'reactstrap';
import "./shop.css"


export default function Shop() {

    const [formState, setFormState] = useState({
        name: "",
        pizzasizes: "",
        pepporoni: false,
        mushrooms: false,
        greenpeppers: false,
        extracheese: false,
        instructions: "",
      });

      
    return (
        <div className="shop--container">
            <div className="shop-header-container">
                <h1> Build your own Pizza </h1>
                <img className="header-img"
                    src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
                ></img>
            </div>


            <h3>Choice of Size</h3>
            <h4>Required</h4>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                <option value=''>----Select----</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                </Input>
            </FormGroup>


            <h3>Choice of Sauce</h3>
            <h4>Required</h4>

            <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
            Garlic ranch
          </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
            Original Red
          </Label>
            </FormGroup>
            <FormGroup check >
                <Label check>
                    <Input type="radio" name="radio1"  />{' '}
            BBQ sauce
          </Label>
            </FormGroup>
            <FormGroup check >
                <Label check>
                    <Input type="radio" name="radio1"  />{' '}
            Spinach
          </Label>
            </FormGroup>



            <h3>Add Toppings</h3>
            <h4>Choose Up To Ten</h4>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Pepperoni
        </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Sausage
        </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Canadian Bacon
        </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    italian sausage
        </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Grilled chicken
        </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Onions
        </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Green Pepper
        </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Diced Tomatoes
        </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
          CBlack Olives
        </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Roasted Garlic
        </Label>
            </FormGroup>




            <h3>Choice of substitue</h3>
            <h4>Choose Up To 1</h4>

            <FormGroup>

        <div>
          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Gluten Free crust +$100" />
        </div>
      </FormGroup>


      <h4>Special Instructions</h4>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      
      <Button>Add To Order</Button>
        </div>
    )
}

