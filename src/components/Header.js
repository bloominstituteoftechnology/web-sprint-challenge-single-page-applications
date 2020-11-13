import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
	return (
		<>
			<div>
					<h1>Lambda Eats</h1>
				<nav>
					<Link to='/'>
                        Home
                        </Link>
				</nav>
			</div>
		</>
	);
}