import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from '../Pages/dashboard/Dashboard';
import WorldFoodMenu from '../Pages/worldFoodMenu/WorldFoodMenu';
import NavigationPage from '../Pages/navigationPage/NavigationPage';


function Routes() {
    return (
        <Router>
            <Route exact path='/' component={Dashboard} />
            <Route path='/navigationPage' component={NavigationPage} />
            <Route path='/worldFoodMenu' component={WorldFoodMenu} />
        </Router>
    )
}

export default Routes
