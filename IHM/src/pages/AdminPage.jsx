import React, { Component } from 'react';
import AuthService from '../services/auth.service';
import ClientService from '../services/client.service';
import ProduitSerivce from '../services/product.service';
import MotherProduitSerivce from '../services/motherProduct.service';
import {Table, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admin: false,
            motherProducts: [],
            products: [],
            clients: []
        }

        this.Auth = new AuthService();
        this.MotherProduct = new MotherProduitSerivce();
        this.Produit = new ProduitSerivce();
        this.Client = new ClientService();

        const profil = this.Auth.getUserProfil();
        this.state.admin = profil.admin;

        this.MotherProduct.ReadProduct()
            .then(data => {
                //console.log(data);
                this.setState({
                    motherProducts: data
                })
            })

        this.Produit.ReadProduct()
        .then(data => {
            //console.log(data);
            this.setState({
                products: data
            })
        })

        this.Client.ReadClient()
        .then(data => {
            console.log(data);
            this.setState({
                clients: data
            })
        })

    }

    NoAdmin() {
        window.location = "/"
    }

    CreateClient() {
        window.location = "/signUp"
    }

    DeleteClient(id) {
        this.Client.DeleteClient(id);
        window.location.reload();
    }


    render() {
        if (this.state.admin) {
            const motherProduct = this.state.motherProducts.map((data, key) => (
                <tr key={key}>
                    <td>{data._id}</td>
                    <td>{data.name}</td>
                    <td>{data.type}</td>
                    <td>{data.products.length}</td>
                    <td><Link to={"/editgolf/" + data._id}><Button className="btn btn-warning">Edit</Button></Link></td>
                    <td><Button className="btn  btn-danger" onClick={(e) => this.DeleteGolf(data._id)}> Delete </Button></td>
                </tr>
            ));
            const product = this.state.products.map((data, key) => (
                <tr key={key}>
                    <td>{data._id}</td>
                    <td>{data.idmotherproduct}</td>
                    <td>{data.idclient}</td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.stock}</td>
                    <td>{data.invoices.length}</td>
                    <td><Link to={"/editgolf/" + data._id}><Button className="btn btn-warning">Edit</Button></Link></td>
                    <td><Button className="btn  btn-danger" onClick={(e) => this.DeleteGolf(data._id)}> Delete </Button></td>
                </tr>
            ));
            const client = this.state.clients.map((data, key) => (
                <tr key={key}>
                    <td>{data._id}</td>
                    <td>{data.email}</td>
                    <td>{data.lastname}</td>
                    <td>{data.firstname}</td>
                    <td>{data.admin.toString()}</td>
                    <td><Link to={"/clientUpdate/" + data._id}><Button className="btn btn-warning">Edit</Button></Link></td>
                    <td><Button className="btn  btn-danger" onClick={(e) => this.DeleteClient(data._id)}> Delete </Button></td>
                </tr>
            ));
            return (
                <div>
                    <h1>MAMAN PRODUIT</h1>
                    <br/>
                    <Table striped hover responsive variant="">
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>type</th>
                        <th>Nbre de Vendeur</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {motherProduct}
                    </tbody>
                    </Table>

                    <Button onClick={this.CreateGolf} className="btn  btn-success" type="submit">Crée Maman Produit</Button>

                    <br/>
                    <br/>
                    <br/>

                    <hr/>
                    
                    <br/>
                    
                    <h1>PRODUIT</h1>
                    <br/>

                    <Table striped hover responsive variant="">
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>id Maman Produit</th>
                        <th>id Client</th>
                        <th>prix</th>
                        <th>Stock</th>
                        <th>Facture</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product}
                    </tbody>
                    </Table>

                    <Button onClick={this.CreateGolf} className="btn  btn-success" type="submit">Crée Produit</Button>

                    <br/>
                    <br/>
                    <br/>

                    <hr/>
                    
                    <br/>
                    
                    <h1>CLIENT</h1>
                    <br/>

                    <Table striped hover responsive variant="">
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Email</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Admin</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {client}
                    </tbody>
                    </Table>

                    <Button onClick={this.CreateClient} className="btn  btn-success" type="submit">Crée Client</Button>

                    <br/>
                    <br/>
                    <br/>
                </div>
            );
        } else {
            return (
                <div>
                    <p>You don't have the rights</p>
                    {this.NoAdmin()}
                </div>
            );
        }
    }
}

export default AdminPage;