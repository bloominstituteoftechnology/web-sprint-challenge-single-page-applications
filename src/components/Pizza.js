import React from "react";
export default function Home (){
    return (
        (
            <form>  
                <img src="https://lh3.googleusercontent.com/proxy/GuM-6gqbjywK3tmHlL4XMiciK7KartGUf84Ounj-wJPWWggclIewUGLNHLWl01BkoablXkdq3Qk8Q0ZekH1_bpI_HIAxFAomprRDBmrP5qHrrxBLWV_2uKpVjSd05hajSo6l"/>

            <h3>Your Name</h3>
            <label>
                <textarea/>
            </label>
            

            <h2>Choice of Size</h2>
            <select htmlFor="size">
                <option value="10inch">10 Inch</option>
                <option value="14inch">14 Inch</option>
                <option value="18inch">18 Inch</option>
                <option value="24inch">24 Inch</option>
            </select>

            <h2>Choice of Sauce</h2>
            <label htmlFor="red">Original Red
                <input name="red" id="red" type="radio"/>
            </label>
            <label htmlFor="garlic">Garlic Ranch
                <input name="garlic" id="garlic" type="radio"/>
            </label>
            <label htmlFor="bbq">BBQ Sauce
                <input name="bbq" id="bbq" type="radio"/>
            </label>
            <label htmlFor="alfredo">Spinach Alfredo
                <input name="alfredo" id="alfredo" type="radio"/>
            </label>

            <h2>Add Toppings</h2>
            <label htmlFor="pepperoni">Pepperoni
                <input name="pepperoni" id="pepperoni" type="checkbox"/>
            </label>
            <label htmlFor="sausage">Sausage
                <input name="sausage" id="sausage" type="checkbox"/>
            </label>
            <label htmlFor="bacon">Canadian Bacon
                <input name="bacon" id="rebacond" type="checkbox"/>
            </label>
            <label htmlFor="spicysausage">Spicy Italian Sausage
                <input name="spicysausage" id="spicysausage" type="checkbox"/>
            </label>
            <label htmlFor="grilledchicken">Grilled Chicken
                <input name="grilledchicken" id="grilledchicken" type="checkbox"/>
            </label>
            <label htmlFor="onions">Onions
                <input name="onions" id="onions" type="checkbox"/>
            </label>
            <label htmlFor="greenpepper">Green Pepper
                <input name="greenpepper" id="greenpepper" type="checkbox"/>
            </label>
            <label htmlFor="tomatoes">Diced Tomatoes
                <input name="tomatoes" id="tomatoes" type="checkbox"/>
            </label>
            <label htmlFor="blackolives">Black Olives
                <input name="blackolives" id="blackolives" type="checkbox"/>
            </label>
            <label htmlFor="roastedgarlic">Roasted Garlic
                <input name="roastedgarlic" id="roastedgarlic" type="checkbox"/>
            </label>
            <label htmlFor="artichoke">Artichoke Hearts
                <input name="artichoke" id="artichoke" type="checkbox"/>
            </label>
            <label htmlFor="threecheese">Three Cheese
                <input name="threecheese" id="threecheese" type="checkbox"/>
            </label>
            <label htmlFor="pineapple">Pineapple
                <input name="pineapple" id="pineapple" type="checkbox"/>
            </label>
            <label htmlFor="extracheese">Extra Cheese
                <input name="extracheese" id="extracheese" type="checkbox"/>
            </label>

               
            </form>
          
        )
        
    )
}