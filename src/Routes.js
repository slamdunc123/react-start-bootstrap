import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChartDoughnut from './components/ChartDoughnut';
import ChartBar from './components/ChartBar';

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
			<Route render={() => <Redirect to='/doughnut' />} />
			{/* <Route component={ChartDoughnut} /> */}
		</Switch>
	);
};

export default Routes;
