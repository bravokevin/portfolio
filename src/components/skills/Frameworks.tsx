import React from 'react'

const Frameworks1 = [
    { skill: "Brownie", level: "Advanced", index: 1 },
    { skill: "Hardhat", level: "Advanced", index: 2 },
    { skill: "Protostar", level: "Basic", index: 3 },
];

const Frameworks2 = [
    { skill: "React", level: "Intermediate", index: 4 },
    { skill: "Truffle", level: "Indtermediate", index: 5 },
    { skill: "Nile", level: "Indtermediate", index: 6 },
];


const Frameworks = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frameworks</h3>
            <div className="skills__box">
                <div className="skills__group">

                    {Frameworks1.map(({ skill, level, index }) => {
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

                    {Frameworks2.map(({ skill, level, index }) => {
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

export default Frameworks;