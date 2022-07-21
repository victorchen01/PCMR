// Images
import ky2 from '../images/ky2.jpg';
import ky2_2 from '../images/ky2-2.jpg';


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
        <div className="keyboard2">
            
            <br></br><br></br>
            {/* Content */}
            <Container fluid>
                <Row>

                    {/* Product Pictures */}
                    <Col sm={8}>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100 h-75" src={ky2} alt="Promotional keyboard photo" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 h-75" src={ky2_2} alt="Top down view of keyboard" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    
                    {/* Product Description */}
                    <Col sm={4}>
                        <div class="container pt-5 text-center">
                        <h3>Keyboard Mark 2 (KY-2)</h3>
                        </div>
                        <div class="container pt-5 text-center">
                            <h5>$60</h5>
                            <p>Blackwidow V3</p>
                            <p>- Razer green switches</p>
                            <p>- Transparent switches</p>
                            <p>- Aluminum frame</p>
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
