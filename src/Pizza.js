import React from 'react'
import { date } from 'yup'

function Pizza(props){
    return(
        <div>
            {props.order.map(data =>(
                <div>
                    <h2>Order</h2>
                    <p>{data.formState}</p>
                </div>
            ))}
        </div>
    )
}

export default Pizza