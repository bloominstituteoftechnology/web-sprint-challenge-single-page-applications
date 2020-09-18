import React from 'react'

export default function Order({details}){
    if (!details){
        return<p>Working on getting you complted order details...</p>
    }
    return(
        <div className = "orderDetailsContainer">
            <h2></h2>
        </div>
    )
}