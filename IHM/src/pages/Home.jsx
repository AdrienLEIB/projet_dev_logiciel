import React, { Component } from 'react';
import ProductService from '../services/product.service';
import { Button, Card, Container, Row, Col} from 'react-bootstrap'
//mport { Link } from 'react-router-dom';

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
                // <tr key={key}>
                //     <td>{data.name}</td>
                //     <td>{data.stock}</td>
                //     <td><Image src={data.path} rounded width="100" height="100"/></td>
                //     <td>{data.price}</td>
                //     <td>{data.invoices}</td>
                //     <td><Link to={"/detailProduct/" + data._id}><Button className="btn btn-warning">View</Button></Link></td>
                // </tr>
                //
                <Col key={key}>
                    <Card style={{ width: 25 + 'em' ,margin: 1 + 'em'}}>
                    <Card.Img variant="top" src={data.path} width="300" height="250"/>
                    <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        Prix : {data.price} €
                    </Card.Text>
                    <Button variant="primary">Voir plus en détail</Button>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Stock disponible : {data.stock}</small>
                    </Card.Footer>
                    </Card>
                </Col>
            ));
            return (
                <div>

                    <Container fluid>
                        <Row>
                            {prod}
                        </Row>
                    </Container>

                    {/* <Table responsive>
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
                    </Table> */}

            </div>
        );
    }
}

export default Home;