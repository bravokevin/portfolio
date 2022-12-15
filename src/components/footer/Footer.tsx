import React from 'react'
import './footer.css'
const footerLinks = [
    { link: "#about", name: "About", index: 1 },
    { link: "#portfolio", name: "Projects", index: 2 },
    { link: "https://kevdevto.hashnode.dev/", name: "Blog", index: 3 }
]

const socialIcons = [
    // { icon: "fa-brands fa-instagram", link: "" },
    { icon: "bx bxl-twitter", link: "https://twitter.com/_BravoK", index:1},
    { icon: "bx bxl-github", link: "https://github.com/mustafinho/", index: 2},
    { icon: "bx bxl-linkedin", link: "https://www.linkedin.com/in/bravokevin/", index: 3}
];
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Kevin Bravo</h1>
                <ul className="footer__list">
                    {footerLinks.map(({ link, name, index}) => {
                        return (
                            <li key={index}>
                                <a href={link} className="footer__link" >{name}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="footer__socials">
                    {
                        socialIcons.map(({ icon, link, index}) => {
                            return (
                                <a href={link} className="footer__social-link" target="_blank" key={index}>
                                    <i className={icon}></i>
                                </a>
                            )
                        })
                    }

                </div>
                <span className="footer__copy">Kevin Bravo. 2022 &#169; All rigths reserved</span>

            </div>
        </footer>
    )
}

export default Footer