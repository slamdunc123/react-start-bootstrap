import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Route1 from './components/Route1';
import Route2 from './components/Route2';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Route1 />
			</Route>
			<Route exact path='/route1'>
				<Route1 />
			</Route>
			<Route exact path='/route2'>
				<Route2 />
			</Route>
			<Route render={() => <Redirect to='/route1' />} />
			{/* <Route component={Route1} /> */}
		</Switch>
	);
};

export default Routes;
