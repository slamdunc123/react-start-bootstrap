import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChartDoughnut from './components/ChartDoughnut';
import ChartBar from './components/ChartBar';
import ChartLine from './components/ChartLine';
import ChartRadar from './components/ChartRadar';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<ChartDoughnut />
			</Route>
			<Route exact path='/doughnut'>
				<ChartDoughnut />
			</Route>
			<Route exact path='/barchart'>
				<ChartBar />
			</Route>
			<Route exact path='/linechart'>
				<ChartLine />
			</Route>
			<Route exact path='/radarchart'>
				<ChartRadar />
			</Route>
			<Route render={() => <Redirect to='/doughnut' />} />
			{/* <Route component={ChartDoughnut} /> */}
		</Switch>
	);
};

export default Routes;
