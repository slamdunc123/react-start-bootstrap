import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from '../Routes';

const Analytics = () => {
	return (
		<section className='page-section' id='analytics'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='section-heading text-uppercase'>
						Analytics
					</h2>
					<h3 className='section-subheading text-muted'>
						Lorem ipsum dolor sit amet consectetur.
					</h3>
				</div>

				<Router basename={'/react-sites/react-start-bootstrap'}>
					<Link to='/route1'>Route1</Link>
					<Link to='/route2'>Route2</Link>
					<Routes />
				</Router>
			</div>
		</section>
	);
};

export default Analytics;
