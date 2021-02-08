import './main.scss';
import { Component } from 'react';
import Forma from '../form/form';
import {Container, Form, Row } from 'react-bootstrap';
import Forma from '../form/form';


class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            searched:""

        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    };






    render() {
        return (
        <Container>
            <Row className="justify-content-md-center">
                <p> cia bus ezultatas main 2</p>
                
                <Forma handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </Row>

              
        </Container>
        );
    }
}
export default Main;