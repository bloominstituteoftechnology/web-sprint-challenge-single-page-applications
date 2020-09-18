import React from 'react'

export default function Order({ details }) {
  if (!details) {
    return <h3>fetching details</h3>
  }

  return (
    <div className='ordercontainer'>
      <h2>{details.name}</h2>
      <h2>{details.size}</h2>
      <h2>{details.toppings}</h2>
      <h2>{details.instructions}</h2>
    </div>
  )
}