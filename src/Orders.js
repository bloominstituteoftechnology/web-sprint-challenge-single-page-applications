import React from 'react';

const Orders = props => {
    console.log(props.orders)
  
  return (
    <div className="movie-list">
      {props.orders.map(order => (
          <OrderR order={order} />
      ))}
    </div>
  );
}





function OrderR({ order }) {
  return (
    <div>
      
      
      
      
      <h2>{order.name}</h2>
      <div>
        Size: <em>{order.size}</em>
      </div>
      <div>
      Sauce: <em>{order.sauce}</em>
      </div>
  <p>{order.topping}</p>

      <div>
  Time-created: <strong>{order.createdAt}</strong>
  </div>
    </div>
  );
}

export default Orders;
