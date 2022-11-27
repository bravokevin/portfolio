import React from 'react'

const socialIcons = [
    // { icon: "fa-brands fa-instagram", link: "" },
    { icon: "fa-brands fa-twitter", link: "https://twitter.com/_BravoK" },
    { icon: "fa-brands fa-github", link: "https://github.com/mustafinho/" },
    { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/bravokevin/" }
];

const HeaderSocials = () => {

    return (
        <div className="home__socials">
            {/* it repeats */}
            {
                socialIcons.map(({ icon, link }) => {
                    return (
                        <a href={link} className="home__social-link" target="_blank">
                            <i className={icon}></i>
                        </a>
                    )
                })
            }

        </div>
    )
}

export default HeaderSocials