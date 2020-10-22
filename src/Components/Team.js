import React,{Component} from 'react'
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import Ajay from '../Media/Team/ajay.png'
import Raaj from '../Media/Team/Raaj.png';
import Sangili from '../Media/Team/Sangili.png'
class Team extends Component {
    render() {
        return(
            <div>
                     {/* <!-- Team--> */}
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Talent wins game, but teamwork and intelligence wins championship.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={Ajay} alt="Ajay Krishnan" />
                            <h4>Ajay Krishnan P</h4>
                            <p className="text-muted">Founder</p>
                            
                            <div className="social-links">
                            <OverlayTrigger overlay={<Tooltip id="button-tooltip">LinkedIn</Tooltip>} placement='bottom'>
                        <a className="btn-dark  btn-social mx-2" href="https://www.linkedin.com/in/ajay-krishnan-7a8633b1/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin-in"  aria-hidden="true" />
                            </a>
                        </OverlayTrigger>
                        {/* Whatsapp */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Whatsapp</Tooltip>} placement='bottom'>
                        <a className="btn-dark  btn-social mx-2" href="https://api.whatsapp.com/send?phone=+918489154492" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-whatsapp"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                        {/* Telegram */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Instagram</Tooltip>} placement='bottom'>
                        <a className="btn-dark  btn-social mx-2" href="https://www.instagram.com/ajay_682000/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                            </div>
                            
                            
                    
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={Sangili} alt="Sangili Guru Karthick" />
                            <h4>Sangili Guru Karthick</h4>
                            <p className="text-muted">Co-Founder</p>
                            <div className="social-links">
                            <OverlayTrigger overlay={<Tooltip id="button-tooltip">LinkedIn</Tooltip>} placement='bottom'>
                        <a className="btn-dark  btn-social mx-2" href="https://www.linkedin.com/in/sangiliguru-karthick-8a1011191/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin-in"  aria-hidden="true" />
                            </a>
                        </OverlayTrigger>
                        {/* Whatsapp */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Whatsapp</Tooltip>} placement='bottom'>
                        <a className="btn-dark  btn-social mx-2" href="https://api.whatsapp.com/send?phone=+916379534909" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-whatsapp"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                        {/* Telegram */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Instagram</Tooltip>} placement='bottom'>
                        <a className="btn-dark  btn-social mx-2" href="https://www.instagram.com/mr._.smile._.theif._.sgk/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={Raaj} alt="Raajasekar" />
                            <h4>Raajasekar</h4>
                            <p className="text-muted">Co-Founder</p>
                            <div className="social-links">
                            <OverlayTrigger overlay={<Tooltip id="button-tooltip">LinkedIn</Tooltip>} placement='bottom'>
                        <a className="btn-dark  btn-social mx-2" href="https://www.linkedin.com/in/raajasekar-mohanraj-b058161b7/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin-in"  aria-hidden="true" />
                            </a>
                        </OverlayTrigger>
                        {/* Whatsapp */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Whatsapp</Tooltip>} placement='bottom'>
                        <a className="btn-dark  btn-social mx-2" href="https://api.whatsapp.com/send?phone=+919597417702" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-whatsapp"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                        {/* Telegram */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Instagram</Tooltip>} placement='bottom'>
                        <a className="btn-dark  btn-social mx-2" href="https://www.instagram.com/raajasekar_mohanraj/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</p></div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}
export default Team;