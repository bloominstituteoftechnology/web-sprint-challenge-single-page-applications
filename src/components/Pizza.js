import React from 'react'


function Pizza(props) {
    return (
        <div>
            {props.order.map(data => (
                <div>
                    <h2>Order Here</h2>
                    <p>{data.formState}</p>
                </div>
            ))}
        </div>
    )
}


export default Pizza