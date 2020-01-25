import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from '../Pages/dashboard/Dashboard';
import Menu from '../Pages/menu/Menu';


function Routes() {
    return (
        <Router>
            <Route exact path='/' component={Dashboard} />
            <Route path='/Menu' component={Menu} />
        </Router>
    )
}

export default Routes
