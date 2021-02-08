import './about.scss'
import { Component } from 'react';
import { Container, Jumbotron} from 'react-bootstrap';

class About extends Component {
    render () {

        return(
            <Container fluid="md">
                <Jumbotron>
                    <h2>Domain Name Search App</h2>
                    <p>
                        Bandė sukurti Roman Kuziakov. KITM 201T grupė. 
                        Kaunas 2020.
                    </p>
                </Jumbotron>
                
            </Container>
        )
     }
}
export default About;