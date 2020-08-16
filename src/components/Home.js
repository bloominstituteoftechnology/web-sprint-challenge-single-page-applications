import React from "react";
import { Button } from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom';

const Home= () => {
    return(
        <div>
              <Link to = "/pizza"><Button color = "secondary" type = "submit">Click Here To Create You're Own Custom Pizza!</Button> </Link>
        </div>
    )
}

export default Home;