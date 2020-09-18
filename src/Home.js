import React from "react";
// We'll need React Router's own version of the History API
import { useHistory } from "react-router-dom";

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list
  const history = useHistory();

  const routeToShop = () => {
    // react router own version of the History API
    // for example, we could navigate to different places,
    // after checking auth status etc...
    // IMPERATIVE CODE (VS DECLARATIVE COULD WHICH WAS THE <Link />)
    console.log(history);
    history.push("/items-list");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button onClick={routeToShop} className="md-button shop-button">
        Shop now!
      </button>
    </div>
  );
}