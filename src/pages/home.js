// Images
import ky1 from '../images/ky1.jpg';
import hp1 from '../images/hp1.png';

// CSS
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Imports
import React from 'react';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      <div className="content">

        <br></br>
        <img src={ky1} alt="Wireless mechanical 96 percent keyboard"/>
        <br></br><br></br>
        <h1>Introducing the KY-1</h1>
        <p>
          New mechanical keyboard, 96% layout and wireless!
        </p>
        <Button href="/ky1">Learn More</Button>
        <br></br><br></br>
        <img src={hp1} alt="Black wireless headphones"/>
        <br></br><br></br>
        <h1>Say hello to the HP-1</h1>
        <p>
          Very good headphones
        </p>
        <Button href="/hp1">Learn More</Button>
        
      </div>
    </div>
  );
}


export default App;
