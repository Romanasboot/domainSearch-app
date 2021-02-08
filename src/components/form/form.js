import './form.scss';
import { Component } from 'react';
import {Container, Col, Form, FormGroup, FormLabel, FormControl, Button, Row} from 'react-bootstrap';


class Forma extends Component{
    constructor(){
        super()
        this.state = {text: ''};
        
        
    }
        handleChange = (e)=>{
            console.log(e.target.value);
            this.setState({text: e.target.value});
        };
        handleSubmit =(e)=>{
            e.preventDefault();
            //this.props.SearchQuery(this.state.text);
            console.log('ieskosim: '+this.state.text);
        };
    
    render() {
        return (
        <Container>
            <Row className="justify-content-md-center">
                <h2>Informacijos apie domena paieška</h2>
            </Row>
            <Row>
            <Col md-6>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <FormLabel>Domain:</FormLabel>
                    <FormControl type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="Įveskite domeno pavadinimą pvž:  kitm.lt" />
                </FormGroup>
                
                <Button variant="primary" type="submit" id="btnsubmit">
                    Ieškoti
                </Button>
                <Button variant="outline-secondary" type="submit">
                    Išvalyti
                </Button>
            </Form>
            </Col>
            </Row>
        </Container>
    );
}
}
export default Forma;