import React from "react";
import { useHistory, Link } from 'react-router-dom'

function Home(props) {
  console.log('Home', props)

  // history from Hook is the same as props.history. You may use either, but you must use the hook when you don't have access to the react router props.
  const history = useHistory();
  return (
    <div>
        <Link id="formLink" to="pizza">
            Pizza
        </Link>
        Home
    </div>
  );
}

export default Home;