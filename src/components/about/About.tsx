import React from 'react'
import Image from "../../assets/avatar-2.svg"
import "./about.css"
import AboutBox from './AboutBox';


function About() {
    const skills = ["Solidity", "Cairo", "Python", "Typescript", "Docker",];
    return (
        <section className="about container section" id="about">
            <h2 className="section_title">Know me</h2>
            <div className="about__container grid">
                <img src={Image} alt="" className="about_img" />


                <div className="about__data grid">
                    <div className="about__ing">
                        <p className="about__description">
                            I'm Kevin, smart contract developer from Caracas, Venezuela. Higly interest in ZK-proof, tokenomics and security, with a great understanding of solidity and the ethereum EVM.
                        </p>
                        <a href="" className='btn'>See my CV</a>
                    </div>

                    <div className="about__skills grid">
                        {skills.map((i) => {
                            return (
                                < div className="skills__data" >
                                    <div className="skills_titles">
                                        <h3 className="skills_name">{i}</h3>
                                        <span className="skills_number"></span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage"></span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>



            </div >
            <AboutBox />
        </section >
    )
}

export default About