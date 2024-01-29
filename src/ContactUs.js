import Navigation from "./navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "./footer";
import './App.css';
function Contactus() {
    return (
        <div className="customization">
            <Navigation />
            <div className='enquiry-us'>
                <h1 id='enquiry-head' className='text-center mt-5'>FOR ENQUIERIES</h1>
                <Container>
                    <Row>
                        <Col>
                            <form>
                                <div data-mdb-input-init class="form-outline mb-4">
                                    <TextField
                                        fullWidth
                                        id="Name"
                                        label="Name"
                                        type="text"
                                        autoComplete='current-id'
                                        required
                                    />
                                </div>
                                <div data-mdb-input-init class="form-outline mb-4">
                                    <TextField
                                        fullWidth
                                        id="Email"
                                        label="Email"
                                        type="email"
                                        autoComplete='current-email'
                                        required
                                    />
                                </div>
                                <div data-mdb-input-init class="form-outline mb-4">
                                    <TextField
                                        fullWidth
                                        name='Message-box'
                                        id="Messgae"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        required
                                    />
                                </div>
                                <div class="form-check d-flex justify-content-center mb-4">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form4Example4"
                                        checked
                                    />
                                    <label class="form-check-label" for="form4Example4">
                                        Send me a copy of this message
                                    </label>
                                </div>
                                <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Send</button>
                            </form>
                        </Col>
                        <Col className='justify-content-center'>
                            <div className='text-center'>
                                <div>
                                    <img src='contact.jpg' alt='contact' width='50%' height='50%' />
                                </div>
                                <h6 className='text-uppercase fw-bold mb-4 text-center'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    161-I, PSR Road, Near Lakshmi Hospital, Sivakasi, Tamil Nadu 626123, India.
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    rameshwhere@gmail.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> +91 70102 74691
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Contactus;