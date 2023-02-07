import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
    return (
        <section className="error-page">
            <div className='error-page-content'>
                <h2>404</h2>
                <p>Page Not Found</p>
                <Link to="/">
                    <button type='button'>Back To Home</button>
                </Link>
            </div>
        </section>
    )
}
export default Error;
