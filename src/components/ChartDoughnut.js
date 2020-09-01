import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ChartDoughnut = () => {
	const data = {
		labels: ['React', 'Vue', 'Angular'],
		datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: ['#61dafb', '#4fc08d', '#c3002f'],
				hoverBackgroundColor: ['#61dafb', '#4fc08d', '#c3002f'],
			},
		],
	};
	return (
		<div>
			<Doughnut data={data} />
		</div>
	);
};

export default ChartDoughnut;
