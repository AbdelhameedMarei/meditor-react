import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            { showTopBtn && (
                <div className='scroll-to-top' onClick={goToTop} >
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                )
            }
        </>
    )
}
export default ScrollToTop;