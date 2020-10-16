import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Help from './Help';
import OrderForm from './OrderForm';

const StyledHeader = styled.div`
	/* border: 1px solid red; */
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;

	h1 {
		color: ${(pr) => pr.theme.primaryColor};
	}
	Link {
		text-decoration: none;
	}

	nav {
		display: flex;
		width: 30%;
		justify-content: space-between;
	}
`;

export default function Header() {
	return (
		<>
			<StyledHeader>
				<Link to='/'>
					<h1>Lambda Eats</h1>
				</Link>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/help'>Help</Link>
				</nav>
			</StyledHeader>
			{/* switch outside styled header so pages don't load inside header */}
			<Switch>
				<Route path={'/help'}>
					<Help />
				</Route>
				<Route path={'/order-form'}>
					<OrderForm />
				</Route>
				<Route exact path={'/'}>
					<Home />
				</Route>
			</Switch>
		</>
	);
}
