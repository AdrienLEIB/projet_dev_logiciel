import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import GolfService from '../services/golf.service'

export class CreateGolfForm extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
            latitude: 0.0,
            longitude: 0.0,
            description: '',
            id_manager: ''
        }

        
            this.handleChange = this.handleChange.bind(this);
            this.handleForm = this.handleForm.bind(this);
            this.Auth = new AuthService();
            this.Golf = new GolfService();
          }
        
          handleChange(event) {
            this.setState({
              [event.target.name]: event.target.value
            });
          }
        
          handleForm(event) {
            event.preventDefault();
            this.Golf.CreateGolf(this.state)
              .then(data => {
                window.location = "golf"
              })
              .catch(err => {
                console.log(err);
              })
          }

    render() {
        return (
            <div className="d-flex justify-content-center mt-5">
                <form onSubmit={this.handleForm}>
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" onChange={this.handleChange} className="form-control" placeholder="Enter title" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Latitude</label>
                        <input type="float" name="latitude" onChange={this.handleChange} className="form-control" placeholder="latitude" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Longitude</label>
                        <input type="float" name="longitude" onChange={this.handleChange} className="form-control" placeholder="longitude" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <input type="text" name="description" onChange={this.handleChange} className="form-control" placeholder="description" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">id_manager</label>
                        <input type="text" name="id_manager" onChange={this.handleChange} className="form-control" placeholder="id_manager" />
                    </div>

                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        );
    }
}

export default CreateGolfForm;