import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <div className="spinner"></div>
            <p className='loading-text'>Loading...</p>
        </div>
    );
};

export default Loading;
