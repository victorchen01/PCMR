// CSS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Imports
import React, { useState }  from 'react';
import { MdPermIdentity, MdRemoveShoppingCart } from 'react-icons/md';
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
                            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}>
                        <div>
                            <h3>Cart</h3>
                            <br></br>
                            <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Keyboard 1 (KY-1)</td>
                                    <td>$85</td>
                                    <td>
                                        <Button onClick={() => setShow(true)}>
                                        <MdRemoveShoppingCart/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Headphone 1 (HP-1)</td>
                                    <td>$100</td>
                                    <td>
                                        <Button onClick={() => setShow(true)}>
                                        <MdRemoveShoppingCart/></Button>
                                    </td>
                                </tr>
                            </tbody>
                            </Table>
                        </div>
                    </Col>

                    <Col sm={2}></Col>

                    <Col sm={4}>
                        <div>
                            <h3>Summary</h3>
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
                                    <td>Calculated later</td>
                                </tr>
                                <tr>
                                    <td>Tax:</td>
                                    <td>$24</td>
                                </tr>
                                <tr>
                                    <td><h5>Subtotal:</h5></td>
                                    <td>$209</td>
                                </tr>
                            </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                    <br></br>
                        <Button href="/details">
                            Proceed to details <MdPermIdentity /> 
                        </Button>
                    </Col>
                </Row>

            </Container>
            
        </div>
        </div>
    );
}


export default App;
