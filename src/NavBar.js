import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
const Navbar = () => {
	return (
		<div className="App">
			<nav>
				<h1 className="store-header">Lambda Eats</h1>
				<div className="nav-links">
					{/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
					{<Link to="/">Home</Link>}
					{<Link to="/items-list">Shop</Link>}
				</div>
			</nav>

			{/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
			<Switch>
				<Route>
					<Home />
				</Route>
			</Switch>
		</div>
	);
};
export default Navbar;
