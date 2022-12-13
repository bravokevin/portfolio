import React from 'react'

export const socialIcons = [
    // { icon: "fa-brands fa-instagram", link: "" },
    { icon: "uil uil-twitter", link: "https://twitter.com/_BravoK", index: 1 },
    { icon: "uil uil-github-alt", link: "https://github.com/mustafinho/", index: 2 },
    { icon: "uil uil-linkedin", link: "https://www.linkedin.com/in/bravokevin/", index: 3 }
];

export const Socials = () => {

    return (
        <div className="home__social">
            {
                socialIcons.map(({ icon, link, index }) => {
                    return (
                        <a href={link} className="home__social-icon" target="_blank" key={index}>
                            <i className={icon}></i>
                        </a>
                    )
                })
            }

        </div>
    )
}
