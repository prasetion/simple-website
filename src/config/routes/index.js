import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, Login, Register } from '../../pages'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
