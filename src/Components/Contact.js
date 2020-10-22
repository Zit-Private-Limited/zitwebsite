import React, {useState} from 'react'
import {db} from './ContactBackend';

const Contact = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[message, setMessage] = useState("")
    const[loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("Contact Messages")
        .add({
            name: name,
            email: email,
            phone: phone,
            message: message,
        })
        .then(() => {
            setLoader(false);
            alert("Message Sent To Zit Private Limited")
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        })
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };

        return(
            <div>
                {/* <!-- Contact--> */}
        <section className="page-section" id="contact">
        <div className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left" style={{color:"#fff"}}><h4> Follow us on</h4></div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/LimitedZit?s=09" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/zitprivatelimited/?igshid=1a5b8txpgzua6"><i className="fab fa-instagram" rel="noopener noreferrer" target="_blank"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/company/zit-private-limited" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            </div>
            <br></br>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">We Serve for you</h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={handleSubmit}>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" 
                                id="name" type="text" 
                                placeholder="Your Name *" 
                                required="required" 
                                data-validation-required-message="Please enter your name." 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" 
                                id="email" type="email" 
                                placeholder="Your Email *" 
                                required="required" 
                                data-validation-required-message="Please enter your email address."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" 
                                id="phone" type="tel" 
                                placeholder="Your Phone *" 
                                required="required" 
                                data-validation-required-message="Please enter your phone number." 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" 
                                id="message" placeholder="Your Message *" 
                                required="required" 
                                data-validation-required-message="Please enter a message."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                ></textarea>

                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" 
                        id="sendMessageButton" type="submit"
                        style={{ background: loader ? "" : " rgb(2, 2, 110)" }}
                        >Send Message</button>
                    </div>
                </form>
            </div>
            
            
                
        </section>
            </div>
        )
    
}

export default Contact;