import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import ClientService from '../services/client.service'
import {Form, Row, Col, Button, Container} from 'react-bootstrap'

export class EditClientForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstname: '',
            lastname: ''
        }

            this.handleChange = this.handleChange.bind(this);
            this.handleForm = this.handleForm.bind(this);
            this.Auth = new AuthService();
            this.Client = new ClientService();

            this.Client.GetClientDetail(props.id)
                .then(data => {
                    this.setState({
                        email: data.email,
                        firstname: data.firstname,
                        lastname: data.lastname
                    })
                })
          }
        
          handleChange(event) {
            this.setState({
              [event.target.name]: event.target.value
            });
          }
        
          handleForm(event) {
            event.preventDefault();
            this.Client.UpdateClient(this.props.id, this.state)
              .then(data => {
                window.location = "../Account"
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
            //             <label htmlFor="">email</label>
            //             <input type="email" value={this.state.email} name="email" onChange={this.handleChange} className="form-control" placeholder="Enter email" />
            //         </div>

            //         <div className="form-group">
            //             <label htmlFor="">Firstname</label>
            //             <input type="text" value={this.state.firstname} name="firstname" onChange={this.handleChange} className="form-control" placeholder="firstname" />
            //         </div>

            //         <div className="form-group">
            //             <label htmlFor="">Lastname</label>
            //             <input type="text" value={this.state.lastname} name="lastname" onChange={this.handleChange} className="form-control" placeholder="lastname" />
            //         </div>

            //         <button type="submit" className="btn btn-warning">Update</button>
            //     </form>
            // </div>

            <Container>
                <Row className="justify-content-md-center">
                    <Col md="4"> 
                        <Form onSubmit={this.handleForm}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Adresse Email :</Form.Label>
                            <Form.Control type="email" placeholder="Adresse Email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formGroupFirstname">
                            <Form.Label>Prénom :</Form.Label>
                            <Form.Control placeholder="Prénom" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formGroupLastname">
                            <Form.Label>Nom :</Form.Label>
                            <Form.Control placeholder="Nom" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                        </Form.Group>
                        <br/>
                        <br/>
                        <Button variant="info" type="submit">
                            Modifier son profil
                        </Button>
                        <br/><br/>
                        <br/><br/>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EditClientForm;