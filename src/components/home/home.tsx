import React from 'react'
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from "./ScrollDown"
import Shapes from './Shapes';
import './home.css';

function home() {
    return (
        <section className='home container' id="home">
            <div className='intro'>
                <img src={Me} alt="" className='home__img' />
                <h1 className="home__name">Kevin Bravo</h1>
                <span className="home__education">Smart contract developer</span>
                <HeaderSocials />
                <a href="#contact" className="btn">Contact Me</a>
                <ScrollDown/>
            </div>
            <Shapes/>
        </section>
    )
}

export default home