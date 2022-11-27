import React from 'react'
import Data from './Data'
import Card from './Card'
import "./resume.css"
export const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>
            <div className="resume__container grid">
                <div className="timeline grid">
                    {Data.map(({ icon, title, year, desc, id, category }) => {
                        if (category === "education") {
                            return (
                                <Card
                                    key={id}
                                    icon={icon}
                                    title={title}
                                    year={year}
                                    desc={desc}
                                />
                            )
                        }
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map(({ icon, title, year, desc, id, category }) => {
                        if (category === "experience") {
                            return (
                                <Card
                                    key={id}
                                    icon={icon}
                                    title={title}
                                    year={year}
                                    desc={desc}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}
