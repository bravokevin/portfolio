import { useState, useEffect } from 'react'
import { getListData } from '../portfolio/portfolioData';
import "./resume.css"

interface ResumeObj {
    name: string;
    description: string;
    start_date: string;
    due_date: string;
}
const Resume = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index: 0 | 1) => {
        setToggleState(index);
    }
    const [resumeContent, setresumeContent] = useState<ResumeObj[]>([]);

    useEffect(() => {
        getListData("900800048703")
            .then(response => {
                setresumeContent(response);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
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
                        onClick={() => toggleTab(1)}>
                        <i className={toggleState === 1 ? "uil uil-graduation-cap resume__active resume__icon" : "uil uil-graduation-cap  resume__icon"}></i>
                        Education
                    </div>

                    <div className={
                        toggleState === 0 ?
                            "resume__button resume__active button--flex" :
                            "resume__button button--flex"
                    }
                        onClick={() => toggleTab(0)}>
                        <i className={toggleState === 0 ? "uil uil-briefcase-alt resume__active resume__icon" : "uil uil-briefcase-alt  resume__icon"} ></i>
                        Experience
                    </div>
                </div>

                {resumeContent[0] === undefined ? <></> :
                    <div className="resume__sections">
                        <div className={toggleState === 1 ? "resume__content resume__content-active" : "resume__content "}>

                            <div className="resume__data">
                                <div>
                                    <h3 className="resume__title">{resumeContent[0].name}</h3>
                                    <span className="resume__subtitle">{resumeContent[0].description}</span>
                                    <div className="resume__calendar">
                                        <i className="uil uil-calendar-alt"></i>{" "}{`${new Date(Number(resumeContent[0].start_date)).toLocaleDateString()} - ${new Date(Number(resumeContent[0].due_date)).toLocaleDateString()}`}
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

                                    <h3 className="resume__title">{resumeContent[1].name}</h3>
                                    <span className="resume__subtitle">{resumeContent[1].description}</span>
                                    <div className="resume__calendar">
                                        <i className="uil uil-calendar-alt"></i> {" "}{`${new Date(Number(resumeContent[1].start_date)).toLocaleDateString()} - ${new Date(Number(resumeContent[1].due_date)).toLocaleDateString()}`}
                                    </div>

                                </div>
                            </div>

                            <div className="resume__data">
                                <div>
                                    <h3 className="resume__title">{resumeContent[2].name}</h3>
                                    <span className="resume__subtitle">{resumeContent[2].description}</span>
                                    <div className="resume__calendar">
                                        <i className="uil uil-calendar-alt"></i>{" "}{`${new Date(Number(resumeContent[2].start_date)).toLocaleDateString()} - ${new Date(Number(resumeContent[2].due_date)).toLocaleDateString()}`}
                                    </div>
                                </div>

                                <div>
                                    <span className="resume__rounder"></span>
                                    <span className="resume__line"></span>
                                </div>
                            </div>

                        </div>

                        <div className={toggleState === 0 ? "resume__content resume__content-active" : "resume__content "}>

                            <div className="resume__data">
                                <div>
                                    <h3 className="resume__title">{resumeContent[3].name}</h3>
                                    <span className="resume__subtitle">{resumeContent[3].description}</span>
                                    <div className="resume__calendar">
                                        <i className="uil uil-calendar-alt"></i>{" "}{`${new Date(Number(resumeContent[3].start_date)).toLocaleDateString()} - ${new Date(Number(resumeContent[3].due_date)).toLocaleDateString()}`}
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
                                <h3 className="resume__title">{resumeContent[4].name}</h3>
                                <span className="resume__subtitle">{resumeContent[4].description}</span>
                                <div className="resume__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}{`${new Date(Number(resumeContent[4].start_date)).toLocaleDateString()} - ${new Date(Number(resumeContent[4].due_date)).toLocaleDateString()}`}
                                </div>
                            </div>
                        </div>
                        <div className="resume__data">
                            <div>
                                <h3 className="resume__title">{resumeContent[5].name}</h3>
                                <span className="resume__subtitle">{resumeContent[5].description}</span>
                                <div className="resume__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}{`${new Date(Number(resumeContent[5].start_date)).toLocaleDateString()} - ${new Date(Number(resumeContent[5].due_date)).toLocaleDateString()}`}
                                </div>
                            </div>


                            <div>
                                <span className="resume__rounder"></span>
                                <span className="resume__line"></span>
                            </div>
                        </div>

                        </div>
                    </div>
                }

            </div>
        </section>
    )
}

export default Resume;
