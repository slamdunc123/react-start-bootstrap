import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Route1 from './components/Route1';
import Route2 from './components/Route2';

const Routes = () => {
	return (
		<Switch>
			<Route path='/route1'>
				<Route1 />
			</Route>
			<Route path='/route2'>
				<Route2 />
			</Route>
		</Switch>
	);
};

export default Routes;
