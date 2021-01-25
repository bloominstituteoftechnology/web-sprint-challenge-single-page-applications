import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <FormWhole>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Build your own pizza
      </h2>
      <ImageContainer>
        <img
          src="./images/istockphoto-938742222-612x612.jpg"
          style={{ width: "100%", height: "450px" }}
        />
      </ImageContainer>
      <Category>Name of Order</Category>
      <Input type="text" style={{ width: "60px" }} />
      <Category>Choice of Size</Category>
      <Select id="size">
        <option>Tiny</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>Huge</option>
      </Select>
      <Category>Choice of Sauce</Category>
      <label id="sauce">
        <Input type="radio" />
        BBQ
        <Input type="radio" />
        Mustard
        <Input type="radio" />
        Custard
        <Input type="radio" />
        Yogurt
        <Input type="radio" />
        Marinara
      </label>
      <Category>Choose Toppings</Category>
      <label id="topping">
        <Input type="checkbox" />
        Carrots
        <Input type="checkbox" />
        Junior Mints
        <Input type="checkbox" />
        Chocolate Chips
        <Input type="checkbox" />
        Gummy Bears
      </label>
      <Category>Special Instructions</Category>
      <label id="instructions">
        <Input
          type="text"
          style={{ width: "95%", height: "40px", fontSize: "20px" }}
          placeholder="none"
        />
      </label>
      <Input type="submit" value="Add to Order" />
    </FormWhole>
  );
};
export default Form;

const FormWhole = styled.div`
  border: 1px solid lightgray; // This is necessary for there to be margin above the h2
  margin: 0% 25%;
  margin-bottom: 100px;
  padding-bottom: 30px;
  border-radius: 5px;
  box-shadow: 3px 5px 5px 5px gray;
  // display: flex;
  // flex-direction: column;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 300px;
`;

const Category = styled.label`
  display: block;
  background-color: lightgray;
  padding: 20px 10px;
  font-size: 20px;
`;

const Select = styled.select`
  background-color: white;
  margin: 20px 10px;
`;

const Input = styled.input`
  background-color: white;
  margin: 20px 10px;
`;
