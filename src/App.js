import React,{Component} from 'react';

import './App.css';
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import {Container, Row, Col} from 'react-bootstrap';

import PgHeader from './Components/PgHeader';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Team from './Components/Team';
import Contact from './Components/Contact';
import PgFooter from './Components/PgFooter';
import ZitIntro from './Components/ZitIntro';

class App extends Component {
  render() {
    return (
      <div>
        <PgHeader />
        {/* <ZitIntro /> */}
        <hr style={{borderTop: "1px solid #212529"}}></hr>
        <Services />
        <hr style={{borderTop: "1px solid #212529"}}></hr>
        <AboutUs />
        <hr style={{borderTop: "1px solid #212529"}}></hr>
        <Team />
        <hr style={{borderTop: "1px solid #212529"}}></hr>
        <Contact />
        <hr style={{borderTop: "1px solid #212529"}}></hr>
        <PgFooter />
        <hr style={{borderTop: "1px solid #212529"}}></hr>
          
      </div>
    );
  }
  
}

export default App;
