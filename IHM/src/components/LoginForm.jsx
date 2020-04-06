import React, { Component } from 'react'
import AuthService from '../services/auth.service'

export class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
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
    this.Auth.login(this.state)
      .then(data => {
        if(data.token !== null) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('admin', data.admin);
          window.location = "account"
        } else {
          window.location.reload();
        }
        
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
            <label htmlFor="">Email address</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                else.
                        </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;