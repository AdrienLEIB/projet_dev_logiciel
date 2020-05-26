import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import MotherProductService from '../services/motherProduct.service'
import {Form, Row, Col, Button, Container} from 'react-bootstrap'


export class CreateProductFrom extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            stock: '',
            path: '',
            price: '',
            invoices: [],
            idmotherproduct: '',
            idclient: ''
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
        
          handleForm(event) {
            event.preventDefault();
            console.log(this.state);
            // this.Product.CreateProduct(this.state)
            //   .then(data => {
            //     window.location = "adminPage"
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   })
          }

          onImageUpload = event => {
            this.setState({
                path: event.target.value
            });
          }

          handleChangeArray = event => {
            this.setState({
                products: event.target.value.split(",")
            });
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
                    <Form.Group controlId="formGroupStock">
                        <Form.Label>Stock du produit</Form.Label>
                        <Form.Control type="number" min={0} placeholder="Stock du Produit" name="stock" onChange={this.handleChange}/>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formGroupImg">
                        <Form.Label>Image du produit :</Form.Label>
                        {/* <Form.Control placeholder="Path du produit" name="path" onChange={this.handleChange} /> */}
                        <Form.File 
                            name="path"
                            label="Choisir image produit"
                            custom
                            onChange={this.onImageUpload}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formGroupProducts">
                        <Form.Label>Tableau des produits liés :</Form.Label>
                        <Form.Control  placeholder="id des Produits" name="products" onChange={this.handleChangeArray}/>
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