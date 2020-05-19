import React, { Component } from 'react';
import AuthService from '../services/auth.service';
import ClientService from '../services/client.service';
import {Card, ListGroup, ListGroupItem, Col, Row, Container} from 'react-bootstrap'

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Profil',
            admin: false,
            clientData : []
        }

        this.Auth = new AuthService();
        this.Client = new ClientService();

        const profil = this.Auth.getUserProfil();
        //console.log(profil);
        this.state.admin = profil.admin;

        const token = this.Auth.getToken();
        console.log(token);

        this.Client.GetClientDetail(profil.id)
        .then(data => {
            this.setState({
                clientData: data
            })
        })
    }


    render() {
        if (this.profil !== "" && this.state.admin === false) {
            return (
                <Container >
                    <Row className="justify-content-md-center"> 
                    <img
                        alt="logo"
                        src="/img/logo.png"
                        width="300"
                        height="150"
                        className="d-inline-block align-top"/>
                    </Row>
                    <br/>
                    <br/>
                    <Row className="justify-content-md-center"> 
                        <Col md={4}>
                            <Card style={{ width: 20 + 'em' ,margin: 0 + ' auto', float: "none", marginBottom: 3 + 'em'}}>
                                <Card.Body>
                                    <Card.Title>{this.state.title}</Card.Title>
                                <hr/>
                                    <Card.Text>Nom : {this.state.clientData.lastname}</Card.Text>
                                    <Card.Text>Prénom : {this.state.clientData.firstname}</Card.Text>
                                    <Card.Text>Adresse Email : {this.state.clientData.email}</Card.Text>
                                    <Card.Link href="/clientUpdate">Modifier ses informations</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        } else if(this.profil !== "" && this.state.admin === true) {
            return (
                <Container >
                    <Row className="justify-content-md-center"> 
                    <img
                        alt="logo"
                        src="/img/logoo.png"
                        width="300"
                        height="150"
                        className="d-inline-block align-top"/>
                    </Row>
                    <br/>
                    <br/>
                    <Row className="justify-content-md-center"> 
                        <Col md={4}>
                            <Card style={{ width: 20 + 'em' ,margin: 0 + ' auto', float: "none", marginBottom: 3 + 'em'}}>
                                <Card.Body>
                                    <Card.Title>{this.state.title}</Card.Title>
                                <hr/>
                                    <Card.Text>Nom : {this.state.clientData.lastname}</Card.Text>
                                    <Card.Text>Prénom : {this.state.clientData.firstname}</Card.Text>
                                    <Card.Text>Adresse Email : {this.state.clientData.email}</Card.Text>
                                    <Card.Link href="/clientUpdate">Modifier ses informations</Card.Link>
                                    <br/>
                                    <Card.Link href="/adminPage">Admin Page</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
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