import React, { Component } from 'react';
import PanierService from '../services/panier.service';
import ProductService from '../services/product.service';
import { Button, Media, Container, Row, Col, Image, Form} from 'react-bootstrap'
// import { Link } from 'react-router-dom';

export class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            products: []
        }

        this.ProductService = new ProductService();
        this.PanierService = new PanierService();

        this.ProductService.GetProductDetail(this.state.id)
        .then(data => {
            console.log(data);
            this.setState({
                products: data
            })
        })
        
    }

    addPanier(id) {
        //this.PanierService.ResetPanier();
        //this.PanierService.deletePanier("5ec3ca49ad9d0d060c17fec9")
        this.PanierService.AddPanier(id);
        window.location.reload();
    }

    render() {
            return (
                <div>
                    <Container fluid>
                    <Row>
                        <Col xs={5}>
                             <Image variant="right" src={this.state.products.path}/>
                        </Col>
                        <Col xs={6}>
                            <Media>
                                <Media.Body>
                                    <h5>{this.state.products.name}</h5>
                                    <p>Prix : {this.state.products.price} €</p>
                                    <p>Stock : {this.state.products.stock}</p>
                                    <br/>
                                    <br/>

                                    <Row className="justify-content-md-center">
                                        <Col xs={3}>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Nombre de produit</Form.Label>
                                                <Form.Control type="number" step={1} min={0} max={this.state.products.stock} placeholder="nombre" name="stock"/>
                                                
                                            </Form.Group>
                                        </Col>
                                        <Col xs={3}>
                                        <Button className="btn btn-info" onClick={(e) => this.addPanier(this.state.id)}>Ajouter Au Panier</Button>
                                        </Col>
                                    </Row>
                                    
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                    </Container>
                <br/>
                <br/>
            </div>
        );
    }
}

export default ProductDetail;