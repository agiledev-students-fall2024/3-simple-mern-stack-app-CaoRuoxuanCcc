import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const AboutPage = () => {
    const [aboutInfo, setAboutInfo] = useState(null);
    const [error, setError] = useState('');
  
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about_us`)
        .then((response) => {
          setAboutInfo(response.data);
        })
        .catch((err) => {
          const errMsg = err.response?.data?.error || err.message;
          setError(errMsg);
        });
    }, []);
  
    return (
      <div>
        {error ? (
          <p>Error: {error}</p>
        ) : aboutInfo ? (
          <div>
            <h1>Hi! my name is Ruoxuan Cao</h1>
            <h2>This is my last year in New York University and I am planning to take a master either in DS or BA</h2>
            <img src={aboutInfo.imageUrl} alt={aboutInfo.name} />
          </div>
        ) : null} {/* Render nothing if loading */}
      </div>
    );
  };
  
  export default AboutPage;