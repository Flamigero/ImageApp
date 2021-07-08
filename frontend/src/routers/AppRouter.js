import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import HomeScreen from '../components/imageapp/HomeScreen';
import AuthRouter from './AuthRouter';
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
                    exact
                    path="/" 
                    component={HomeScreen}
                    isAuthenticated={!!uid}
                />
            
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default AppRouter
