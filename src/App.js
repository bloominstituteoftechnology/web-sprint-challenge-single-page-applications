import React from "react";

import Navbar from "./NavBar";
import { Route, Switch } from "react-router-dom";
const App = () => {
	return (
		<div>
			<div>
				<h1>Lambda Eats</h1>
				<Navbar />
			</div>

			<Switch>
				<Route>
					<Navbar />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
