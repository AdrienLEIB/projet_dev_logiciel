import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';


export class Login extends Component {

    constructor() {
      super();
      this.state = {
         title: 'Connectez-vous',
         subtitle: 'Entrer votre mot de passe et identifiant',
      }
    }
    

    render() {
    return (
        <div> 
            <h1> {this.state.title} </h1>
            <p> {this.state.subtitle} </p>

            <LoginForm/>
        </div>
    );
  }
}

export default Login;