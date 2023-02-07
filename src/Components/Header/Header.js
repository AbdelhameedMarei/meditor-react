import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../Assets/logo.png';
import './Header.css';

function Header(){
    return(
        <Navbar expand="lg" className='navbar'>
        <Container>
            <Navbar.Brand>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className='active'>
                    <Link to="/">Home</Link>
                </Nav.Link>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <Link to="/about">About Us</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to="/team">Our Team</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to="/faq">FAQ's</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to="/book">Booking</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to="/error">Error 404</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to="/login">Login / Register</Link>
                </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <Link to="/service">Service</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action">
                    <Link to="/services-detail">Services Detail</Link>
                </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="blog" id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <Link to="/blog">Blogs</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action">
                    <Link to="/blog-details">Blog Details</Link>
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="contact-us-link">
                    <Link to="/contact">Contact Us</Link>
                </Nav.Link>
                <Nav.Link href="#search" className='search-icon'>
                    <i className='fa-solid fa-search'></i>
                </Nav.Link>
                <Nav.Link className='contact-btn'>
                    <Link to="/contact">
                        <button>Contact US <i className='fa-solid fa-chevron-right'></i></button>
                    </Link>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default Header;