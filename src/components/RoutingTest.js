import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from '../Routes';

const RoutingTest = () => {
	return (
		<section className='page-section bg-light' id='routing-test'>
			<div className='container'>
				<h2>Routing Test</h2>

				<Router>
					<Link to='/route1'>Route1</Link>
					<Link to='/route2'>Route2</Link>
					<Routes />
				</Router>
			</div>
		</section>
	);
};

export default RoutingTest;
