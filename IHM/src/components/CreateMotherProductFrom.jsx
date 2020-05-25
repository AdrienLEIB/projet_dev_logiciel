import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import MotherProductService from '../services/motherProduct.service'
import {Form, Row, Col, Button, Container} from 'react-bootstrap'

export class CreateMotherProductFrom extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            path: '',
            type: '',
            products: []
        }

            this.handleChange = this.handleChange.bind(this);
            this.handleForm = this.handleForm.bind(this);
            this.Auth = new AuthService();
            this.Product = new MotherProductService();
          }
        
          handleChange(event) {
            this.setState({
              [event.target.name]: event.target.value
            });
          }

          handleChangeImg(event) {
            this.setState({
                [event.target.name] : event.target.value
            })
          }
        
          handleForm(event) {
            event.preventDefault();
            //console.log(this.state);
            this.Product.CreateProduct(this.state)
              .then(data => {
                window.location = "adminPage"
              })
              .catch(err => {
                console.log(err);
              })
          }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                <Col md="4"> 
                    <Form onSubmit={this.handleForm}>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Nom du produit :</Form.Label>
                        <Form.Control placeholder="Nom du prodruit" name="name" onChange={this.handleChange} />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formGroupType">
                        <Form.Label>Type du produit</Form.Label>
                        <Form.Control placeholder="Type du Produit" name="type" onChange={this.handleChange}/>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formGroupImg">
                        <Form.Label>Image du produit :</Form.Label>
                        <Form.File 
                            name="path"
                            label="Choisir image produit"
                            custom
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formGroupProducts">
                        <Form.Label>Tableau des produits liés :</Form.Label>
                        <Form.Control  placeholder="id des Produits" name="products" onChange={this.handleChange}/>
                    </Form.Group>
                    <br/>
                    <br/>
                    <Button variant="info" type="submit">
                        Créer Produirt mère
                    </Button>
                    <br/><br/>
                    <br/><br/>
                    <br/>
                    </Form>
                </Col>
                </Row>
            </Container>
        );
    }
}

export default CreateMotherProductFrom;