import React, { Component } from 'react';
import AuthService from '../services/auth.service';
import ManagerService from '../services/golf.service';
import CreateManagerFrom from '../components/CreateManagerForm'

export class CreateManager extends Component {

    constructor() {
        super();
        this.state = {
            admin: false,
            golfUser: []
        }

        this.Auth = new AuthService();
        this.Manager = new ManagerService();

        const profil = this.Auth.getUserProfil();
        this.state.admin = profil.admin;

    }


    render() {
        if (this.state.admin) {
            return (
                <div>
                    <CreateManagerFrom/>
                </div>
            )
        } else {
            return (
                <div>
                    <p>You don't have the rights</p>
                </div>
            );
        }
    }
}

export default CreateManager;