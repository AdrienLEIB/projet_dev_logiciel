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
                [event.target.name]: event.target.value.file
              });
          }
        
          handleForm(event) {
            event.preventDefault();
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
            // <div className="d-flex justify-content-center mt-5">
            //     <form onSubmit={this.handleForm}>
            //         <div className="form-group">
            //             <label htmlFor="">Title</label>
            //             <input type="text" name="title" onChange={this.handleChange} className="form-control" placeholder="Enter title" />
            //         </div>

            //         <div className="form-group">
            //             <label htmlFor="">Latitude</label>
            //             <input type="float" name="latitude" onChange={this.handleChange} className="form-control" placeholder="latitude" />
            //         </div>

            //         <div className="form-group">
            //             <label htmlFor="">Longitude</label>
            //             <input type="float" name="longitude" onChange={this.handleChange} className="form-control" placeholder="longitude" />
            //         </div>

            //         <div className="form-group">
            //             <label htmlFor="">Description</label>
            //             <input type="text" name="description" onChange={this.handleChange} className="form-control" placeholder="description" />
            //         </div>

            //         <div className="form-group">
            //             <label htmlFor="">id_manager</label>
            //             <input type="text" name="id_manager" onChange={this.handleChange} className="form-control" placeholder="id_manager" />
            //         </div>

            //         <button type="submit" className="btn btn-primary">Create</button>
            //     </form>
            // </div>
            <Container>
                <Row className="justify-content-md-center">
                <Col md="4"> 
                    <Form onSubmit={this.handleForm}>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Nom du produit :</Form.Label>
                        <Form.Control placeholder="Nom du prodruit" name="produit" onChange={this.handleChange} />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Type du produit</Form.Label>
                        <Form.Control placeholder="Type du Produit" name="password" onChange={this.handleChange}/>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formGroupImg">
                        <Form.Label>Image du produit :</Form.Label>
                        <Form.File 
                            id="custom-file"
                            label="Custom file input"
                            custom
                            onChange={this.handleChangeImg}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Tableau des produits liés :</Form.Label>
                        <Form.Control  placeholder="id des Produits" name="password" onChange={this.handleChange}/>
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