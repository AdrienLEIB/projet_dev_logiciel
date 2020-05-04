import React, { Component } from 'react';

export class Home extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Fnook',
            subtitle: 'Bienvenue sur Fnook',
            text: 'Liste des produits'
        }
    }


    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h1> {this.state.title} </h1>
                <p> {this.state.subtitle} </p>
                <p> {this.state.text} </p>

            </div>
        );
    }
}

export default Home;