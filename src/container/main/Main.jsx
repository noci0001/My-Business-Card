import React from "react"
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { GiSpiderWeb } from 'react-icons/gi';
import './main.css';

const Main = () => (
        <div className="Main"> 
            <section className="basicInfo">
                <h2 id="title">Frontend Engineer</h2>
                <h3><a href="mailto:write@samuelnocita.com">write@samuelnocita.com</a></h3>
                {/* <button type="button" className="button"><a href="https://www.samuelnocita.com" style={{color: 'black', fontSize:27, justifyContent:'center', fontFamily: 'Source Code Pro'}}> Visit My website</a></button> */}
                <button class="button-36" role="button"><h1>Visit my website</h1></button>
                
            </section>

            <section className="description">
                <h1 classname='indentation'style={{textAlign: 'left', fontWeight: '800', padding: ' 0 2rem'}}>About</h1>
                <h3 style={{textAlign: 'left', fontWeight: '300', padding: ' 0 4rem' }}>I am a tech savvy specialized in <span className="highlighted"> front-end software engineering </span> with a particular 
                    interest in the latest Javascript libraries and frameworks such as React.js and Next.js. 
                    <br/>
                    <br/>
                    Striving to continue advancing my skillset, 
                    <br/>
                    I am always looking for new challenges.</h3>
                <h1 style={{textAlign: 'left', padding: ' 0 2rem'}} className='indentation'>Skills</h1>
                <h3 style={{textAlign: 'left', fontWeight: '300', padding: ' 0 4rem'}}>I am fluent in the following coding languages and frameworks:</h3>
            </section>
        </div>
);

export default Main;