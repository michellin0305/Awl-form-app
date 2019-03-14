import React, { Component } from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';

class CustomNavBar extends Component {
    render() { 
        return ( 
                <Navbar>
                    <Navbar.Brand href="#">
                        skool
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link>Home</Nav.Link>
                            <Nav.link>About</Nav.link>  <Nav.Link>Sevices</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button>Sign Up</Button>
                </Navbar>
         );
    }
}
 
export default CustomNavBar;