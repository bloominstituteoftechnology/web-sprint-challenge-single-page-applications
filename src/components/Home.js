import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const StyledHome = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	.banner {
		/* border: 1px solid red; */
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 40vh;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
			url('https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2450&q=80');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		h2 {
			color: ${(pr) => pr.theme.white};
		}
	}
`;

export default function Home() {
	const history = useHistory();
	const routeToOrderForm = () => {
		console.log('history', history);
		history.push('/order-form');
	};

	return (
		<StyledHome>
			{/* banner */}
			<div className='banner'>
				<h2>Your favorite food, delivered while coding.</h2>
				<button onClick={routeToOrderForm}>Pizza?</button>
			</div>
			{/* food delivered in gotham city */}
			<div className='food-options'>
				<h3>Food Delivery in Gotham City</h3>
			</div>
		</StyledHome>
	);
}
