import React from 'react';

function OrderConfirmation(props) {
  return (
    <div>
      {props.order?.name && (
        <div>
          <h3>{props.order.name} - Your order is on its way</h3>
          <p>This is your order number: {props.order.orderNumber}</p>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
