import React from 'react'

const frontendtSkills = [
    {skill: "React", level: "Intermediate", index:1},
    {skill: "Typescript", level: "Advanced", index:2},
];

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">

                <div className="skills__group">
                    {frontendtSkills.map(({skill, level, index}) => {
                        return (
                            <div className="skills__data" key={index}>
                                <i className="bx bx-badge-check"></i>
                                <div className="">
                                    <h3 className="skills__name">{skill}</h3>
                                    <span className="skills__level">{level}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        </div>
    )
}

export default Frontend