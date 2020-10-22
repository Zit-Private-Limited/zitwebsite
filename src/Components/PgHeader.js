import React, {Component} from 'react';
import ZitLogo from '../Media/Zit Logo.png'
import LogoVideo from '../Media/Video/Zit.mp4'
import {Nav, Navbar} from 'react-bootstrap';

class PgHeader extends Component {
    render() {
    
        return(
            <div>
            

            <div id="page-top">
           


            <Navbar  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* <div className="container"> */}
            <Navbar.Brand href="#home">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <div className="Header-text">
                <img src={ZitLogo} 
                    alt="Zit Private Limited" 
                    width="60"
                    height="40"
                    className="d-inline-block align-top"
                    />{''}
                    Zit Private Limited
                </div>
                    
                    </a>
            </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav">Menu</Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
      
    </Nav>
    <Nav>
    <Nav.Link className="navitem" href="#services">Services</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#team">Team</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
            {/* </div> */}
  
</Navbar>

{/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src={ZitLogo} 
                    alt="Zit Private Limited" 
                    width="100"
                    height="60"
                    className="d-inline-block align-top"/>
                    Zit Private Limited
                    </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav> */}
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Zit Private Limited</div>
                <div className="masthead-heading text-uppercase">Everything Everywhere</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Explore Us</a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </header>
        
        
        
   
        
        
        
        



            </div>
            </div>
        )
    }
}

export default PgHeader;