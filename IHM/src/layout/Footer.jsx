import React, { Component } from 'react'
// import { Badge, Col, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import "./css/Footer.css";

export default class Footer extends Component {

    render() {
        return (

            <footer className="footer" style={{backgroundColor: `#a1d9e5` }}>
                {/* <section>
                     <div class="wave wave1"></div>
                     <div class="wave wave2"></div>
                     <div class="wave wave3"></div>
                     <div class="wave wave4"></div>
                </section> */}
                <p>Copyright © - 2020-2021</p>

            </footer>
            // <Navbar bg="" fixed="bottom" style={{backgroundColor: `#a1d9e5` }}>
            //     <Navbar.Text >Brand link</Navbar.Text>
            // </Navbar>
        )
    }
}
