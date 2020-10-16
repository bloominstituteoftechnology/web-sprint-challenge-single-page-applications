import React from "react";
import {
  FormWrap,
  FormHead,
  HeroHead,
  HeroImg,
  FormInputs,
  FormLabel,
  SizeSelect,
  SizeOption,
  SauceCheck,
} from "./indexStyles";
const Form = (props) => {
  const { formValues, onChange } = props;
  return (
    <FormWrap className="form-wrapper">
      <FormHead className="form-header">
        <HeroHead>Build Your Own Pizza</HeroHead>
        <HeroImg src="#" />
      </FormHead>
      <FormInputs>
        <FormLabel htmlFor="size" className="form-size">
          Choice Of Size
          <SizeSelect name="size" onChange={onChange}>
            <SizeOption value="">----Select Size----</SizeOption>
            <SizeOption value="s">----Small----</SizeOption>
            <SizeOption value="m">----Medium----</SizeOption>
            <SizeOption value="l">----Large----</SizeOption>
          </SizeSelect>
        </FormLabel>
        <FormLabel htmlFor="sauceRed" onChange={onChange}>
          Original Red
          <SauceCheck
            name="sauceRed"
            onChange={onChange}
            type="radio"
            name="sauce"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="sauceRanch" onChange={onChange}>
          Ranch And Garlic
          <SauceCheck
            name="sauceRanch"
            onChange={onChange}
            type="radio"
            name="sauce"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="sauceBBQ" onChange={onChange}>
          BBQ
          <SauceCheck
            name="sauceBBQ"
            onChange={onChange}
            type="radio"
            name="sauce"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="sauceSpinach" onChange={onChange}>
          Spinach Alfredo
          <SauceCheck
            name="sauceSpinach"
            onChange={onChange}
            type="radio"
            name="sauce"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="topping" onChange={onChange}>
          Pepperoni
          <SauceCheck
            name="topping"
            onChange={onChange}
            type="checkbox"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="topping" onChange={onChange}>
          Sausage
          <SauceCheck
            name="topping"
            onChange={onChange}
            type="checkbox"
          ></SauceCheck>
          </FormLabel>
          <FormLabel htmlFor="topping" onChange={onChange}>
            Canadian Bacon
          <SauceCheck
            name="topping"
            onChange={onChange}
            type="checkbox"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="topping" onChange={onChange}>
            Italian Sausage
          <SauceCheck
            name="topping"
            onChange={onChange}
            type="checkbox"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="topping" onChange={onChange}>
            Grilled Chicken
          <SauceCheck
            name="topping"
            onChange={onChange}
            type="checkbox"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="topping" onChange={onChange}>
            Onions
          <SauceCheck
            name="topping"
            onChange={onChange}
            type="checkbox"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="topping" onChange={onChange}>
            Green Pepper
          <SauceCheck
            name="topping"
            onChange={onChange}
            type="checkbox"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="topping" onChange={onChange}>
            Diced Tomatos
          <SauceCheck
            name="topping"
            onChange={onChange}
            type="checkbox"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="topping" onChange={onChange}>
            Black Olives
          <SauceCheck
            name="topping"
            onChange={onChange}
            type="checkbox"
          ></SauceCheck>
        </FormLabel>
        <FormLabel htmlFor="special">
            Special Instructions
        <input 
        type='text'
        name='special'
        />
        </FormLabel>
      </FormInputs>
    </FormWrap>
  );
};

export default Form;
