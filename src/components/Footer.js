import React from "react"

export default function Footer() {
    return (
        <div className="Footer">
            <section className="socialLinks">
                <img alt="Facebook link" src={ require("/Users/sam/Desktop/Software Engineering/Portfolio SE/my-business-card/src/assets/Facebook Icon.svg").default }/>
                <img alt="GitHub link" src={ require("/Users/sam/Desktop/Software Engineering/Portfolio SE/my-business-card/src/assets/GitHub Icon.svg").default }/>
                <a href="https://www.linkedin.com/in/samuelnocita/?trk=public-profile-join-page" target="_blank" rel="noreferrer"><img alt="LinkedIn link" src={ require("/Users/sam/Desktop/Software Engineering/Portfolio SE/my-business-card/src/assets/Linkedin Icon.svg").default }/></a>
            </section>
        </div>
    )
}