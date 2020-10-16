import React from "react";
import { useHistory, Link } from 'react-router-dom'


function Home(props) {
  console.log('Home', props)

    
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