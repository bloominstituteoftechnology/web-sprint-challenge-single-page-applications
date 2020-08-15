import React from "react";
import { useHistory } from "react-router-dom";

const history = useHistory();
  console.log(history);
  const routeToForm = event => {
    console.log("Submitting...");
    setTimeout(() => {
      history.push("/item-list");
    }, 2000);
    // history.goBack()

};