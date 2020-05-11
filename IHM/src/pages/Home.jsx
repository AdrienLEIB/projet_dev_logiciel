import React, { Component } from 'react';
import ProductService from '../services/product.service';
import {Table, Button, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Fnook',
            subtitle: 'Bienvenue sur Fnook',
            text: 'Liste des produits',
            products: []
        }

        this.ProductService = new ProductService();

        this.ProductService.ReadProduct()
            .then(data => {
                this.setState({
                    products: data
                })
            })
    }

    render() {
            const prod = this.state.products.map((data, key) => (
                <tr key={key}>
                    <td>{data.name}</td>
                    <td>{data.stock}</td>
                    <td><Image src={data.path} rounded width="100" height="100"/></td>
                    <td>{data.price}</td>
                    <td>{data.invoices}</td>
                    <td><Link to={"/detailProduct/" + data._id}><Button className="btn btn-warning">View</Button></Link></td>
                </tr>
            ));
            return (
                <div>
                    <br/>
                    <h1> {this.state.title} </h1>
                    <p> {this.state.subtitle} </p>
                    <p> {this.state.text} </p>
                    <br/>
                    
                    <Table responsive>
                    <thead>
                        <tr>
                        <th>name</th>
                        <th>stock</th>
                        <th>path</th>
                        <th>price</th>
                        <th>invoices</th>
                        <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prod}
                    </tbody>
                    </Table>

            </div>
        );
    }
}

export default Home;