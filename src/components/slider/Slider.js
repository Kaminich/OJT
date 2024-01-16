import { useTheme } from '../../context/ThemeContext';
import Figma from './Figma';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import MediumLogo from './MediumLogo';
import Portal from './Portal';
import './Slider.css'
import Telegram from './Telegram';
import Twitter from './Twitter';

const Slider = () => {
    const { mode } = useTheme();

    return (
        <div className='slider'>
            <div className='slider-left'>
                <div className='slider-left-content'>
                    <div className='slider-left-content-text'>
                        <p className='slider-left-content-text-1'>PRODUCT DESIGNER</p>
                        <p className='slider-left-content-text-2'>CRISTIAN MUÑOZ</p>
                    </div>
                    <div className='slider-left-content-icons'>
                        <Instagram color={mode === 'dark' ? 'white' : 'black'} />
                        <Figma color={mode === 'dark' ? 'white' : 'black'} />
                        <Linkedin colorBg={mode === 'dark' ? 'white' : 'black'} colorTx={mode === 'dark' ? 'black' : 'white'}/>
                        <Twitter color={mode === 'dark' ? 'white' : 'black'} />
                        <Telegram color={mode === 'dark' ? 'white' : 'black'} />
                        <MediumLogo color={mode === 'dark' ? 'white' : 'black'} />
                    </div>
                    <div className='slider-left-content-button'>
                        <p className='slider-button-content-text'>Download Curriculum Vitae <span className='slider-button-content-text-icon'><img src='./arrow-down.svg' alt='ad' /></span></p>
                    </div>
                </div>
                <div className='slider-left-svg'>
                    <Portal color={mode === 'dark' ? 'white' : 'black'} />
                </div>
            </div>
            <div className='slider-right'>
                <img src='./Escultures.png' alt='es' />
            </div>
        </div>
    )
}

export default Slider;