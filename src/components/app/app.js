import './app.scss';
import React, {Component} from 'react';
import Header from  "../header/header";
//import Nav from "../nav/nav";
//import Main from "../main/main";
import Forma from "../form/form";
import About from "../about/about";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

class App extends Component {
    constructor(props){
        super(props);
     this.state = {search:''};
     this.state = {query: ''}   
    }

    handleQuery = (search) =>{this.setState({query: search})}

    render (){

        return(
            <Container>
                <BrowserRouter>

                    <div className="app">
                        <Header/>
                        {/* <Form onSearchQuery={this.handleQuery}/> */}
                        {/* <Main query={this.state.query}/> */}
                        
                        <Switch>
                            <Route exact path="/" render={()=><h2>Cia galima ieskoti</h2>}></Route>
                            <Route path="/form"><Forma/></Route>
                            <Route path="/about"><About/></Route>
                            
                        </Switch>

                    </div>
                </BrowserRouter>
            </Container>
            )
    }
}
export default App;
