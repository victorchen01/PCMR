// Pages
import Home from './pages/home.js';
import K1 from './pages/ky1.js';
import K2 from './pages/ky2.js';
import H1 from './pages/hp1.js';
import H2 from './pages/hp2.js';
import M1 from './pages/m1.js';
import M2 from './pages/m2.js';
import Cart from './pages/cart.js';
import CartD from './pages/cartD.js';
import CartS from './pages/cartS.js';
import Confirm from './pages/confirm.js';
import Support from './pages/support.js';
import FAQ from './pages/faq.js';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, Container, Row, Col, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Container fluid style={{backgroundColor: "#9ce1ff"}}>
          <Row>
            {/* Nav Bar */}
            <Col sm={5}>
              <br></br>
              <Navbar style={{backgroundColor: "#9ce1ff"}} expand="lg">
                <Container >
                  <Navbar.Brand href="/">PCMR</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                      <NavDropdown title="Keyboards" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/ky1">KY-1</NavDropdown.Item>
                        <NavDropdown.Item href="/ky2">KY-2</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Headphones" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/hp1">HP-1</NavDropdown.Item>
                        <NavDropdown.Item href="/hp2">HP-2</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Mice" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/m1">M-1</NavDropdown.Item>
                        <NavDropdown.Item href="/m2">M-2</NavDropdown.Item>
                      </NavDropdown>

                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>

            {/* Search */}
            <Col sm={5}>
              <br></br>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicSearch">
                  <Form.Control type="search" placeholder="Search" />
                </Form.Group>
              </Form>
            </Col>

            {/* Cart */}
            <Col sm={2}>
            <br></br>
              <Button href="/cart">
                Cart <MdShoppingCart /> 
              </Button>
            </Col>

          </Row>
        </Container>
        
        {/* Page Routing */}
        <div className="content">
          <Switch>

            {/* Home */}
            <Route exact path="/"> <Home /> </Route>

            {/* Keyboard Pages */}
            <Route path="/ky1"> <K1 /> </Route>
            <Route path="/ky2"> <K2 /> </Route>

            {/* Headphone Pages */}
            <Route path="/hp1"> <H1 /> </Route>
            <Route path="/hp2"> <H2 /> </Route>

            {/* Mouse Pages */}
            <Route path="/m1"> <M1 /> </Route>
            <Route path="/m2"> <M2 /> </Route>

            {/* Cart Pages */}
            <Route path="/cart"> <Cart /> </Route>
            <Route path="/details"> <CartD /> </Route>
            <Route path="/shipping"> <CartS /> </Route>
            <Route path="/success"> <Confirm /> </Route>

            {/* Help Pages */}
            <Route path="/support"> <Support /> </Route>
            <Route path="/faq"> <FAQ /> </Route>

          </Switch>
        </div>

        {/* Footer */}
        <div className="footer">
          <br></br><br></br><br></br>
          <CDBFooter style={{backgroundColor: "#9ce1ff"}} className="shadow">
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '80%' }}>
              <CDBBox display="flex" className="d-flex justify-content-evenly">

                <CDBBox>
                  <a href="/" className="d-flex align-items-center p-0 text-dark">
                    <span className="ml-3 h5 font-weight-bold">PCMR</span>
                  </a>
                  <p> Best shop for gaming peripherals! </p>
                  <p> * no backend so some things dont work </p>
                  <CDBBox display="flex" className="mt-2">
                    <CDBBtn flat color="dark" href="https://www.instagram.com/victorr_cc/" className="p-2">
                      <CDBIcon fab icon="instagram"/>
                    </CDBBtn>
                  </CDBBox>
                </CDBBox>

                <CDBBox>
                  <p className="text-center h5 mb-4" style={{ fontWeight: '600' }}> Our Favorites </p>
                  <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                    <CDBFooterLink href="/hp1">HP-1 Headphones</CDBFooterLink>
                    <CDBFooterLink href="/hp2">HP-2 Headphones</CDBFooterLink>
                    <CDBFooterLink href="/m1">M-1 Mouse</CDBFooterLink>
                  </CDBBox>
                </CDBBox>

                <CDBBox>
                  <p className="h5 mb-4" style={{ fontWeight: '600' }}> Help </p>
                  <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                    <CDBFooterLink href="/support">Support</CDBFooterLink>
                    <CDBFooterLink href="/faq">FAQ</CDBFooterLink>
                  </CDBBox>
                </CDBBox>

              </CDBBox>
              <small className="text-center mt-5">&copy; PCMR, Victor Chen, SEG3125, 300116813. Thank you!</small>
            </CDBBox>
          </CDBFooter>
        </div>

      </div>
    </Router>
  );
}

export default App;
