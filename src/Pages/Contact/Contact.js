import Header from './../../Components/Header/Header';
import BreadCrumb from './../../Components/BreadCrumb/BreadCrumb';
import Footer from './../../Components/Footer/Footer';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Contact.css'

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [accept, setAccept] = useState(false);

    function Submit(e){

        e.preventDefault();
        setAccept(true);

        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if( regEx.test(email) ){
            setMessage("");
        }else if( !regEx.test(email) ){
            setMessage("Email is not valid");
        }else if( email === "" ){
            setMessage("Email input is empty");
        }else{
            setMessage("");
        }
    }

    return(
        <>
        <Header />
        <BreadCrumb title="Contact Us" />
        <section className="contact">
            <Container>
                <div className="row contact-form">
                    <div className="col-lg-6 col-md-12">
                        <form onSubmit={Submit}>
                            <input type="text" placeholder="Your Name"
                            value={name}
                            onChange={ (e)=> setName(e.target.value) }
                            />
                            {name === "" && accept && (<p className='error'>Your Name Is Requird</p>)}

                            <input type="email" placeholder="Email"
                            value={email}
                            onChange={ (e)=> setEmail(e.target.value) }
                            />
                            <p className='error'>{message}</p>

                            <input type="text" placeholder="Phone Numbers" />
                            <select>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                            <textarea placeholder="Type Message"></textarea>
                            <button type="submit" className="org-btn w-100">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form-info">
                            <h4>Contact Us For Any Informations</h4>
                            <span><i className="fa-solid fa-map-location-dot"></i> Location</span>
                            <div className="break-line"></div>
                            <h6>2005 Stokes Isle Apt. 896, <br/> Venaville 10010, USA</h6>
                            <span><i className="fa-regular fa-address-card"></i> Email & Phone</span>
                            <div className="break-line"></div>
                            <p>info@yourdomain.com</p>
                            <p>(+68) 120034509</p>
                            <span><i className="fa-solid fa-globe"></i> Follow Us</span>
                            <div className="break-line"></div>
                            <ul className="social-media">
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-linkedin"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <Footer />
        </>
        
    )
}
export default Contact;