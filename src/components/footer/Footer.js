import './Footer.css'
import Logo from '../navbar/Logo'
import Banner from '../banner/Banner';

const Footer = () => {
    return (
        <div className='footer-and-banner'>
            <div className='footer-banner'>
                <Banner />
            </div>
            <div className='footer flex'>
                <div className='footer-logo'><Logo color={'white'} width={35} height={36} fontSize={30} /></div>
                <ul className='footer-ul flex'>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Skills</li>
                    <li>About Me</li>
                </ul>
            </div>
        </div>

    )
}

export default Footer;