<form onSubmit={formSubmit}>

<h2>Build Your Own Pizza</h2>
<h3>Choice of Size</h3>
<p>Required</p>

<select name="pizzaSize" onChange={inputChange} id="size-select">
  <option value="">Select</option>
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
</select>

<h3>Choice of Sauce</h3>
<p>Required</p>

<input type="radio" name="sauce" value="originalRed"> Original Red
<input type="radio" name="sauce" value="garlicRanch"> Garlic Ranch
<input type="radio" name="sauce" value="bbqSauce"> BBQ Sauce
<input type="radio" name="sauce" value="spinachAlfredo"> Spinach Alfredo

<h3>Add Toppings</h3>
<p>Choose up to 10.</p>

<Checkbox topping={pepperoni} inputChange={inputChange} formValues={formValues}/>

{/* <Checkbox topping={sausage} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={canadianBacon} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={spicyItalianSausage} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={grilledChicken} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={onions} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={greenPepper} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={dicedTomatos} inputChange={inputChange} formValues={formValues}/>

<Checkbox topping={blackOlives} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={roastedGarlic} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={artichokeHearts} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={threeCheese} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={pineapple} inputChange={inputChange} formValues={formValues}/>
<Checkbox topping={extraCheese} inputChange={inputChange} formValues={formValues}/> */}

<h3>Choice of Substitute</h3>
<p>Choose up to 1.</p>

{/* {insert toggle here} */}

<h3>Instructions</h3> 

<Input
    type="text"
    name="specialInstructions"
    placeholder="Anything else you'd like to add?"
    onChange={inputChange} 
    value={formValues.specialInstructions}
    label={"Special Instructions"}
/> 

  <p>Incrementor goes here</p>

  <p>Add to Order Button</p>

  <button id="submitBtn" disabled={disabled}>Submit</button> 

  <div>{formErrors.name}</div>
  <div>{formErrors.email}</div>
  <div>{formErrors.password}</div>
  <div>{formErrors.role}</div>
  <div>{formErrors.acceptTerms}</div>

</form>
