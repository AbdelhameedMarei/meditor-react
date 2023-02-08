import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImg1 from './../../Assets/slider-img-1.jpg';
import sliderImg2 from './../../Assets/slider-img-2.jpg';
import sliderImg3 from './../../Assets/slider-img-3.jpg';
import sliderImg4 from './../../Assets/slider-img-4.jpg';
import sliderImgInfo1 from './../../Assets/test-01.jpg';
import sliderImgInfo2 from './../../Assets/test-02.jpg';
import sliderImgInfo3 from './../../Assets/test-03.jpg';
import sliderImgInfo4 from './../../Assets/test-04.jpg';
import 'swiper/css';
import './News.css';

function News() {
    return (
        <section className="news">
            <Container>
                <div className="main-title">
                    <h6 className="para-title">Latest News</h6>
                    <h2 className="head-title">Our Latest News</h2>
                </div>
                <Swiper
                    spaceBetween={30}
                    breakpoints={{
                        // when window width is >= 640px
                        400: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        992: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    <SwiperSlide className="news-content">
                        <div className="news-card">
                            <img src={sliderImg1} alt="slider-img" />
                            <div className="news-card-info">
                                <img src={sliderImgInfo1} alt="Slider info" />
                                <span>John deo</span>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    21 July 2021
                                </span>
                                <h5>
                                    <Link to="/">In this hospital there are special surgeon</Link>
                                </h5>
                                <button type="button">
                                    Read More
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="news-content">
                        <div className="news-card">
                            <img src={sliderImg2} alt="slider-img" />
                            <div className="news-card-info">
                                <img src={sliderImgInfo2} alt="Slider info" />
                                <span>Peter Packer</span>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    20 July 2021
                                </span>
                                <h5>
                                    <Link to="/">Can you get a diflucan prescription online?</Link>
                                </h5>
                                <button type="button">
                                    Read More
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="news-content">
                        <div className="news-card">
                            <img src={sliderImg3} alt="slider-img" />
                            <div className="news-card-info">
                                <img src={sliderImgInfo3} alt="Slider info" />
                                <span>Sonar Moyna</span>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    19 July 2021
                                </span>
                                <h5>
                                    <Link to="/">Why Is Skin Surgeon Considered Underrated</Link>
                                </h5>
                                <button type="button">
                                    Read More
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="news-content">
                        <div className="news-card">
                            <img src={sliderImg4} alt="slider-img" />
                            <div className="news-card-info">
                                <img src={sliderImgInfo4} alt="Slider info" />
                                <span>Kalina Mollika</span>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    28 July 2021
                                </span>
                                <h5>
                                    <Link to="/">Dental Care for Women is very important</Link>
                                </h5>
                                <button type="button">
                                    Read More
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    )
}
export default News;