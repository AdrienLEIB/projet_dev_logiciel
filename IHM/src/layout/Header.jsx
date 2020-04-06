import React, { Component } from 'react'
import AuthService from '../services/auth.service'

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.disconnect = this.disconnect.bind(this);
        this.Auth = new AuthService();
    }

    disconnect() {
        this.Auth.disconnectUser()
        window.location = "/login"
    }


    render() {
        if (this.Auth.getToken() !== null) {
            return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">GolfManager3000</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/account">Account <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/golf">Golf</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/manager">Manager</a>
                            </li>
                            <li class="nav-item">
                                {/* eslint-disable-next-line */}
                                <a class="nav-link" onClick={this.disconnect}>Log Out</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">GolfManager3000</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Log In <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/signup">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }

    }
}
