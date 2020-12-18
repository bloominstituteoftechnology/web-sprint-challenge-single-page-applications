import React, from "react"
import { Link, useRouteMatch } from "react-router-dom"; 

import React from "react-router-dom"


export default function Shop (){













    return(
        <div>
            <form>
            <div>
            <label>
           
          <input
            value={formState.name}
            onChange={handleChange}
            name="name"
            type="text"
            maxLength="15"
            placeholder="name"
          />
        </label>
        </div>
        <div>
            <label for= "Pizza">Choose a Pizza Size:</label>

            <select name="Pizza Sizes" id="pizza">
           <option value="Small">Small</option>
            <option value="medium"> Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
            </select>
            </label>
            </div>
            <div>
            <label htmlFor="Toppings">
          <p>Choose your toppings</p>
             <input
            type="checkbox"
            name="pepporoni"/>
            <input 
            type = "checkbox"
            name = "mushrooms" />
            <input 
            name ="green peppers"
            type = "checkbox" />
            <input
            name ="extra cheese"
            type = "checkbox" />
        </label>
        </div> 
          <p>Special instructions</p>
         <input type="text" size="100" >

        
        
        <button disabled={disabled}>Place your order</button>
        
      </form>
  
      </div>
      















             </form>
              








    
        </div>









    )



    


















}