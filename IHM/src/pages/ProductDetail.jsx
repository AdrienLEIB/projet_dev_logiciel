import React, { Component } from 'react';
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

        this.ProductService.GetProductDetail(this.state.id)
        .then(data => {
            console.log(data);
            this.setState({
                products: data
            })
        })
        
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

                                    <br/>
                                    <br/>

                                    <Row className="justify-content-md-center">
                                        <Col xs={3}>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Example select</Form.Label>
                                                <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={3}>
                                        <Button className="btn btn-info">Ajouter Au Panier</Button>
                                        </Col>
                                    </Row>
                                    
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                    </Container>

            </div>
        );
    }
}

export default ProductDetail;