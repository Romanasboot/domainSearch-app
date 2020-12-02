import './header.scss'
import { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, Row, NavLink } from 'react-bootstrap';
//import {NavLink} from 'react-router-dom';

class Header extends Component {
    render () {

        return(
            <Container>
                <Row className="justify-content-md-between">

                <Navbar bg="light" variant="light">
                <NavbarBrand to="/">Domain Search Tool</NavbarBrand>
                    <Nav className="mr-auto">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/form/">Forma</NavLink>
                    <NavLink to="/about/">About</NavLink>
                    </Nav>
                </Navbar>
                </Row>
            
            </Container>
        )
     }
}
export default Header;