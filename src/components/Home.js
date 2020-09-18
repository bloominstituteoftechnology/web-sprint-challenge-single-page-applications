import React from "react";
import { useHistory, Link } from 'react-router-dom'

function Home(props) {
  console.log('Home', props)

  // history from Hook is the same as props.history. You may use either, but you must use the hook when you don't have access to the react router props.
  const history = useHistory();
  return (
    <div>
        <Link className="home" id="formLink" to="pizza">
            Home
        </Link>
        Help
    </div>
  );
}

export default Home;