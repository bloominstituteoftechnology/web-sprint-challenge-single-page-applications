import React from 'react'

function Foods({ details }) {
  if (!details) {
    return <h3>Working fetching your food&apos;s details...</h3>
  }

  return (
    <div className='food container'>
      <h2>Name: {details.username}</h2>

      {/* dropdown */}
      <p>Size: {details.size}</p>

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

export default Foods