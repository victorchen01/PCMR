// Images
import m1 from '../images/m1.jpg';
import m1_2 from '../images/m1-2.jpg';


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
        <div className="content">
            
            <br></br><br></br>
            {/* Content */}
            <Container fluid>
                <Row>

                    {/* Product Pictures */}
                    <Col sm={8}>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100 h-75" src={m1} alt="Black mouse from top down" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 h-75" src={m1_2} alt="Black mouse with bottom view and side profile" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    
                    {/* Product Description */}
                    <Col sm={4}>
                        <div class="container pt-5 text-center">
                        <h3>Mouse Mark 1 (M-1)</h3>
                        </div>
                        <div class="container pt-5 text-center">
                            <h5>$100</h5>
                            <p>Mad Catz R.A.T. 5</p>
                            <p>- Wired</p>
                            <p>- Laser sensor</p>
                            <p>- Adjustable weight</p>
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
                                <td colSpan={2}>No reviews yet, be the first!</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>

        </div>
    );
    
}


export default App;
