import React from 'react' 
import './Navbar.css'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';


const Navi = () => {
    return (
        <Container fluid> 
            <Row> 
                <Navbar expand="lg">   
                    <Col lg="9"> 
                        <Navbar.Brand href="/">Needle & Thread</Navbar.Brand>
                    </Col>
                    <Col lg ="2">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Pattern</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Navbar>
            </Row>
        </Container>
    );
}; 

export default Navi; 