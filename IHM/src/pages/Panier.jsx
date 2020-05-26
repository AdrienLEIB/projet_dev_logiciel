import React, { Component } from 'react';
import MotherProductService from '../services/motherProduct.service';
import PanierService from '../services/panier.service';
import { Button, Card, Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class Panier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Fnook',
            subtitle: 'Bienvenue sur Fnook',
            text: 'Liste des produits',
            products: []
        }


        //this.MotherProductService = new MotherProductService();

        this.PanierService = new PanierService();
        //this.PanierService.ResetPanier();

        //this.PanierService.deletePanier("5ec3ca49ad9d0d060c17fec9")

        //this.PanierService.AddPanier("5ec3ca49ad9d0d060c17fec9");


        var products = this.PanierService.getProductsOnPanier();
        for(var index in products){
        	this.PanierService.GetProductDetail(products[index])
            .then(data => {
            	this.state.products.push(data)
                this.setState({
                    products: this.state.products
                })
            })
        }


       
    }
    deletePanier(id){
    	this.PanierService.deletePanier(id);
    	window.location.reload();
    }

    render() {
        const prod = this.state.products.map((data, key) => (
                <tr key={key}>
					<td><img src={data.path} width="50" height="50"/> </td>
                    <td>{data.name}</td>
                    <td>In stock</td>
                    <td><input class="form-control" type="text" value="1" /></td>
                    <td class="text-right">{data.price}</td>
                    <td class="text-right"><button class="btn btn-sm btn-danger" onClick={(e) => this.deletePanier(data._id)}><i class="fa fa-trash"> X </i> </button> </td>
    
                </tr>
            ));
        const priceTotal = this.state.products.reduce((priceTotal, product) => priceTotal + product.price, 0);
            return (

			<div class="container mb-4">
			    <div class="row">
			        <div class="col-12">
			            <div class="table-responsive">
			                <table class="table table-striped">
			                    <thead>
			                        <tr>
			                            <th scope="col"> </th>
			                            <th scope="col">Product</th>
			                            <th scope="col">Available</th>
			                            <th scope="col" class="text-center">Quantity</th>
			                            <th scope="col" class="text-right">Price</th>
			                            <th> </th>
			                        </tr>
			                    </thead>
			                    <tbody>
										{prod}
			                        <tr>
			                            <td></td>
			                            <td></td>
			                            <td></td>
			                            <td></td>
			                            <td><strong>Total</strong></td>
			                            <td class="text-right"><strong> {priceTotal}</strong></td>
			                        </tr>
			                    </tbody>
			                </table>
			            </div>
			        </div>
        <div class="col mb-2">
            <div class="row">
                <div class="col-sm-12  col-md-6">
                    <Link to={"/"}> <button class="btn btn-block btn-light">Continue Shopping</button></Link> 
                </div>
                <div class="col-sm-12 col-md-6 text-right">
                    <button class="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default Panier;