import { useTheme } from '../../context/ThemeContext';
import './Quote.css'

const Quote = () => {
    const { mode } = useTheme();

    return (
        <div className={`quote ${mode}`}>
            <h3 className='quote-name'>Kaleb Lechtenberg</h3>
            <p className='quote-content'>
                "Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."
            </p>
            <img src='./Shield 1.svg' alt='s1'/>
        </div>
    )
}

export default Quote;