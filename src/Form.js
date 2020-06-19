import React from 'react';


export default function Form (){




    return(

        <form className="form" >
            <label HTMLFor="size">Choice of Size</label>
            <select id="size" className="options">
            <option value="Select">Select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            </select>
<div className="sauceSelection">
    <h2 className="sauce">Choice of Sauce</h2>
<label HTMLFor="originalRed">Original Red</label>
<input type="radio" id="originalRed" name="originalred"/>
  
 <label HTMLFor="originalRed">Original Red</label>
 <input type="radio" id="originalRed" name="originalred"/>
 
 <label HTMLFor="originalRed">Original Red</label>
 <input type="radio" id="originalRed" name="originalred"/>
 </div>

{/* 
Original Red
Garlic Ranch
BBQ Sauce
Spinach Alfredo  */}

        </form>
    )
}