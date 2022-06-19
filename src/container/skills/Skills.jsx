import React from "react"
import { FaReact} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { ImHtmlFive2 } from 'react-icons/im';
import { IoLogoSass } from 'react-icons/io';

import './skills.css'

const Skills = () => (
        <div>
            <div className="skills">
                    <h1 className="language"><FaReact className='child' fontSize={60}/> React </h1>
                    
                    <h1 className="language"><SiNextdotjs className='child' fontSize={60}/> Next.js </h1>
                    
                    <h1 className="language"><FiFigma className='child' fontSize={60}/> Figma </h1>
                    
                    <h1 className="language"><ImHtmlFive2 className='child' fontSize={60}/> HTML5 </h1>
                    
                    <h1 className="language"><IoLogoSass className='child' fontSize={60}/> Sass </h1>
            </div>
        </div>
);

export default Skills;