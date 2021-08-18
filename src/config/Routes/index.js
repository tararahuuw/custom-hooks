import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Register, Home, Login, MainPage } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path = "/login">
                    <Login />
                </Route>
                <Route path = "/register">
                    <Register />
                </Route>
                <Route path = "/">
                    <MainPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
