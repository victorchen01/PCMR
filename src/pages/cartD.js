// CSS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Imports
import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { Breadcrumb, Alert, Button, Container, Row, Col, Form, Carousel, Table } 
from 'react-bootstrap';

function App() {

    return (
        <div className="App">
        
            <div className="content">
                <br></br><br></br>
                <Container fluid="md">

                    <Row>
                        <Col>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
                                <Breadcrumb.Item active>Details</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    
                    <br></br><br></br>

                    <Row>
                        <Col>
                            <h3>Personal Details</h3>
                            <br></br>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="name" placeholder="Enter full name" />
                                </Form.Group>

                                <br></br>

                                <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Control type="address" placeholder="Enter Address" />
                                </Form.Group>

                                <br></br>

                                <Form.Group className="mb-3" controlId="formBasicCard">
                                    <Form.Control type="card" placeholder="Enter Card #" />
                                </Form.Group>
                            </Form>
                        </Col>

                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCity">
                                    <Form.Control type="city" placeholder="Enter city" />
                                </Form.Group>

                                <br></br>

                                <Form.Group className="mb-3" controlId="formBasicExpiry">
                                    <Form.Control type="expiry" placeholder="Enter card expiry date" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Is your billing address the same?" />
                                </Form.Group>

                            </Form>
                        </Col>

                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Control type="phone" placeholder="Enter phone number" />
                                </Form.Group>

                                <br></br>

                                <Form.Group className="mb-3" controlId="formBasicPostal">
                                    <Form.Control type="postal" placeholder="Enter postal code" />
                                </Form.Group>

                                <br></br>

                                <Form.Group className="mb-3" controlId="formBasicCVV">
                                    <Form.Control type="cvv" placeholder="Enter 3/4 digit CVV" />
                                </Form.Group>

                            </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                        <br></br>
                            <Button href="/shipping">
                                Proceed to Shipping <MdLocalShipping/>
                            </Button>
                        </Col>
                    </Row>

                </Container>
                
            </div>
        </div>
    );
}


export default App;
