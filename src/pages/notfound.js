// Images
import map from '../images/map.png';

// CSS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Imports
import React, { useState }  from 'react';
import { MdStore,  } from 'react-icons/md';
import { Button, Container, Row, Col } 
from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      <div className="content">

        <br></br><br></br>
        <h1>Whoops, no page was found!</h1>
        <br></br>
        <p>Maybe you should head back to the store?</p>
        <br></br>
        <Button href="/">Return to store <MdStore/> </Button>
        <br></br><br></br><br></br>
        
      </div>
    </div>
  );
}


export default App;
