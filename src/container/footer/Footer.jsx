import React from "react"
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineFacebook } from 'react-icons/ai';
import { FcMenu } from 'react-icons/fc';
import './footer.css';


function Footer() {

    const [on, setOn] = React.useState(false)

    function toggleState(){
        setOn(prevOn => !prevOn)
    }

    return (
        <div className="footer">
                <button id='menu' className="button1" onClick={toggleState}><FcMenu id='icon' fontSize={27}/></button>
            <section className={ on === true ? 'socialLinks' : 'socialLinks-open' }>
                <a href="https://www.linkedin.com/in/samuelnocita/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <AiOutlineLinkedin fontSize={50}/> </a>
                <a href="https://www.linkedin.com/in/samuelnocita/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <AiOutlineGithub fontSize={50}/> </a>
                <a href="https://www.linkedin.com/in/samuelnocita/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <AiOutlineFacebook fontSize={50}/> </a>
            </section>
        </div>
    );
}
export default Footer;