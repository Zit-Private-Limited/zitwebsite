import React,{Component} from 'react';

import Zit_Banner_Logo from '../Media/Zit_banner_Square.png'
import {Image} from 'react-bootstrap'


class AboutUs extends Component{
    render() {
        return(
            <div>
                <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">An Indian Startup in an Ideation Stage</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">
                            <img className="rounded-circle img-fluid" src={Zit_Banner_Logo} alt="Zit" ></img>
                            
                            
                            </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>10/10/2020</h4>
                                <h4 className="subheading">Beginning of our Journey</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Zit is a Indian Startup started in a famous town <b>Rajapalayam</b> with a initial of three members in a small room. The start up was started as an ideation stage startup and will be futher developed to upcoming phases</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={Zit_Banner_Logo} alt="Zit" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>22/10/2020</h4>
                                <h4 className="subheading">Launch of Website</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Zit Private Technologies Website was launched with the tagline of<b>"Everything Everywhere"</b></p></div>
                        </div>
                    </li>
                    
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                We are
                                <br />
                                Getting 
                                <br />
                                Stronger!!!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
         
          
          </div>
            
        )
    }
}

export default AboutUs;