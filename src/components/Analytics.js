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
					<div className='mb-4'>
						<Link
							to='/doughnut'
							className='btn btn-warning btn-sm mx-1'
						>
							Doughnut
						</Link>
						<Link
							to='/barchart'
							className='btn btn-warning btn-sm mx-1'
						>
							Barchart
						</Link>
						<Link
							to='/linechart'
							className='btn btn-warning btn-sm mx-1'
						>
							Linechart
						</Link>
						<Link
							to='/radarchart'
							className='btn btn-warning btn-sm mx-1'
						>
							Radarchart
						</Link>
					</div>
					<Routes />
				</Router>
			</div>
		</section>
	);
};

export default Analytics;
