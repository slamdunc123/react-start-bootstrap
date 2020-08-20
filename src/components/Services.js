import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
	return (
		<section className='page-section' id='services'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='section-heading text-uppercase'>Services</h2>
					<h3 className='section-subheading text-muted'>
						Lorem ipsum dolor sit amet consectetur.
					</h3>
				</div>
				<div className='row text-center'>
					<div className='col-md-4'>
						<ScrollAnimation
							animateIn='zoomIn'
							delay={0}
							animateOnce
						>
							<span className='fa-stack fa-4x'>
								<i className='fa fa-circle fa-stack-2x text-primary'></i>
								<i className='fa fa-shopping-cart fa-stack-1x fa-inverse'></i>
							</span>
						</ScrollAnimation>
						<h4 className='my-3'>E-Commerce</h4>
						<p className='text-muted'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Minima maxime quam architecto quo inventore
							harum ex magni, dicta impedit.
						</p>
					</div>
					<div className='col-md-4'>
						<ScrollAnimation
							animateIn='zoomIn'
							delay={100}
							animateOnce
						>
							<span className='fa-stack fa-4x'>
								<i className='fa fa-circle fa-stack-2x text-primary'></i>
								<i className='fa fa-laptop fa-stack-1x fa-inverse'></i>
							</span>
						</ScrollAnimation>
						<h4 className='my-3'>Responsive Design</h4>
						<p className='text-muted'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Minima maxime quam architecto quo inventore
							harum ex magni, dicta impedit.
						</p>
					</div>
					<div className='col-md-4'>
						<ScrollAnimation
							animateIn='zoomIn'
							delay={200}
							animateOnce
						>
							<span className='fa-stack fa-4x'>
								<i className='fa fa-circle fa-stack-2x text-primary'></i>
								<i className='fa fa-lock fa-stack-1x fa-inverse'></i>
							</span>
						</ScrollAnimation>
						<h4 className='my-3'>Web Security</h4>
						<p className='text-muted'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Minima maxime quam architecto quo inventore
							harum ex magni, dicta impedit.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
