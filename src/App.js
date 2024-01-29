import Navigation from './navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './footer';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* HERO SECTION*/}
      <div className='hero-section'>
        <div id="overlay">
          <div id="text" className='header header--shadow' data-text='Akilan InfoTech'>Akilan InfoTech</div>
          <div id="text1" className='typewriter'>
            Welcome to Akilan Infotech
          </div>
        </div>
      </div>
      {/* END OF HERO SECTION*/}
      {/* ABOUT US SECTION */}
      <div className='about-us mt-5'>
        <Container>
          <Row className='about-row'>
            <Col xs={12} md={12} lg={6} sm={12}>
              <img id='about-image' src='image1.jpg' alt='about-us' width='80%' height='60%' style={{ textAlign: 'center', marginLeft: '25px' }} />
            </Col>
            <Col xs={12} md={12} lg={6} sm={12} className='content-about'>
              <h1 id='heading'>ABOUT US</h1>
              <p id='about-content'><span style={{ fontWeight: 'bolder', fontSize: '20px', color: 'Red', fontStyle: 'italic' }}>AKILAN INFO TECH </span>Technologies is a premier information technology services provider specialized in implementing Tally.ERP 9 Application. We have been rated as a Associate Sales and Solutions Partner of Tally Solutions Pvt. Ltd, Bangalore, who are the creators of Tally.ERP 9 Software Application. Tally.ERP 9, being well known and popular for its user friendliness, robust technology platform, feature richness and highly customizable capability, is been used not only in India, but across 100 countries worldwide, in almost all business Verticals.
                We do an in-depth analysis of all the business aspects of our prospects and suggest the best way to use Tally.ERP 9. Led by a team of committed professionals with a combined expertise of 11 plus years in the industry, AKILAN INFO TECH Technologies has pioneered innovative and groundbreaking solutions based on Tally.ERP 9 Platform and TDL (Tally Definition Language). We exercise best-practices tailored not only to cutting costs for our clients but also delivering technically-sound solutions that are user-friendly and easy to learn, operate and maintain.</p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* END OF ABOUT US SECTION*/}
      {/* WHY US SECTION*/}
      <div className='why-us mt-5'>
        <Container>
          <h1 id='heading'>WHY US</h1>
          <Row className='mt-5 justify-content-center'>
            <Col xs={12} lg={3} md={6}>
              <div className='why-us-content card'>
                <img className='why-us-img' src='quality.png' alt='quality' width='50%' height='50%'></img>
                <h6 className='text-center mt-3'>Quality</h6>
              </div>
            </Col>
            <Col xs={12} lg={3} md={6}>
              <div className='why-us-content card'>
                <img className='why-us-img' src='quality.png' alt='transparency' width='50%' height='50%'></img>
                <h6 className='text-center mt-3'>Transparency</h6>
              </div>
            </Col>
            <Col xs={12} lg={3} md={6}>
              <div className='why-us-content card'>
                <img className='why-us-img' src='integrity.png' alt='integrity' width='50%' height='50%'></img>
                <h6 className='text-center mt-3'>Integrity</h6>
              </div>
            </Col>
            <Col xs={12} lg={3} md={6}>
              <div className='why-us-content card'>
                <img className='why-us-img' src='satisfaction.png' alt='satisfaction' width='40%' height='50%'></img>
                <h6 className='text-center mt-3'>Satisfaction</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*SERVICE SECTION */}
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
      {/* ENQUIRY SECTION*/}
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
      {/*Footer */}
      <Footer />
    </div>
  );
}

export default App;
