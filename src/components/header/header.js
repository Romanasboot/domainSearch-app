import './header.scss'
import { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component {
    render () {

        return(
            <Container fluid="md">
                <Row className="justify-content-md-between">

                <Navbar bg="light" variant="light">
                <NavbarBrand to="/">Domain Search Tool</NavbarBrand>
                    <Nav className="mr-auto">
                    <Link exact to="/" className="nav-link">Home</Link>
                    <Link to="/form/" className="nav-link">Forma</Link>
                    <Link to="/about/" className="nav-link">About</Link>
                    </Nav>
                </Navbar>
                </Row>
            
            </Container>
        )
     }
}
export default Header;