import React from 'react';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Analytics from './components/Analytics';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Promo from './components/Promo';
import './App.css';
import { Link } from 'react-scroll';

function App() {
	const portfolioLinks = [
		{
			title: 'Threads',
			caption: 'Illustration',
			type: 1,
		},
		{
			title: 'Explore',
			caption: 'Graphic Design',
			type: 2,
		},
		{
			title: 'Finish',
			caption: 'Identity',
			type: 2,
		},
		{
			title: 'Lines',
			caption: 'Branding',
			type: 3,
		},
		{
			title: 'Southwest',
			caption: 'Website Design',
			type: 3,
		},
		{
			title: 'Window',
			caption: 'Photography',
			type: 3,
		},
		{
			title: 'Pizza',
			caption: 'I love pizza!',
			type: 4,
		},
	];

	return (
		<div className='App'>
			<Navbar />
			<header className='masthead' id='page-top'>
				<div className='container'>
					<div className='masthead-subheading'>
						Welcome To Our Studio!
					</div>
					<div className='masthead-heading text-uppercase'>
						It's Nice To Meet You
					</div>
					<Link
						activeClass='active'
						to='services'
						spy={true}
						smooth={true}
						duration={1000}
						className='btn btn-primary btn-xl text-uppercase js-scroll-trigger'
						// href='#services'
					>
						Tell Me More
					</Link>
				</div>
			</header>
			<Promo />
			<Analytics />
			<Pricing />
			<Services />
			<Portfolio portfolioLinks={portfolioLinks} />
			<About />
			<Team />
			<Contact />

			<div className='py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3 col-sm-6 my-3'>
							<a href='#!'>
								<img
									className='img-fluid d-block mx-auto'
									src={require('./assets/img/logos/envato.jpg')}
									alt=''
								/>
							</a>
						</div>
						<div className='col-md-3 col-sm-6 my-3'>
							<a href='#!'>
								<img
									className='img-fluid d-block mx-auto'
									src={require('./assets/img/logos/designmodo.jpg')}
									alt=''
								/>
							</a>
						</div>
						<div className='col-md-3 col-sm-6 my-3'>
							<a href='#!'>
								<img
									className='img-fluid d-block mx-auto'
									src={require('./assets/img/logos/themeforest.jpg')}
									alt=''
								/>
							</a>
						</div>
						<div className='col-md-3 col-sm-6 my-3'>
							<a href='#!'>
								<img
									className='img-fluid d-block mx-auto'
									src={require('./assets/img/logos/creative-market.jpg')}
									alt=''
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3 col-sm-6 my-3'>
							<a href='#!'>
								<img
									className='img-fluid d-block mx-auto'
									src={require('./assets/img/logos/envato.jpg')}
									alt=''
								/>
							</a>
						</div>
						<div className='col-md-3 col-sm-6 my-3'>
							<a href='#!'>
								<img
									className='img-fluid d-block mx-auto'
									src={require('./assets/img/logos/designmodo.jpg')}
									alt=''
								/>
							</a>
						</div>
						<div className='col-md-3 col-sm-6 my-3'>
							<a href='#!'>
								<img
									className='img-fluid d-block mx-auto'
									src={require('./assets/img/logos/themeforest.jpg')}
									alt=''
								/>
							</a>
						</div>
						<div className='col-md-3 col-sm-6 my-3'>
							<a href='#!'>
								<img
									className='img-fluid d-block mx-auto'
									src={require('./assets/img/logos/creative-market.jpg')}
									alt=''
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<footer className='footer py-4'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-4 text-lg-left'>
							Copyright © Your Website 2020
						</div>
						<div className='col-lg-4 my-3 my-lg-0'>
							<a
								className='btn btn-dark btn-social mx-2'
								href='#!'
							>
								<i className='fa fa-twitter'></i>
							</a>
							<a
								className='btn btn-dark btn-social mx-2'
								href='#!'
							>
								<i className='fa fa-facebook-f'></i>
							</a>
							<a
								className='btn btn-dark btn-social mx-2'
								href='#!'
							>
								<i className='fa fa-linkedin'></i>
							</a>
						</div>
						<div className='col-lg-4 text-lg-right'>
							<a className='mr-3' href='#!'>
								Privacy Policy
							</a>
							<a href='#!'>Terms of Use</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
