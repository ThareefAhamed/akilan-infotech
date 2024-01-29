import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './navbar';
import Footer from './footer';

function Services() {
    return (
        <div>
            <Navigation />
            <div className='services'>
                <Container>
                    <h1 id='heading'>OUR SERVICES</h1>
                    <Row>
                        <Col xs={12} lg={3} md={6} sm={12}>
                            <div className="card">
                                <div>
                                    <img id='service-img' src='remote.jpg' alt='implement' width='50%' height='80%'></img>
                                </div>
                                <div>
                                    <h3>Onsite & Remote Support</h3>
                                    <p>
                                        An Onsite visit includes services for installation/reinstallation of the Application, Data Rectification, etc
                                    </p>
                                </div>
                                <span className="top"></span>
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <span className="left"></span>
                            </div>
                        </Col>
                        <Col xs={12} lg={3} md={6} sm={12}>
                            <div className="card">
                                <div>
                                    <img id='service-img' src='implement.jpg' alt='implement' width='50%' height='80%'></img>
                                </div>
                                <div>
                                    <h3>Implementation Services</h3>
                                    <p>
                                        Actual Handholding of setting up Tally Features and guidance in entering live data at your office location
                                    </p>
                                </div>
                                <span className="top"></span>
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <span className="left"></span>
                            </div>
                        </Col>
                        <Col xs={12} lg={3} md={6} sm={12}>
                            <div className="card">
                                <div>
                                    <img id='service-img' src='synchronize.jpg' alt='implement' width='50%' height='80%'></img>
                                </div>
                                <div>
                                    <h3>Data Synchronization & Remote Access</h3>
                                    <p>
                                        Multi Location Data Management and Consolidation. Highly Secured 128 bit encrypted data access from anywhere across the globe.
                                    </p>
                                </div>
                                <span className="top"></span>
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <span className="left"></span>
                            </div>
                        </Col>
                        <Col xs={12} lg={3} md={6} sm={12}>
                            <div className="card">
                                <div>
                                    <img id='service-img' src='corporate.jpg' alt='implement' width='50%' height='80%'></img>
                                </div>
                                <div>
                                    <h3>Corporate Training</h3>
                                    <p>
                                        One to Many training on Features of Tally Prime
                                    </p>
                                </div>
                                <span className="top"></span>
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <span className="left"></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Services;