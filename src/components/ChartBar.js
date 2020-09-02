import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartBar = () => {
	const data = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
		],
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: 'rgba(97,218,251,0.2)',
				borderColor: 'rgba(97,218,251,1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(97,218,251,0.4)',
				hoverBorderColor: 'rgba(97,218,251,1)',
				data: [65, 59, 80, 81, 56, 55, 40],
			},
		],
	};
	return (
		<Bar
			data={data}
			options={{
				maintainAspectRatio: false,
			}}
		/>
	);
};

export default ChartBar;
