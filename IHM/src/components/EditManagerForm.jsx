import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import ManagerService from '../services/manager.service'

export class EditManagerForm extends Component {

    constructor(props) {
        super(props);

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

            this.Manager.GetManagerDetail(props.id)
                .then(data => {
                    this.setState({
                        email: data.email,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        telephone: data.telephone
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
            this.Manager.UpdateManager(this.props.id, this.state)
              .then(data => {
                window.location = "../Manager"
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
                        <input type="email" value={this.state.email} name="email" onChange={this.handleChange} className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Firstname</label>
                        <input type="text" value={this.state.firstname} name="firstname" onChange={this.handleChange} className="form-control" placeholder="firstname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Lastname</label>
                        <input type="text" value={this.state.lastname} name="lastname" onChange={this.handleChange} className="form-control" placeholder="lastname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Telephone</label>
                        <input type="text" value={this.state.telephone} name="telephone" onChange={this.handleChange} className="form-control" placeholder="telephone" />
                    </div>

                    <button type="submit" className="btn btn-warning">Update</button>
                </form>
            </div>
        );
    }
}

export default EditManagerForm;