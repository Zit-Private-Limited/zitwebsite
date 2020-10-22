import React, {Component} from 'react';


class PgFooter extends Component {
    render() {
        return(
            <div>
                {/* <!-- Footer--> */}
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Zit Private Limited 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/LimitedZit?s=09" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/zitprivatelimited/?igshid=1a5b8txpgzua6"><i className="fab fa-instagram" rel="noopener noreferrer" target="_blank"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/company/zit-private-limited" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    {/* <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Use</a>
                    </div> */}
                </div>
            </div>
        </footer>
            </div>
        )
    }
}

export default PgFooter;