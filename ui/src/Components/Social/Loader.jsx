import React, { useState, useEffect } from 'react';
const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div> 
            {loading && (
                <div className="loader-container">
                    <div className="loader-bar"></div>
                </div>
            )}
        </div>
    );
};

export default Loader;
