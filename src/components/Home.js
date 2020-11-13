import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
	const history = useHistory();
	const routeToOrderForm = () => {
		// console.log('history', history);
		history.push('/order-form');
	};

	return (
        <>
			{/* banner */}
			<div className='banner'>
				<h2>Pizza for Delivery and carryout.</h2>
				<button onClick={routeToOrderForm}>Pizza?</button>
			</div>
            </>
	);
}
