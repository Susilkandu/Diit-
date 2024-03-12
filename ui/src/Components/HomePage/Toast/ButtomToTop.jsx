import React from 'react';

function ScrollToTopButton() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={handleScrollToTop} className="btn btn-primary"  id="btnBackToTop" 
        style={{ position: 'fixed', bottom: '40px', right: '20px' }}>
            <i className="bi bi-arrow-up-circle-fill"></i>
        </button>
    );
}

function ButtomToTop() {
    return (
        <div style={{zIndex:'99999'}}>
            <ScrollToTopButton />
        </div>
    );
}

export default ButtomToTop;
