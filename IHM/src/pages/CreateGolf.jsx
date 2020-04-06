import React, { Component } from 'react';
import AuthService from '../services/auth.service';
import GolfService from '../services/golf.service';
import CreateGolfFrom from '../components/CreateGolfForm'

export class CreateGolf extends Component {

    constructor() {
        super();
        this.state = {
            admin: false,
            golfUser: []
        }

        this.Auth = new AuthService();
        this.Golf = new GolfService();

        const profil = this.Auth.getUserProfil();
        this.state.admin = profil.admin;

    }


    render() {
        if (this.state.admin) {
            return (
                <div>
                    <CreateGolfFrom/>
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

export default CreateGolf;