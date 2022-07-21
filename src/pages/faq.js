// CSS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Imports
import React, {useState} from 'react';
import { MdSupportAgent, MdStore, MdCommentBank } from 'react-icons/md';
import { Accordion, Container, Row, Col } 
from 'react-bootstrap';

function App() {

    return (
        <div className="App">
        
            <div className="content">
                <br></br><br></br>
                <Container fluid="md">

                    <Row>
                        <h3>Frequently Asked Questions</h3>
                        <br></br><br></br><br></br>
                    </Row>

                    <Row>
                        <Col>
                            <h4>Keyboards</h4>
                            <br></br>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>My keyboard won't turn on?</Accordion.Header>
                                    <Accordion.Body>
                                    Make sure you charge your keyboard if it's wireless.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Can I use my wireless keyboard with a wire?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes, just connect the wire to your device's usb port.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br></br><br></br>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h4>Headphones</h4>
                            <br></br>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>My noise cancellation turns on and off?</Accordion.Header>
                                    <Accordion.Body>
                                    Make sure the headphones are charged
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Why can I still hear voices using noise cancellation?</Accordion.Header>
                                    <Accordion.Body>
                                    Noise cancellation is most effective on low frequencies, some higher pitched noises won't be cancelled out.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br></br><br></br>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h4>Mouse</h4>
                            <br></br>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>My M-2 mouse doesn't register sometimes?</Accordion.Header>
                                    <Accordion.Body>
                                    Optical mice don't work well on glass surfaces, make sure your desk is not glass.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>My M-1 mouse stopped working?</Accordion.Header>
                                    <Accordion.Body>
                                    Buy a new one.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br></br><br></br>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h4>Shipping</h4>
                            <br></br>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How long is shipping?</Accordion.Header>
                                    <Accordion.Body>
                                    Handling time is 5 business days, shipping can take up to 15 business days.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How are the products shipped?</Accordion.Header>
                                    <Accordion.Body>
                                    We use a combination of unmanned drones, carrier pigeons and FedEx.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br></br><br></br>
                        </Col>
                    </Row>

                </Container>
                
            </div>
        </div>
    );
}


export default App;
