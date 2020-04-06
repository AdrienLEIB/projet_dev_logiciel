import React, { Component } from 'react';
import AuthService from '../services/auth.service';
import ManagerService from '../services/manager.service';
import {Table, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class Manager extends Component {

    constructor() {
        super();
        this.state = {
            admin: false,
            managerUser: []
        }

        this.Auth = new AuthService();
        this.Manager = new ManagerService();

        const profil = this.Auth.getUserProfil();
        this.state.admin = profil.admin;

        this.Manager.ReadManager()
            .then(data => {
                this.setState({
                    managerUser: data
                })
            })

    }

    CreateManager() {
        window.location = "/createManager"
    }

    DeleteManager(id) {
        this.Manager.DeleteManager(id);
        window.location.reload();
    }


    render() {
        if (this.state.admin) {
            const manager = this.state.managerUser.map((data, key) => (
                <tr key={key}>
                    <td>{data._id}</td>
                    <td>{data.email}</td>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.telephone}</td>
                    <td><Link to={"/editManager/" + data._id}><Button className="btn btn-warning">Edit</Button></Link></td>
                    <td><Button className="btn  btn-danger" onClick={(e) => this.DeleteManager(data._id)}> Delete </Button></td>
                </tr>
            ));
            return (
                <div>
                    <Table responsive>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Telephone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manager}
                    </tbody>
                    </Table>

                    <Button onClick={this.CreateManager} className="btn  btn-success" type="submit">Create New Manager</Button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>You don't have the rights</p>
                </div>
            );
        }
    }
}

export default Manager;