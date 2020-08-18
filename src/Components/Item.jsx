import React from "react";
import { useParams, useRouteMatch } from 'react-router-dom'
// import ItemDescription from './ItemDescription'
// import ItemShipping from './ItemShipping'

// we will be importing and adding a lot of items to this component
function Item(props) {
   // props.items --> all of our items
  // shopItem --> the item that matches the id in the URL

  // useParams https://reacttraining.com/react-router/web/api/Hooks/useparams
  // returns an object of key/value pairs of URL parameters (keys declared with colon in Route path). Use it to access match.params of the current <Route>.
  // we need to use useParams when we do not use a render method of route (component= or render= in Route JSX)
  const params = useParams();
  console.log(params)

  // useRouteMatch https://reacttraining.com/react-router/web/api/Hooks/useroutematch
  // useRouteMatch hook attempts to match the current URL in the same way that a <Route> would
  // returns Object -> {path: ...., url: ...., ...}
  // it provides a path (like what we declare in a Route that made Item render "/shop/:banana"), and the current url (what we see in the browser)
  const routeMatch = useRouteMatch();
  console.log(routeMatch)


 // pull array of objects from props.items (this is the products stored in App state)
  // iterate over each object to find the object that has the same id as the one in the URL (params.itemID)
  // .find() is arr fn that returns first valid result. id is unique so this should return the correct object
  // compare item.id is a number and params.banana is a string, so make the string a number to compare values correctly.
  const shopItem = props.items.find(item => item.id === Number(params.yumyum))
  return (
    <div className="item-wrapper">
      <div className="item-header">
      <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>{shopItem.price}</h4>
        </div>
        
        
      </div>
      <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
     
      

    </div>
  );
}
export default Item;
