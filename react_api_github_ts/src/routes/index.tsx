import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard/index';
import Repository from '../pages/repository/index';

const Routes: React.FC = () => (
	<Switch>
		<Route path='/' component={Dashboard} />
		<Route path='/repository' component={Repository} />
	</Switch>
);

export default Routes;
