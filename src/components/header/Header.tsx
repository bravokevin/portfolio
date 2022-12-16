import {useState} from 'react'

import NAV_ITEMS from './HeaderData';

import "./header.css"

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) {
            header!.classList.add("scroll-header");
        }
        else { header!.classList.remove("scroll-header") }
    });

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Bravo</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">

                        {NAV_ITEMS.map(({ name, link, id, icon }) => {
                            return (
                                <li className="nav__item" key={id}>
                                    <a href={link} onClick={() =>{setActiveNav(link)}} className={activeNav === link ? "nav__link active-link" : "nav__link"}>
                                        <i className={`uil uil-${icon} nav__icon`}></i> {name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() =>{showMenu(!Toggle)}}></i>
                </div>
                <div className="nav__toggle" onClick={() =>{showMenu(!Toggle)}}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header >
    )
}

export default Header