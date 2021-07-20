import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import AuthRouter from './AuthRouter';
import ImageAppRouter from './ImageAppRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    const state = useSelector(state => state.auth);
    const {uid} = state;

    return (
        <Router>
            <Switch>
                <PublicRoute  
                    path="/auth" 
                    component={AuthRouter} 
                    isAuthenticated={!!uid}
                />
                <PrivateRoute 
                    path="/" 
                    component={ImageAppRouter}
                    isAuthenticated={!!uid}
                />
            
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default AppRouter
