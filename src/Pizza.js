import React from 'react'

export default function Pizza(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your Pizza details...</h3>
  }

  return (
    <div className='Pizza container'>
      <p>size: {details.size}</p>
      <p>sauces: {details.sauces}</p>
      <p>Role: {details.role}</p>

      {
        !!details.topping && !!details.topping.length &&
        <div>
          Toppings:
          <ul>
            {details.topping.map((choose, idx) => <li key={idx}>{choose}</li>)}
          </ul>
        </div>
      }
      <p>special instructions: {details.specialInstructions} </p>
    </div>
  )
}
