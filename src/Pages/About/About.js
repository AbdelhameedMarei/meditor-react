import { Container } from "react-bootstrap";
import aboutImg1 from './../../Assets/about-01.jpg';
import aboutImg2 from './../../Assets/about-02.jpg';
import aboutImg3 from './../../Assets/about-03.jpg';
import box2 from '../../Assets/anim-img-2.png';
import box6 from '../../Assets/anim-img-6.png';
import './About.css';

function About(){
    return(
            <section className="about">
            <Container>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={aboutImg1} alt="about-img" className="about-img1" />
                            <img src={aboutImg2} alt="about-img" className="about-img2" />
                            <img src={aboutImg3} alt="about-img" className="about-img3" />
                            <span className="about-exp">
                                <h2>20</h2>
                                <p>Year Experience</p>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-info">
                            <div className="main-title">
                                <h6 className="para-title">About Us</h6>
                                <h2 className="head-title">The Great Place Of Medical Hospital Center</h2>
                            </div>
                            <p className="main-p">We provide the special tips and advice's of heath care treatment and high level of best technology involve in the our hospital.</p>
                            <div className="about-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="about-box-content about-box-1">
                                            <i className="fa-solid fa-truck-medical"></i>
                                            <span>Emergency Help</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-box-content about-box-2">
                                        <i className="fa-solid fa-bed-pulse"></i>
                                            <span>Qualified Doctors</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-box-content about-box-3">
                                        <i className="fa-solid fa-kit-medical"></i>
                                            <span>Best Professional</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-box-content about-box-4">
                                            <i className="fa-solid fa-syringe"></i>
                                            <span>Medical Treatment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button>Read More</button>
                            <img src={box2} alt="box2" className="box-anim-2" />
                            <img src={box6} alt="box6" className="box-anim-6" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default About;