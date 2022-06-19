import React from 'react'
import images from '../../constants/images';
import './header.css';
import {  AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

function Header() {
    const handleClick = (e) => {
        switch (e.detail) {
          case 1:
            console.log("click");
            break;
          case 2:
            window.open("https://i.kym-cdn.com/entries/icons/original/000/039/393/cover2.jpg");
            break;
          case 3:
            console.log("triple click");
            break;
          default:
            return;
        }
      };

    return (
    <div className='app__header'>
        <h1> Samuel Nocita </h1>
        <div className='app__profilePic'>
            <a href='mailto:write@samuelnocita.com'><AiOutlineMail fontSize={40}/></a>
            <img src={images.profilePicround} alt="Profile" onClick={handleClick} id='proPic'/>
            <a href='https://www.linkedin.com/in/samuelnocita/'><AiOutlineLinkedin fontSize={40}/></a>
        </div>
        
    </div>
    );
}

export default Header;