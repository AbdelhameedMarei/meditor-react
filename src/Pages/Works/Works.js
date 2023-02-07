import { Container } from "react-bootstrap";
import './Works.css';

function Works(){
    return(
        <section className="works">
            <Container>
                <div className="main-title">
                    <h6 className="para-title">Working Process</h6>
                    <h2 className="head-title">How we works?</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="work-box">
                            <h3>01</h3>
                            <h4>Make Appointmnet</h4>
                            <p className="main-p">It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <button>View More
                                <i className='fa-solid fa-chevron-right'></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="work-box active">
                            <h3>02</h3>
                            <h4>Make Appointmnet</h4>
                            <p className="main-p">It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <button>View More
                                <i className='fa-solid fa-chevron-right'></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="work-box last">
                            <h3>03</h3>
                            <h4>Registration</h4>
                            <p className="main-p">It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <button>View More
                                <i className='fa-solid fa-chevron-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Works;