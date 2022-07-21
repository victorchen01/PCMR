// Images
import ky1 from '../images/ky1.jpg';
import ky1_2 from '../images/ky1-2.png';
import ky1_3 from '../images/ky1-3.jpg';
import ky1_4 from '../images/ky1-4.jpg';

// CSS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Imports
import React, { useState } from 'react';
import { MdAddShoppingCart, MdNoteAdd, MdStore, MdShoppingCart } from 'react-icons/md';
import {Alert, Button, Container, Row, Col, Form, Carousel, Table } 
from 'react-bootstrap';

function App() {
    const [showRev, setShowR] = useState(false);
    const [showCart, setShowC] = useState(false);

    if (showRev) {
        return(
            <div>
            <Alert onClose={() => setShowR(false)} dismissible>
                Review submitted!
            </Alert>

            <Container fluid>
                <Row>
                    <p>Close the pop-up to return to product page, or:</p>
                    <Col>
                        <br></br>
                        <Button href="/">Return to store <MdStore/> </Button>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }

    if (showCart) {
        return(
            <div>
                <Alert onClose={() => setShowC(false)} dismissible>
                    Added to cart!
                </Alert>

                <Container fluid>
                    <Row>
                        <p>Close the pop-up to return to product page, or:</p>
                        <Col>
                            <br></br>
                            <Button href="/cart">View cart <MdShoppingCart/> </Button>
                            <br></br><br></br>
                            <Button href="/">Return to store <MdStore/> </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <div className="keyboard1">
            
            <br></br><br></br>
            {/* Content */}
            <Container fluid>
                <Row>

                    {/* Product Pictures */}
                    <Col sm={8}>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100 h-75" src={ky1} alt="Promotional keyboard photo" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 h-75" src={ky1_2} alt="Keyboard up close with keycaps" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 h-75" src={ky1_3} alt="Keyboard on a desk" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 h-75" src={ky1_4} alt="Gateron red switches underneath" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    
                    {/* Product Description */}
                    <Col sm={4}>
                        <div class="container pt-5 text-center">
                        <h3>Keyboard Mark 1 (KY-1)</h3>
                        </div>
                        <div class="container pt-5 text-center">
                            <h5>$85.99</h5>
                            <p>Just a keychron K-4</p>
                            <p>- Gateron Red switches</p>
                            <p>- Bluetooth 5.1</p>
                            <p>- Aluminum frame</p>
                            <p>- 96% layout</p>
                            <br></br>
                            <Button onClick={() => setShowC(true)}>
                                Add to Cart <MdAddShoppingCart /> 
                            </Button>
                        </div>
                    </Col>

                </Row>
            </Container>

            {/* Review Section */}
            <div class="container pt-5 text-center">
                <div class="row" align="center">
                    <h4>Write a review:</h4>
                    <br></br><br></br>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="Name" placeholder="Enter first name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Enter review"/>
                        </Form.Group>
                        <Button onClick={() => setShowR(true)}>
                            Submit <MdNoteAdd /> 
                        </Button>
                        <br></br><br></br>
                    </Form>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>GAMER</th>
                                <th>REVIEW</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Felix</td>
                                <td>Pog</td>
                            </tr>
                            <tr>
                                <td>Tyler</td>
                                <td>Awesome</td>
                            </tr>
                            <tr>
                                <td>Charlie</td>
                                <td>Amazing</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>

        </div>
    );
    
}


export default App;
