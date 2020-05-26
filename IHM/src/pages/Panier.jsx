import React, { Component } from 'react';
import PanierService from '../services/panier.service';
import { Button, Container, Row, Col, Table, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class Panier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            numberTemp: []
        }


        this.handleChangeStock = this.handleChangeStock.bind(this);

        //this.MotherProductService = new MotherProductService();

        this.PanierService = new PanierService();
        //this.PanierService.ResetPanier();

        //this.PanierService.deletePanier("5ec3ca49ad9d0d060c17fec9")

        //this.PanierService.AddPanier("5ec3ca49ad9d0d060c17fec9");

        var products = this.PanierService.getProductsOnPanier();
        for(var index in products){
            this.PanierService.GetProductDetail(products[index])
            .then(data => {
                //console.log(data);
            	this.state.products.push(data)
                this.setState({
                    products: this.state.products
                })
            })
        }
       
    }

    handleChangeStock(event) {
        this.setState({
          numberTemp: event.target.value
        });
        console.log(this.state.numberTemp);
      }

    deletePanier(id){
    	this.PanierService.deletePanier(id);
    	window.location.reload();
    }

    render() {
        const prod = this.state.products.map((data, key) => (
                <tr key={key}>
					<td><img width={50} height={50} className="mr-3" src={data.path} alt="Img product" /></td>
                    <td>{data.name}</td>
                    <td>In stock</td>
                    <td><Form.Control type="number" min={0} max={data.stock} name="stock" value={this.numberTemp} onChange={this.handleChangeStock}/></td>
                    <td>{data.price} €</td>
                    <td><Link to={"/productDetail/" + data._id}><Button className="btn btn-info">Voir produit</Button></Link></td>
                    <td><Button className="btn btn-sm btn-danger" onClick={(e) => this.deletePanier(data._id)}>X</Button></td>
                </tr>
            ));
        const priceTotal = this.state.products.reduce((priceTotal, product) => priceTotal + product.price, 0);
            return (
                <Container>
                    <Row>
                            <Table striped hover responsive variant="">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Available</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {prod}
                                </tbody>
                            </Table>
                            <Col sm={{span: 2, offset: 10}}>
                                <p>Total : {priceTotal} €</p>
                            </Col>
                        <Col sm={6}>
                            <Link to={"/"}><Button className="btn  btn-success">Continue Shopping</Button></Link> 
                        </Col>
                        <Col sm={{ span: 1, offset: 2 }}>
                            <Button className="btn  btn-success">Checkout</Button>
                        </Col>
                        <br/>
                        <br/>
                        <br/>
                    </Row>
                </Container>
        );
    }
}

export default Panier;