import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import PanierService from '../services/panier.service'
import { Badge, Col, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./css/Header.css";

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.PanierService = new PanierService();

        this.state = {
            title: '',
            clientData : [],
            numberOfProduct : this.PanierService.getLengthOnPanier(),
            name: ''
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
    handleChangeStock(event) {
        this.setState({
          name: event.target.value
        });
      }    
    disconnect() {
        this.Auth.disconnectUser()
        window.location = "/login"
    }

    render() {
        if (this.Auth.getToken() !== null) {
            return (
                <div>
                    <Navbar sticky="top" bg='' className="header" style={{backgroundColor: `#fbe882` }}>
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
                            <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" onChange={(e) => this.handleChangeStock(e)}/>
                            <Link to={"/search/" + this.state.name}><Button variant="outline-dark"><img src="img/search.png" alt='Search' width="20" height="20" style={{paddingBottom: 1 + 'px' }}></img></Button></Link>
                        </Form>
                        <Col >    
                        <Link to={"/shopCart"}>                  
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
                        Connecté en tant que : <a href="/account">{this.state.clientData.firstname}</a>
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
                <Navbar sticky="top" bg=''  className="header" style={{backgroundColor: `#fbe882` }}>
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
                        <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" onChange={(e) => this.handleChangeStock(e)}/>
                        <Link to={"/search/" + this.state.name}><Button variant="outline-dark"><img src="img/search.png" alt='search' width="20" height="20"></img></Button></Link>
                    </Form>
                    <Col>    
                        <Link to={"/shopCart"}>                  
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
