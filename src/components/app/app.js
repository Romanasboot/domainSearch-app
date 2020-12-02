import './app.scss';
import React, {Component} from 'react';
import Header from  "../header/header";
import Main from "../main/main";
import Forma from "../form/form";
//import About from "../about/about";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
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
                    <div className="app">
                        <Header/>
                        <Forma onSearchQuery={this.handleQuery}/>
                        <Main query={this.state.query}/>
                        {/* <About/> */}
                        {/* <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/nav" component={Nav}/>
                            <Route path="/about" component={About}/>
                        </Switch> */}

                    </div>
            </Container>
            )
    }
}
export default App;
