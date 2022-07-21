// CSS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Images
import map from '../images/map.png';

// React Imports
import React, { useState }  from 'react';
import { MdCreditCard, MdRemoveShoppingCart } from 'react-icons/md';
import { Breadcrumb, Alert, Button, Container, Row, Col, Form, Carousel, Table } 
from 'react-bootstrap';

function App() {

    const [show, setShow] = useState(false);

    if (show) {
        return(
            <Alert onClose={() => setShow(false)} dismissible>
                Item removed *not actually*
            </Alert>
        );
    }

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
                            <Breadcrumb.Item href="/details">Details</Breadcrumb.Item>
                            <Breadcrumb.Item active>Shipping</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 3, offset: 2 }}>
                        <div>
                            <br></br>
                            <h4>Shipping options</h4>
                            <br></br>
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check 
                                            type={type}
                                            id={`default-${type}-1`}
                                            label={`Standard Shipping`}
                                        />
                                        <Form.Check 
                                            type={type}
                                            id={`default-${type}-2`}
                                            label={`Standard with Tracking`}
                                        />
                                        <Form.Check 
                                            type={type}
                                            id={`default-${type}-3`}
                                            label={`Expedited Shipping`}
                                        />
                                    </div>
                                ))}
                            </Form>
                            
                        </div>
                    </Col>

                    <Col md={{ span: 3, offset: 3 }}>
                        <div>
                            <h4>Summary</h4>
                            <br></br>
                            <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Summary so far</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Total:</td>
                                    <td>$185</td>
                                </tr>
                                <tr>
                                    <td>Shipping:</td>
                                    <td>$10</td>
                                </tr>
                                <tr>
                                    <td>Tax:</td>
                                    <td>$24</td>
                                </tr>
                                <tr>
                                    <td><h5>Subtotal:</h5></td>
                                    <td>$219</td>
                                </tr>
                            </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                    <br></br>
                        <Button href="/success">
                            Checkout <MdCreditCard /> 
                        </Button>
                    </Col>
                </Row>

            </Container>
            
        </div>
        </div>
    );
}


export default App;
