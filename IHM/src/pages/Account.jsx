import React, { Component } from 'react';
import AuthService from '../services/auth.service';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.Auth = new AuthService();

        this.state = {
            title: 'Account User',
            question: 'Are you an admin ?',
            email: '',
            admin: false
        }

        this.Auth = new AuthService();

        const profil = this.Auth.getUserProfil();
        console.log(profil);
        this.state.email = profil.email;
        this.state.admin = profil.admin;
    }


    render() {
        if (this.profil !== "") {
            return (
                <div>
                    <h1> {this.state.title} </h1>
                    <p> {this.state.question} </p>
                    <p>{this.state.admin.toString()}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <p>No one</p>
                </div>
            );
        }
    }
}

export default Home;