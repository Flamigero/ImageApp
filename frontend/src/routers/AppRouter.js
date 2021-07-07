import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import LoginScreen from '../components/auth/LoginScreen';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute  
                    path="/auth" 
                    component={AuthRouter} 
                    isAuthenticated={false}
                />
                <PrivateRoute 
                    exact
                    path="/" 
                    component={LoginScreen}
                    isAuthenticated={false}
                />
            
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default AppRouter
