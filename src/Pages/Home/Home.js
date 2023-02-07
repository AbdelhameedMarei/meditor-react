import { Container } from "react-bootstrap";
import './Home.css';
import headerImg from '../../Assets/header-img.png';
import waveBg from '../../Assets/wave-bg.png';
import box1 from '../../Assets/anim-img-1.png';
import box2 from '../../Assets/anim-img-2.png';
import box3 from '../../Assets/anim-img-3.png';
import box4 from '../../Assets/anim-img-4.png';

function Home(){
    return(
        <header>
            <Container>
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <h5>We Provide All Health Care Solution</h5>
                        <h1>Protect Your Health And Take Care To Of Your Health</h1>
                        <button className="org-btn">Read More</button>
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <div className="header-img">
                            <img src={headerImg} alt="header img" />
                        </div>
                        <div className="header-boxes">
                            <img src={box1} alt="box1" className="box1" />
                            <img src={box2} alt="box2" className="box2" />
                            <img src={box3} alt="box3" className="box3" />
                            <img src={box4} alt="box4" className="box4" />
                        </div>
                    </div>
                </div>
            </Container>
            <div className="header-wave">
                <img src={waveBg} alt="header wave" />
            </div>
        </header>
    )
}
export default Home;