import React from 'react';
import './Portfolio.css'
import { useTheme } from '../../context/ThemeContext';

const Portfolio = () => {
    const { mode } = useTheme();

    return (
        <div className='portfolio'>
            <div className='portfolio-items'>
                <div className={`portfolio-item ${mode === 'light' ? 'light' : ''}`}>
                    <img src='./Frame 7.png' alt='f7' className='portfolio-item-img'/>
                    <h4 className='portfolio-title'>Mi Portal U</h4>
                    <div className='portfolio-tags'>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>UX Design</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>University</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>JavaScript</p>
                        </div>
                    </div>
                    <button className='portfolio-button'>Figma Community</button>
                </div>

                <div className={`portfolio-item ${mode === 'light' ? 'light' : ''}`}>
                    <img src='./Frame 7.png' alt='f7' className='portfolio-item-img'/>
                    <h4 className='portfolio-title'>Mi Portal U</h4>
                    <div className='portfolio-tags'>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>UX Design</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>University</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>JavaScript</p>
                        </div>
                    </div>
                    <button className='portfolio-button'>Figma Community</button>
                </div>

                <div className={`portfolio-item ${mode === 'light' ? 'light' : ''}`}>
                    <img src='./Frame 7.png' alt='f7' className='portfolio-item-img'/>
                    <h4 className='portfolio-title'>Mi Portal U</h4>
                    <div className='portfolio-tags'>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>UX Design</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>University</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>JavaScript</p>
                        </div>
                    </div>
                    <button className='portfolio-button'>Figma Community</button>
                </div>

                <div className={`portfolio-item ${mode === 'light' ? 'light' : ''}`}>
                    <img src='./Frame 7.png' alt='f7' className='portfolio-item-img'/>
                    <h4 className='portfolio-title'>Mi Portal U</h4>
                    <div className='portfolio-tags'>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>UX Design</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>University</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>JavaScript</p>
                        </div>
                    </div>
                    <button className='portfolio-button'>Figma Community</button>
                </div>
            </div>

            <div className='portfolio-items'>
                <div className={`portfolio-item ${mode === 'light' ? 'light' : ''}`}>
                    <img src='./Frame 7.png' alt='f7' className='portfolio-item-img'/>
                    <h4 className='portfolio-title'>Mi Portal U</h4>
                    <div className='portfolio-tags'>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>UX Design</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>University</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>JavaScript</p>
                        </div>
                    </div>
                    <button className='portfolio-button'>Figma Community</button>
                </div>

                <div className={`portfolio-item ${mode === 'light' ? 'light' : ''}`}>
                    <img src='./Frame 7.png' alt='f7' className='portfolio-item-img'/>
                    <h4 className='portfolio-title'>Mi Portal U</h4>
                    <div className='portfolio-tags'>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>UX Design</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>University</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>JavaScript</p>
                        </div>
                    </div>
                    <button className='portfolio-button'>Figma Community</button>
                </div>

                <div className={`portfolio-item ${mode === 'light' ? 'light' : ''}`}>
                    <img src='./Frame 7.png' alt='f7' className='portfolio-item-img'/>
                    <h4 className='portfolio-title'>Mi Portal U</h4>
                    <div className='portfolio-tags'>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>UX Design</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>University</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>JavaScript</p>
                        </div>
                    </div>
                    <button className='portfolio-button'>Figma Community</button>
                </div>

                <div className={`portfolio-item ${mode === 'light' ? 'light' : ''}`}>
                    <img src='./Frame 7.png' alt='f7' className='portfolio-item-img'/>
                    <h4 className='portfolio-title'>Mi Portal U</h4>
                    <div className='portfolio-tags'>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>UX Design</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>University</p>
                        </div>
                        <div className='portfolio-tag'>
                            <p className='portfolio-tag-text'>JavaScript</p>
                        </div>
                    </div>
                    <button className='portfolio-button'>Figma Community</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;