import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isShrink, setIsShrink] = useState(false);

	const handleBurgerMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		console.log(isShrink);
		function onScroll() {
			let currentPosition = window.pageYOffset;
			if (currentPosition > 200) {
				setIsShrink(true);
			} else {
				setIsShrink(false);
			}
		}

		window.addEventListener('scroll', onScroll);
		return window.addEventListener('scroll', onScroll);
	}, [isShrink]);

	return (
		<nav
			className={
				!isShrink
					? 'navbar navbar-expand-lg navbar-dark fixed-top'
					: 'navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink'
			}
			id='mainNav'
		>
			<div className='container'>
				<Link
					activeClass='active'
					to='page-top'
					spy={true}
					smooth={true}
					duration={1000}
					className='navbar-brand js-scroll-trigger'
					type='button'
				>
					<img
						src={require('../assets/img/navbar-logo.svg')}
						alt=''
					/>
				</Link>
				<button
					className={
						!isOpen
							? 'navbar-toggler navbar-toggler-right'
							: 'navbar-toggler navbar-toggler-right collapsed'
					}
					type='button'
					data-toggle='collapse'
					data-target='#navbarResponsive'
					aria-controls='navbarResponsive'
					aria-expanded='false' // sets to true
					aria-label='Toggle navigation'
					onClick={handleBurgerMenu}
				>
					Menu
					<i className='fa fa-bars ml-1'></i>
				</button>
				<div
					className={
						!isOpen
							? 'collapse navbar-collapse'
							: 'collapse navbar-collapse show'
					}
					id='navbarResponsive'
				>
					<ul className='navbar-nav text-uppercase ml-auto'>
						<li className='nav-item'>
							<Link
								activeClass='active'
								to='routing-test'
								spy={true}
								smooth={true}
								duration={1000}
								className='nav-link js-scroll-trigger'
								type='button'
								onClick={handleBurgerMenu}
							>
								Routing
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								activeClass='active'
								to='services'
								spy={true}
								smooth={true}
								duration={1000}
								className='nav-link js-scroll-trigger'
								type='button'
								onClick={handleBurgerMenu}
							>
								Services
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								activeClass='active'
								to='portfolio'
								spy={true}
								smooth={true}
								duration={1000}
								className='nav-link js-scroll-trigger'
								type='button'
								onClick={handleBurgerMenu}
							>
								Portfolio
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								activeClass='active'
								to='about'
								spy={true}
								smooth={true}
								duration={1000}
								className='nav-link js-scroll-trigger'
								type='button'
								onClick={handleBurgerMenu}
							>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								activeClass='active'
								to='team'
								spy={true}
								smooth={true}
								duration={1000}
								className='nav-link js-scroll-trigger'
								type='button'
								onClick={handleBurgerMenu}
							>
								Team
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								activeClass='active'
								to='contact'
								spy={true}
								smooth={true}
								duration={1000}
								className='nav-link js-scroll-trigger'
								type='button'
								onClick={handleBurgerMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
