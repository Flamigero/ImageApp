import React from 'react'
import {Route, Redirect} from 'react-router'
import PropTypes from 'prop-types'

const PrivateRout = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={ (props) => (
                (isAuthenticated) 
                ?
                <Component {...props} />
                :
                <Redirect to="/login" />
            )}
        />
    )
}

export default PrivateRout

PrivateRout.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}