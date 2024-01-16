import { useTheme } from '../../context/ThemeContext';
import ProgressCircle from './ProgressCircle';
import './Skill.css'

const Skill = () => {
    const { mode } = useTheme();

    return (
        <div className='skill'>
            <div className='skill-items'>
                <div className='skill-item'>
                    <ProgressCircle color={mode === 'dark' ? 'white' : 'black'} />
                    <div className='skill-item-text'>
                        <h3 className='skill-item-title'>UX Design</h3>
                        <p className='skill-item-content'>UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.</p>
                    </div>
                </div>
                <div className='skill-item'>
                    <ProgressCircle color={mode === 'dark' ? 'white' : 'black'} />
                    <div className='skill-item-text'>
                        <h3 className='skill-item-title'>UI Design</h3>
                        <p className='skill-item-content'>UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.</p>
                    </div>
                </div>
            </div>
            <div className='skill-items'>
                <div className='skill-item'>
                    <ProgressCircle color={mode === 'dark' ? 'white' : 'black'} />
                    <div className='skill-item-text'>
                        <h3 className='skill-item-title'>Information Architecture</h3>
                        <p className='skill-item-content'>Information architecture is the design of the structure and organization of content on a website or digital product to make it easy for users to navigate and understand.</p>
                    </div>
                </div>
                <div className='skill-item'>
                    <ProgressCircle color={mode === 'dark' ? 'white' : 'black'} />
                    <div className='skill-item-text'>
                        <h3 className='skill-item-title'>Figma</h3>
                        <p className='skill-item-content'>Figma is a cloud-based design tool that allows teams to collaborate on the design process in real time. It offers a range of features for designing, prototyping, and sharing user interfaces.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;