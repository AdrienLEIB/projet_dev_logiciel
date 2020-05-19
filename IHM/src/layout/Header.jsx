import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import { Badge, Col, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            clientData : [],
            numberOfProduct : 0
        }

        this.disconnect = this.disconnect.bind(this);
        this.Auth = new AuthService();

        if (this.Auth.getToken() !== null) {
            const profil = this.Auth.getUserProfil();
            //console.log(profil);
            this.state.admin = profil.admin;
    
            this.Auth.getUserDetail(profil.id)
            .then(data => {
                this.setState({
                    clientData: data
                })
            })
        
        }

        
    }

    disconnect() {
        this.Auth.disconnectUser()
        window.location = "/login"
    }

    render() {
        if (this.Auth.getToken() !== null) {
            return (
                <div>
                    <Navbar sticky="top" bg='' style={{backgroundColor: `#fbe882` }}>
                        <Navbar.Brand href="/">
                            <img
                            alt="logo"
                            src="/img/logoo.png"
                            width="50"
                            height="30"
                            className="d-inline-block align-top"/>{this.state.title}
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        

                        <Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
                            <Button variant="outline-dark"><img src="img/search.png" width="20" height="20" style={{paddingBottom: 1 + 'px' }}></img></Button>
                        </Form>
                        <Col >    
                        <Link to={"/panier"}>                  
                                <img
                                src="/img/shop.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="logo"
                                />
                                <Badge variant="secondary">{this.state.numberOfProduct}</Badge>
                            </Link>  
                        </Col>
                        <Navbar.Text>
                        Signed in as: <a href="/account">{this.state.clientData.firstname}</a>
                        </Navbar.Text>
                        <Col style={{paddingTop: 4 + 'px' }}>
                        <Button 
                            size="sm"
                            variant="outline-dark"
                            onClick={this.disconnect}>
                                Deconnecter
                            </Button>
                        </Col>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <br/>
                    <br/>
                </div>
            );
        } else {
            return (
                <div>
                <Navbar sticky="top" bg='' style={{backgroundColor: `#fbe882` }}>
                    <Navbar.Brand href="/">
                        <img
                        alt="logo"
                        src="/img/icon.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"/>{this.state.title}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    

                    <Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
                        <Button variant="outline-dark"><img src="img/search.png" width="20" height="20"></img></Button>
                    </Form>
                    <Col >    
                    <Link to={"/account"}>                  
                            <img
                            src="/img/shop.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="logo"
                            />
                            <Badge variant="secondary">{this.state.numberOfProduct}</Badge>
                        </Link>  
                    </Col>
                    <Navbar.Text>
                        <a href="/login">Se Connecter</a>
                    </Navbar.Text>
                    <Col>
                        <Navbar.Text>
                        <a href="/signup">S'inscrire</a>
                        </Navbar.Text>
                    </Col>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            );
        }

    }
}
