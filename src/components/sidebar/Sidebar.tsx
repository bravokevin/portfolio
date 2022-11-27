import React, { useState } from 'react'
import "./sidebar.css"
import Logo from "../../assets/logo.svg"

const iconsName = [
  { icon: "icon-home", link: "#home" },
  { icon: "icon-user-following", link: "#about" },
  { icon: "icon-briefcase", link: "#services" },
  { icon: "icon-graduation", link: "#resume" },
  { icon: "icon-layers", link: "#portfolio" },
  { icon: "icon-note", link: "#blog" },
  { icon: "icon-bubble", link: "#contact" }
];
const Sidebar = () => {

  const [toggle, showNav] = useState(false)
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className='nav__logo'>
          <img src={Logo} alt="" />
        </a>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">

              {iconsName.map(({ icon, link }) => {
                return (
                  <li className="nav__item">
                    <a href={link} className="nav__link">
                      <i className={icon}></i>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
        <div className="nav_footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
        <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() =>{
          showNav(!toggle)
        }}>
          <i className="icon-menu"></i>
        </div>
      </aside>
    </>

  )
}

export default Sidebar