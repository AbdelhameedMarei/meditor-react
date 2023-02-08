import { Container } from "react-bootstrap";
import {  Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from './../../Assets/logo.png';
import animImg8 from './../../Assets/anim-img-8.png';
import animImg9 from './../../Assets/anim-img-9.png';
import footerWave from './../../Assets/footer-waves.png';
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <img src={footerWave} alt="wave img" className="foot-wave" />
            <Container>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <Navbar.Brand href="#">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </Navbar.Brand>
                        <p className="footer-p">
                        Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
                        </p>
                        <div className="footer-contact-us d-flex align-items-center">
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                <h6>Contact Us</h6>
                                <span>+20 106 258 8401</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4>Quick Links</h4>
                        <ul className="quick-links">
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Services</Link></li>
                            <li><Link to="/">Booking</Link></li>
                            <li><Link to="/">Faq's</Link></li>
                            <li><Link to="/">Blogs</Link></li>
                            <li><Link to="/">Out Team</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 x">
                        <h4>Our Service</h4>
                        <ul className="quick-links">
                            <li><Link to="/">Dental Care</Link></li>
                            <li><Link to="/">Cardiac Clinic</Link></li>
                            <li><Link to="/">Massege Therapy</Link></li>
                            <li><Link to="/">Cardiology</Link></li>
                            <li><Link to="/">Precise Diagnosis</Link></li>
                            <li><Link to="/">Abmbulance Services</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4>Subcribe</h4>
                        <form>
                            <input type="email" placeholder="Email Address" required />
                            <button type="submit" className="org-btn w-100">Subscribe Now</button>
                        </form>
                        <ul className="d-flex align-items-center social-icon">
                            <li>
                                <Link to="/">
                                    <i className="fa fa-facebook"></i> 
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-twitter"></i> 
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-instagram"></i> 
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-linkedin"></i> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="end-footer text-center pt-4 border-top mt-4">
                    <p>
                        Copyright &copy; 2023 Design &amp; Developed by
                        <span>
                            <Link to="https://www.facebook.com/abdelhameedmarei" target="_blank">Marei</Link>
                        </span>
                    </p>
                </div>
                <div className="anim-img">
                    <img src={animImg9} alt="animation" className="footer-Img-1" />
                    <img src={animImg8} alt="animation" className="footer-Img-2" />
                </div>
            </Container>
        </footer>
    )
}
export default Footer;