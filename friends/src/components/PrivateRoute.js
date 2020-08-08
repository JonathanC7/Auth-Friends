import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route>
            {...rest}
            render={() => {
                if(localStorage.getItem('authToken')) {
                    return <Component />
                }

                return <Redirect to='/login' />
            }}
        </Route>
    )
}