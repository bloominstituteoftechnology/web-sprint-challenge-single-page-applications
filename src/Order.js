import './App.css';
import React from 'react';


const Order = (props) => {
  const { pizza } = props;
  console.log("Props in Ordder: ", props);
  return (
    
    <div class="pizza-form">
      <h2>Congratulations {pizza.personName}!</h2>
      <br/>
      <h2>Your {pizza.pizzaSize} pizza order was successful.<h2>
    
      </h2>  Your {pizza.sauce} pizza includes toppings:  </h2>
      <br/>
      {console.log("Pizza Order: ", pizza)}
      {pizza.sausage ? <p> sausage </p> : "" }
      {pizza.canadianBacon ? <p> canadian bacon </p> : "" }
      {pizza.spicyItalianSausage ? <p> spicy italian sausage </p> : "" }
      {pizza.grilledChicken ? <p> grilled chicken </p> : "" }
      {pizza.onions ? <p> onions </p> : "" }
      {pizza.greenPepper ? <p> green pepper </p> : "" }
      {pizza.dicedTomato ? <p> diced tomato </p> : "" }
      {pizza.blackOlives ? <p> black olives </p> : "" }
      {pizza.roastedGarlic ? <p> roasted garlic </p> : "" }
      {pizza.artichokeHearts ? <p> artichoke hearts </p> : "" }
      {pizza.threeCheese ? <p> three cheese </p> : "" }
      {pizza.pineapple ? <p> pineapple </p> : "" }
      {pizza.extraCheese ? <p> extra cheese </p> : "" }
      <br/>
      <h2>Special Instructions: </h2>
      {pizza.glutenFree ? <p> gluten free crust </p> : "" }
      {pizza.specialInstructions ? <p> ${pizza.specialInstructions} </p> : "" }
      <h2>Thank you</h2>

    </div>

  );
};

export default Order;

// pizzaSize: formValues.pizzaSize,
// redOriginal: formValues.redOriginal,
// garlicRanch: formValues.garlicRanch,
// bbqSauce: formValues.bbqSauce,
// spinachAlfredo: formValues.spinachAlfredo,
// sausage: formValues.sausage,
// canadianBacon: formValues.canadianBacon,
// spicyItalianSausage: formValues.spicyItalianSausage,
// grilledChicken: formValues.grilledChicken,
// onions: formValues.onions,
// greenPepper: formValues.greenPepper,
// dicedTomato: formValues.dicedTomato,
// blackOlives: formValues.blackOlives,
// roastedGarlic: formValues.roastedGarlic,
// artichokeHearts: formValues.artichokeHearts,
// threeCheese: formValues.threeCheese,
// pineapple: formValues.pineapple,
// extraCheese: formValues.extraCheese,
// glutenFree: formValues.glutenFree,
// specialInstructions: formValues.specialInstructions,