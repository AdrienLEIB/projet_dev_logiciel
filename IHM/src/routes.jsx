import React, { Component } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import {Route, withRouter} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Manager from './pages/Manager';
import CreateManager from './pages/CreateManager';
import Golf from './pages/Golf';
import CreateGolf from './pages/CreateGolf';
import EditManager from './pages/EditManager';
import EditGolf from './pages/EditGolf';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/account" component={Account}/>
                <Route exact path='/signup' component={SignUp}/>
                <Route exact path='/manager' component={Manager}/>
                <Route exact path='/createmanager' component={CreateManager}/>
                <Route exact path='/editmanager/:id' component={EditManager}/>
                <Route exact path='/golf' component={Golf}/>
                <Route exact path='/creategolf' component={CreateGolf}/>
                <Route exact path='/editgolf/:id' component={EditGolf}/>
            </div>
        )
    }
}

export default withRouter(Routes);
