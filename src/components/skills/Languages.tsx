import React from 'react'

const languages1 = [
    { skill: "Solidity", level: "Advanced", index: 1 },
    { skill: "Typescript", level: "Advanced", index: 3},
    { skill: "R", level: "Basic", index: 4 },
];

const languages2 = [
    { skill: "SQL", level: "Intermediate", index: 5 },
    { skill: "Python", level: "Indtermediate", index: 6 },
    { skill: "Cairo", level: "Indtermediate", index: 7 },
];


const Languages = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Languages</h3>
            <div className="skills__box">
                <div className="skills__group">

                    {languages1.map(({ skill, level, index }) => {
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
                <div className="skills__group">

                    {languages2.map(({ skill, level, index }) => {
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

export default Languages;