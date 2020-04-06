import React, { Component } from 'react'
import AuthService from '../services/auth.service'

export class SignUpForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            admin: false,
            role: ''
        }

        
            this.handleChange = this.handleChange.bind(this);
            this.handleForm = this.handleForm.bind(this);
            this.Auth = new AuthService();
          }
        
          handleChange(event) {
            this.setState({
              [event.target.name]: event.target.value
            });
          }
        
          handleForm(event) {
            event.preventDefault();
            this.Auth.SignUp(this.state)
              .then(data => {
                  window.location="./login"
              })
              .catch(err => {
                window.location.reload()
              })
          }

    render() {
        return (
            <div className="d-flex justify-content-center mt-5">
                <form onSubmit={this.handleForm}>
                    <div className="form-group">
                        <label htmlFor="">Email address</label>
                        <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">firstname</label>
                        <input type="text" name="firstname" onChange={this.handleChange} className="form-control" placeholder="firstname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">lastname</label>
                        <input type="test" name="lastname" onChange={this.handleChange} className="form-control" placeholder="lastname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">role</label>
                        <input type="text" name="role" onChange={this.handleChange} className="form-control" placeholder="role" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">admin</label>
                        <small id="emailHelp" className="form-text text-muted">False by default</small>
                        <input type="checkbox" name="admin" value={true} onChange={this.handleChange} className="form-control" placeholder="True" />
                        
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;