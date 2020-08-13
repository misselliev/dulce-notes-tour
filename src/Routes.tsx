import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TourDates from './pages/TourDates';
import Home from './pages/Home';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dates" component={TourDates} />
    </Switch>
);

export default Routes;
