// Images
import map from '../images/map.png';

// CSS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Imports
import React, { useState }  from 'react';
import { MdStore, MdRemoveShoppingCart } from 'react-icons/md';
import { Breadcrumb, Alert, Button, Container, Row, Col, Form, Carousel, Table } 
from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      <div className="content">

        <br></br><br></br>
        <h1>Order Placed!</h1>
        <br></br>
        <p>A confirmation reciept has been sent to your email</p>
        <br></br>
        <Button href="/">Return to store <MdStore/> </Button>
        <br></br><br></br><br></br>

        <Container fluid="md">
            <Row>
                <Col>
                    <img src={map} alt="Map of your location"/>
                </Col>
            </Row>
        </Container>

        
        
      </div>
    </div>
  );
}


export default App;
