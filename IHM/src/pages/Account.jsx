import React, { Component } from 'react';
import AuthService from '../services/auth.service';
import Client from '../services/client.service';
import clientService from '../services/client.service';

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Vos informations',
            admin: false,
            clientData : []
        }

        this.Auth = new AuthService();
        this.Client = new clientService();

        const profil = this.Auth.getUserProfil();
        //console.log(profil);
        this.state.admin = profil.admin;

        // const token = this.Auth.getToken();
        // console.log(token.toString);

        this.Client.GetClientDetail(profil.id)
        .then(data => {
            this.setState({
                clientData: data
            })
        })
    }


    render() {
        if (this.profil !== "") {
            return (
                <div>
                    <br/>
                    <h1> {this.state.title} </h1>
                    <p>Nom : {this.state.clientData.lastname}</p>
                    <p>Prenom : {this.state.clientData.firstname}</p>
                    <p>Email : {this.state.clientData.email}</p>
                    <p>Admin : {this.state.admin.toString()}</p>
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