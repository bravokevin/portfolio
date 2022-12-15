import React, {useState} from 'react'
import "./header.css"

const NAV_ITEMS = [{
    name: 'Home',
    link: '#home',
    icon: 'estate',
    id: 1
},
{
    name: 'About',
    link: '#about',
    icon: 'user',
    id: 2

},
{
    name: 'Skills',
    link: '#skills',
    icon: '',
    id: 3
},
{
    name: 'Services',
    link: '#services',
    icon: 'briefcase-alt',
    id: 4
},

{
    name: 'Blog',
    link: 'https://kevdevto.hashnode.dev/',
    icon: 'file-alt',
    id: 5
},

{
    name: 'Portfolio',
    link: '#portfolio',
    icon: 'scenery',
    id: 6
},
{
    name: 'Contact',
    link: '#contact',
    icon: 'message',
    id: 7
},

]

const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) {
            header!.classList.add("scroll-header");
        }
        else { header!.classList.remove("scroll-header") }

    })
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")


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