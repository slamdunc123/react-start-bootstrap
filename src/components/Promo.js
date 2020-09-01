import React from 'react';

const Promo = () => {
	return (
		<section className='page-section bg-light' id='promo'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='section-heading text-uppercase'>Promo</h2>
					<h3 className='section-subheading text-muted'>
						Lorem ipsum dolor sit amet consectetur.
					</h3>
				</div>
				<div class='embed-responsive embed-responsive-16by9'>
					<iframe
						title='promo'
						className='embed-responsive-item'
						src='https://www.youtube.com/embed/66ERfyrNqsE?rel=0;&playlist=66ERfyrNqsE&autoplay=1&mute=1&loop=1'
						allowfullscreen
						include
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Promo;
