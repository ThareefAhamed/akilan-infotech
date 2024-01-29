import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

function Navigation() {
    return (
        <Navbar expand="lg" data-bs-theme="dark" className="nav-bar" sticky="top">
            <Container>
                <Navbar.Brand href="/" className='centered-navbar'>Akilan Info Tech</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle-button" />
                <Navbar.Collapse id="basic-navbar-nav" className='ms-5'>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='ms-3'>Home</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown" className='ms-3'>
                            <NavDropdown.Item href="#action/3.1">Tally Prime</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Tally Prime Server
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/services" className='ms-3'>Services</Nav.Link>
                        <Nav.Link href="/training" className='ms-3'>Training</Nav.Link>
                        <Nav.Link href="/customize" className='ms-3'>Customization</Nav.Link>
                        <Nav.Link href="/contactus" className='ms-3'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;