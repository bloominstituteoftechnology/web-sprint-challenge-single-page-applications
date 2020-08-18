import React from "react";
import { Link } from 'react-router-dom'

// what do we need to add to this component so we can map through items?

function Food(props) {
  console.log(props);
  return (
    <div className="items-list-wrapper">
      {/* We made the entire card a Link so that if you click on the img or text
          in the store, we will navigate to that item id's page with the dynamic Link "to" string.*/}
      {props.items.map(item => (
        <Link to={`/order/${item.id}`}>
          <div className="item-card" key={item.id}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Food;

