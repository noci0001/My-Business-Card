import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Main() {
    return (
        <div className="Main"> 
            <section className="basicInfo">
                <h1 id="name">Samuel Nocita</h1>
                <h2 id="title">Frontend Engineer</h2>
                <h3 id="mail">noci0001@hz.nl</h3>
            </section>
            <section className="linksBtn">
                <button id="mailBtn" className="btnEl"><a href="mailto:noci0001@hz.nl" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-thin fa-envelope" /><h3>Email</h3></a></button>
                <button id="dinBtn" className="btnEl"><a href="https://www.linkedin.com/in/samuelnocita/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin" /><h3>LinkedIn</h3></a></button>
            </section>
            <section className="Description">
                <h1>About</h1>
                <h3>Tech savvy team player specialized in <span className="highlighted"> front-end engineering </span> with a particular 
                    interest in the latest cutting-edge technologies. Striving to continue advancing my skillset, <br></br>
                    I am always looking for new challenges.</h3>
                <h1>Skills</h1>
                <h3>I am fluent in the following coding languages and frameworks:</h3>
            </section>
        </div>
    )
}