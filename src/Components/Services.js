import React, {Component} from 'react';


class Services extends Component {
    render() {
        return (
            <div>
                {/* <!-- Services--> */}
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Our Services</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">E-Commerce</h4>
                        <p className="text-muted">End to End E-Commerce Services</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Web Development</h4>
                        <p className="text-muted">Responsive Sites at low cost</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-question fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">??????</h4>
                        <p className="text-muted">(To be Starting Soon) </p>
                    </div>
                </div>
            </div>
        </section>

            </div>
        )
    }
}

export default Services;