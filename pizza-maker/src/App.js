import "./App.css";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OrderConfirmation from "./ConfirmationPage/OrderConfirmation";
import OrderPage from "./OrderPage/OrderPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/confirm" component={OrderConfirmation} />
      </div>
    </Router>
  );
}

export default App;
