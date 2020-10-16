import React from "react";
import { useHistory } from "react-router-dom";

export default function Home(props){
    const history = useHistory();

    return(
        <div className="home">
            <button className="orderButton" onClick={() => history.push("/pizza")}>Build Your Pizza!</button>
        </div>
    )
}