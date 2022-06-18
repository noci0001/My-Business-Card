import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skills() {
    return (
        <div>
            <div className="Skills">
                <section className="skillsEL">
                <FontAwesomeIcon icon="fa-brands fa-html5" />
                <FontAwesomeIcon icon="fa-brands fa-css3" />
                <FontAwesomeIcon icon="fa-brands fa-react" />
                </section>
            </div>
                <div className="Main Description DescriptionLanguageSkills">
                    <h1 id="btnEl">Ah also...</h1>
                    <h3>On top of the languages spoken by <span className="highlighted">computers</span>, I also love the ones spoken by humans </h3>
                    <h1>I am comfortable communicating in:</h1>
                        <ul>
                            <li>English</li>
                            <li>Italian</li>
                            <li>French</li>
                            <li>Spanish</li>
                            <li>and I am currently learning German</li>
                        </ul>
                </div>
        </div>
    )
}