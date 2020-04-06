import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import ManagerService from '../services/manager.service'

export class CreateManagerForm extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            telephone: ''
        }

        
            this.handleChange = this.handleChange.bind(this);
            this.handleForm = this.handleForm.bind(this);
            this.Auth = new AuthService();
            this.Manager = new ManagerService();
          }
        
          handleChange(event) {
            this.setState({
              [event.target.name]: event.target.value
            });
          }
        
          handleForm(event) {
            event.preventDefault();
            this.Manager.CreateManager(this.state)
              .then(data => {
                window.location = "Manager"
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
                        <label htmlFor="">email</label>
                        <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Firstname</label>
                        <input type="text" name="firstname" onChange={this.handleChange} className="form-control" placeholder="firstname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Lastname</label>
                        <input type="text" name="lastname" onChange={this.handleChange} className="form-control" placeholder="lastname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Telephone</label>
                        <input type="text" name="telephone" onChange={this.handleChange} className="form-control" placeholder="telephone" />
                    </div>

                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        );
    }
}

export default CreateManagerForm;