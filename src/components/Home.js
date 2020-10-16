import React from "react";
import { useHistory } from "react-router-dom";

export default function Home(){
    const history = useHistory();

    return(
        <div className="home">
            <button className="orderButton" onClick={() => history.push("/pizza")}>Click Here to Order!</button>
        </div>
    )
}