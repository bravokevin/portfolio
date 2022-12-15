import { useState } from 'react'
import Data from './Data'
import "./resume.css"
const Resume = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index: 0 | 1) => {
        setToggleState(index);
    }

    return (
        <section className="resume section" id="resume">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My personal Jurney</span>

            <div className="resume__container container">

                <div className="resume__tabs">
                    <div className={
                        toggleState === 1 ?
                            "resume__button resume__active button--flex" :
                            "resume__button button--flex"
                    }
                    onClick={() =>toggleTab(1)}>
                        <i className={toggleState === 1 ? "uil uil-graduation-cap resume__active resume__icon" :"uil uil-graduation-cap  resume__icon"}></i>
                        Education
                    </div>

                    <div className={
                        toggleState === 0 ?
                            "resume__button resume__active button--flex" :
                            "resume__button button--flex"
                    }
                    onClick={() =>toggleTab(0)}>
                        <i className={toggleState === 0 ? "uil uil-briefcase-alt resume__active resume__icon" :"uil uil-briefcase-alt  resume__icon"} ></i>
                        Experience
                    </div>
                </div>


                <div className="resume__sections">
                    <div className={toggleState === 1 ? "resume__content resume__content-active" : "resume__content "}>

                        <div className="resume__data">
                            <div>
                                <h3 className="resume__title">ZK-Proof Bootcamp by Encode Club</h3>
                                <span className="resume__subtitle"></span>
                                <div className="resume__calendar">
                                    <i className="uil uil-calendar-alt"></i> 02/2022 -04/2022
                                </div>
                            </div>

                            <div>
                                <span className="resume__rounder"></span>
                                <span className="resume__line"></span>
                            </div>
                        </div>


                        <div className="resume__data">
                            <div></div>
                            <div>
                                <span className="resume__rounder"></span>
                                <span className="resume__line"></span>
                            </div>
                            <div>
                                <h3 className="resume__title"></h3>
                                <span className="resume__subtitle"></span>
                                <div className="resume__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 0 ? "resume__content resume__content-active" : "resume__content "}>

                        <div className="resume__data">
                            <div>
                                <h3 className="resume__title">Software Developer</h3>
                                <span className="resume__subtitle">Asociacion Venezolano Americana de la Amistad (AVAA) </span>
                                <div className="resume__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}10/2022 - 03/2022
                                </div>
                            </div>


                            <div>
                                <span className="resume__rounder"></span>
                                <span className="resume__line"></span>
                            </div>
                        </div>

{/* 
                        <div className="resume__data">
                            <div></div>
                            <div>
                                <span className="resume__rounder"></span>
                                <span className="resume__line"></span>
                            </div>
                            <div>
                                <h3 className="resume__title"></h3>
                                <span className="resume__subtitle"></span>
                                <div className="resume__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;
