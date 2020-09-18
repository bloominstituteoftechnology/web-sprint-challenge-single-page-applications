import React from 'react'

export default function Order({details}){
    if (!details){
        return<p>Working on getting you complted order details...</p>
    }
    return(
        <div className = "orderDetailsContainer">
            <h2>{details.name}</h2>
            <p>Pizza Size: {details.size}</p>
            {!!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((choose, idx)=> 
                        <li key = {idx}>{choose}</li>
                        )}
                    </ul>
                 </div>
            }
            <p>Special Crust: {details.substitutes}</p>
            <p>Special Instructions: {details.instructions} </p>
        </div>
    )
}