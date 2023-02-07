import { Container } from "react-bootstrap";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonial.css';
import testImg from '../../Assets/testimonial.png';
import test1 from '../../Assets/test-01.jpg';
import test2 from '../../Assets/test-02.jpg';
import test3 from '../../Assets/test-03.jpg';
import test4 from '../../Assets/test-04.jpg';
import test5 from '../../Assets/test-05.jpg';
import test6 from '../../Assets/test-06.jpg';

function Testimonial() {
    return (

        <section className="testimonial">
            <Container>
                <div className="main-title">
                    <h6 className="para-title">Testimonial</h6>
                    <h2 className="head-title">See What Are The Patients
                    Saying About us</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="testimonial-img">
                            <img src={testImg} alt="testimonial-img" />
                            <ul>
                                <li><img src={test1} alt="" className="test1" /></li>
                                <li><img src={test2} alt="" className="test2" /></li>
                                <li><img src={test3} alt="" className="test3" /></li>
                                <li><img src={test4} alt="" className="test4" /></li>
                                <li><img src={test5} alt="" className="test5" /></li>
                                <li><img src={test6} alt="" className="test6" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mt-5">
                    <Swiper className="swiper-container"
                        modules={[Navigation]}
                        spaceBetween={40}
                        slidesPerView={1}
                        navigation >
                        <SwiperSlide className="slider">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.
                            </p>
                            <h5>John Deo</h5>
                            <h6>Patient</h6>
                            <i className="fa-solid fa-quote-right"></i>
                            <i className="fa-solid fa-quote-left"></i>
                        </SwiperSlide>
                        <SwiperSlide className="slider">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.
                            </p>
                            <h5>John Deo</h5>
                            <h6>Patient</h6>
                            <i className="fa-solid fa-quote-right"></i>
                            <i className="fa-solid fa-quote-left"></i>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </Container>
        </section>

    )
}
export default Testimonial;