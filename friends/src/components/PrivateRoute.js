import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route
        {...props}
            render={() => {
                if(localStorage.getItem('authToken')) {
                    console.log('getItem is found', localStorage);
                    return <Component />
                }
                console.log('getItem was not found');
                return <Redirect to='/login' />
            }} />
    )
}

export default PrivateRoute;