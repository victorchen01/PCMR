// CSS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Imports
import React, {useState} from 'react';
import { MdSupportAgent, MdStore, MdCommentBank } from 'react-icons/md';
import { Alert, Button, Container, Row, Col, Form } 
from 'react-bootstrap';

function App() {

    const [show, setShow] = useState(false);

    if (show) {
        return(
            <div>
            <Alert onClose={() => setShow(false)} dismissible>
                Email submitted!
            </Alert>

            <Container fluid>
                <Row>
                    <Col>
                        <br></br>
                        <Button href="/">Return to store <MdStore/> </Button>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }

    return (
        <div className="App">
        
            <div className="content">
                <br></br><br></br>
                <Container fluid="md">

                    <Row>
                        <h3>Have a question? Send us an email!</h3>
                        <br></br><br></br><br></br>
                    </Row>

                    <Row>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="name" placeholder="Enter full name" />
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
                            </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Enter your question"/>
                            </Form.Group>
                            <Button onClick={() => setShow(true)}>
                                Submit <MdSupportAgent /> 
                            </Button>
                            <br></br><br></br><br></br><br></br>
                        </Form>
                    </Row>

                    <Row>
                        <h5>Don't forget to check our FAQ!</h5>
                        <br></br><br></br>
                        <Col>
                            <Button href="/faq">
                                FAQ <MdCommentBank /> 
                            </Button>
                        </Col>
                        
                    </Row>

                </Container>
                
            </div>
        </div>
    );
}


export default App;
