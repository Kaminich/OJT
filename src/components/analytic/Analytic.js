import React from 'react';
import './Analytic.css'
import { useTheme } from '../../context/ThemeContext';
import Dawn from './Dawn';

const Analytic = () => {
    const { mode } = useTheme();

    return (
        <div className={`analytic ${mode === 'light' ? 'light' : ''}`}>
            <div className="analytic-data">
                <p className={`analytic-data-text-1 ${mode === 'light' ? 'light' : ''}`}>90%</p>
                <p className={`analytic-data-text-2 ${mode === 'light' ? 'light' : ''}`}>Job Success Score on Upwork</p>
            </div>
            <div className="analytic-svg">
                <Dawn color={mode === 'dark' ? '#C8FEC7' : '#64C661'} />
            </div>
            <div className="analytic-data">
                <p className={`analytic-data-text-1 ${mode === 'light' ? 'light' : ''}`}>{'>25.000'}</p>
                <p className={`analytic-data-text-2 ${mode === 'light' ? 'light' : ''}`}>Duplicates on Figma Community</p>
            </div>
            <div className="analytic-svg">
                <Dawn color={mode === 'dark' ? '#C8FEC7' : '#64C661'} />
            </div>
            <div className="analytic-data">
                <p className={`analytic-data-text-1 ${mode === 'light' ? 'light' : ''}`}>{'>2K'}</p>
                <p className={`analytic-data-text-2 ${mode === 'light' ? 'light' : ''}`}>In Finished Works</p>
            </div>

        </div>
    )
}

export default Analytic;