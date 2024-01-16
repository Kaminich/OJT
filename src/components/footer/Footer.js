import './Footer.css' 
import Logo from '../navbar/Logo'

const Footer = () => {
    return (
        <div className='footer flex'>
            <Logo color={'white'} width={35} height={36} fontSize={30}/>
            <ul className='footer-ul flex'>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Skills</li>
                <li>About Me</li>
            </ul>
        </div>
    )
}

export default Footer;