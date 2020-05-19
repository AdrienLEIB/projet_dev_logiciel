import React, { Component } from 'react'
// import { Badge, Col, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import "./css/Footer.css";

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer" style={{backgroundColor: `#a1d9e5` }}>
                <p>Copyright © - 2020-2021</p>
            </footer>
            // <Navbar bg="" fixed="bottom" style={{backgroundColor: `#a1d9e5` }}>
            //     <Navbar.Text >Brand link</Navbar.Text>
            // </Navbar>
        )
    }
}
