import React, { Component } from 'react';

export class Home extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Home',
            subtitle: 'Welcome on Golf Manager 3000',
            text: 'Log In or Sign up for more'
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