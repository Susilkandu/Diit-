import React, { useState, useEffect } from 'react';

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  return (
    <div className={`preloader-container ${loading ? 'active' : ''}`}>
      <div className="youtube-loader">
        <div className="spinner red"></div>
        <div className="spinner blue"></div>
      </div>
    </div>
  );
}

export default Preloader;
