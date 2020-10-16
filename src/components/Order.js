import React from 'react'

function Order({ details }) {
  if (!details) {
    return <h3>Working fetching your friends details...</h3>
  }

  return (
    <div>

      <h2>{details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Instructions: {details.instructions}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Order;