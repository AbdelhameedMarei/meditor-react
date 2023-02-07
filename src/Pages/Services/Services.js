import { Container } from "react-bootstrap";
import './Services.css';

function Services(){
    return(
        <section className="services">
            <Container className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <div className="main-title">
                            <h6 className="para-title">Services</h6>
                            <h2 className="head-title">We Cover A Big Variety Of Medical Services</h2>
                        </div>
                        <p className="main-p mt-3">We provide the special tips and advice's of heath care treatment and high level of best.</p>
                        <button className="org-btn mt-4">All Services</button>
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <div className="blue-sec"></div>
                    </div>
                </div>
                <div className="row service-cards">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-card">
                            <div className="service-card-head">
                                <i className="fa-solid fa-truck-medical"></i>
                            </div>
                            <div className="service-card-body">
                                <h3>Emergency</h3>
                                <p className="main-p">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-card">
                            <div className="service-card-head">
                                <i className="fa-solid fa-stethoscope"></i>
                            </div>
                            <div className="service-card-body">
                                <h3>Diagnostics</h3>
                                <p className="main-p">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-card">
                            <div className="service-card-head">
                                <i className="fa-solid fa-pump-medical"></i>
                            </div>
                            <div className="service-card-body">
                                <h3>Treatment</h3>
                                <p className="main-p">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Services;