import React from 'react'
import {Redirect, Route ,Switch } from 'react-router-dom'
import HomeScreen from '../components/imageapp/HomeScreen'
import ProfileScreen from '../components/imageapp/ProfileScreen'

const ImageAppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/profile' component={ProfileScreen} />

            <Redirect to='/' />
        </Switch>
    )
}

export default ImageAppRouter
