import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import ProductService from '../services/product.service'
import {Form, Row, Col, Button, Container} from 'react-bootstrap'


export class CreateProductFrom extends Component {

    constructor() {
        super();

        this.state = {
            stock: '',
            price: '',
            idmotherproduct: ''
        }

            this.handleChange = this.handleChange.bind(this);
            this.handleForm = this.handleForm.bind(this);
            this.Auth = new AuthService();
            this.Product = new ProductService();
            
          }
        
          handleChange(event) {
            this.setState({
              [event.target.name]: event.target.value
            });
          }
        
          handleForm(event) {
            event.preventDefault();
            console.log(this.state);
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
                        <Form.Group controlId="formGroupStock">
                            <Form.Label>Stock du produit</Form.Label>
                            <Form.Control type="number" min={0} placeholder="Stock du Produit" name="stock" onChange={this.handleChange}/>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formGroupPrice">
                            <Form.Label>Prix du produit :</Form.Label>
                            <Form.Control type="number" min={0} placeholder="Prix du Produit" name="price" onChange={this.handleChange}/>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formGroupidmotherproduct">
                            <Form.Label>Idmotherproduct du produit :</Form.Label>
                            <Form.Control placeholder="Idmotherproduct du Produit" name="idmotherproduct" onChange={this.handleChange}/>
                        </Form.Group>
                        <br/>
                        <br/>
                        <Button variant="info" type="submit">
                            Créer Produit
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

export default CreateProductFrom;