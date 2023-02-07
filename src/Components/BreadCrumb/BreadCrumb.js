import { Link } from "react-router-dom";
import './BreadCrumb.css';


function BreadCrumb(props){
    return(
        <div className="bread-crumb">
            <h2>{props.title}</h2>
            <div className="bread-content">
                <span><Link to="/">
                    <i className="fa fa-home"></i> Home </Link>
                / {props.title} 
                </span>
            </div>
        </div>
    )
}
export default BreadCrumb;