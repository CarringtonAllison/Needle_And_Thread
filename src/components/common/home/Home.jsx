import React from 'react' 
import { Button, Container, Row, Col } from 'react-bootstrap'
import './Home.css'

const Home = () => {

    return (
        <Container fluid id="homeContainer">   
            <Row className="homeRow">
                <Row>
                    <Col>
                        <h1 className="homeQuote">You can't buy HAPPINESS but you can BUY FABRIC!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="home-patterns">See Patterns</Button> 
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default Home; 