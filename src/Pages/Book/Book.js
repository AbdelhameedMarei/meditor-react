import { Container } from "react-bootstrap";
import './Book.css';
import bookImg from '../../Assets/appointment.png';
import women from '../../Assets/women.png';
import bookingImg1 from '../../Assets/booking-img-1.png';
import bookingImg2 from '../../Assets/booking-img-2.png';
import bookingImg3 from '../../Assets/booking-img-3.png';
import bookingImg4 from '../../Assets/booking-img-4.png';
import box7 from '../../Assets/anim-img-7.png';
import box8 from '../../Assets/anim-img-8.png';

function Book(){
    return(
        <section className="book">
            <Container>
                <di className="row">
                    <di className="col-lg-6 col-md-6 book-border">
                        <div className="book-content">
                                <h2>Book Appointment</h2>
                            <form>
                                <select>
                                    <option>Selecty Department</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <select>
                                    <option>Selecty Doctor</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <input type="text" placeholder="Your Name" required />
                                <input type="number" placeholder="Phone Numbers" required />
                                <input type="date" placeholder="Phone Numbers" required />
                                <button className="org-btn" type="submit">Appointment Now</button>
                            </form>
                        </div>
                    </di>
                    <di className="col-lg-6 col-md-6">
                        <div className="book-img">
                            <img src={bookImg} alt="booking img" />
                            <img src={women} alt="booking img" className="women-img" />
                            <img src={bookingImg1} alt="booking img" className="book-img-1" />
                            <img src={bookingImg2} alt="booking img" className="book-img-2" />
                            <img src={bookingImg3} alt="booking img" className="book-img-3" />
                            <img src={bookingImg4} alt="booking img" className="book-img-4" />
                            <img src={box7} alt="animation img" className="org-shape" />
                            <img src={box8} alt="animation img" className="wave-shape" />
                        </div>
                    </di>
                </di>
            </Container>
        </section>
    )
}
export default Book;