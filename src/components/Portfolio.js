import React, { useState } from 'react';

const Portfolio = ({ portfolioLinks }) => {
	const [categories, setCategories] = useState(portfolioLinks);

	const handleCategorySelector = (e) => {
		const value = e.target.getAttribute('id');
		console.log(value);
		if (value === 'all') {
			setCategories(portfolioLinks);
		} else {
			const filtered = portfolioLinks.filter(
				(item) => item.type == value
			);
			setCategories(filtered);
		}
	};

	const getCategoryButtons = () => {
		const distinctCategories = [
			...new Set(portfolioLinks.map((item) => item.type)),
		];

		return (
			<>
				{console.log(categories)}
				<button
					id='all'
					className='btn btn-primary m-1 mb-5'
					onClick={handleCategorySelector}
				>
					All
				</button>
				{distinctCategories.map((item) => (
					<button
						id={item}
						className='btn btn-primary m-1 mb-5'
						onClick={handleCategorySelector}
					>
						{item}
					</button>
				))}
			</>
		);
	};

	return (
		<section className='page-section bg-light' id='portfolio'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='section-heading text-uppercase'>
						Portfolio
					</h2>
					<h3 className='section-subheading text-muted'>
						Lorem ipsum dolor sit amet consectetur.
					</h3>

					{getCategoryButtons()}
				</div>
				<div className='row'>
					{console.log(categories)}
					{categories &&
						categories.map(({ title, caption }, index) => {
							return (
								<div className='col-lg-4 col-sm-6 mb-4'>
									<div className='portfolio-item animate__animated animate__fadeIn'>
										<a
											className='portfolio-link'
											data-toggle='modal'
											href='#portfolioModal1'
										>
											<div className='portfolio-hover'>
												<div className='portfolio-hover-content'>
													<i className='fa fa-plus fa-3x'></i>
												</div>
											</div>
											<img
												className='img-fluid'
												src='https://unsplash.it/356/140/?random'
												alt=''
											/>
										</a>
										<div className='portfolio-caption'>
											<div className='portfolio-caption-heading'>
												{title}
											</div>
											<div className='portfolio-caption-subheading text-muted'>
												{caption}
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
