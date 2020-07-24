import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import OrderForm from './OrderForm'
import { BrowserRouter as Router, Route, Switch, useLocation, useHistory } from "react-router-dom"; 

const Header = () => {
    const location = useLocation();
    const history = useHistory(); 
    
    const handleBackClick = () => {
        history.goBack(); 
    };

    const atPizzaPage = location.pathname === "/pizza"; 
    return atPizzaPage && <button onClick={handleBackClick}>Back</button>
}

ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Header /> 
                <Switch>
                    <Route exact path="/" component={App} /> 
                    <Route path="/pizza" component={OrderForm} /> 
                </Switch>
            </Router>
        </React.StrictMode>, 
        document.getElementById("root"));
