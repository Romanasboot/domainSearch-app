import './main.scss';
import { Component } from 'react';
//import Forma from '../form/form';
import {Container, Row } from 'react-bootstrap';


class Main extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }

    render() {
        return (
        <Container>
            <Row className="justify-content-md-center">
                <p> cia bus ezultatas</p>
            </Row>

              
        </Container>
    );
}
}
export default Main;