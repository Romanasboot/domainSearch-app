import './nav.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import React, { Component } from 'react';
import  {NavLink} from 'react-router-dom';
 
class Nav2 extends Component{
    constructor(props) {
        super(props);
        this.state = {search:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
 
      handleChange(event) {this.setState({search: event.target.value});  }
      handleSubmit(event) {
        this.props.onSearchInput(this.state.search)  
        console.log('test: ' + this.state.search);
        event.preventDefault();
      }
 
    render(){
        return(
            <Container fluid>
                    <Navbar className="bg-light justify-content-between navBar" md={{ span: 4, offset: 4 }}>
                                <NavLink exact to="/">Pradinis</NavLink>
                                <NavLink to="/form">Forma</NavLink>
                                <Form inline onSubmit={this.handleSubmit} >
                                    <FormControl type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search" className=" mr-sm-2" />
                                    <Button type="submit" variant="primary">cia search</Button>
                                </Form>        
                    </Navbar>
            </Container>
        )
    }
}
 
 export default Nav2;