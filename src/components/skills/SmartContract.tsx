import React from 'react'

const smartContractSkills = [
    {skill: "Solidity", level: "Advanced", index: 1},
    {skill: "Typescript", level: "Advanced", index:2},
    {skill: "Python", level: "Indtermediate", index: 3},
    {skill: "Cairo", level: "Indtermediate", index: 4},
];

const SmartContract = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Smart Contract Developer</h3>

            <div className="skills__box">

                <div className="skills__group">
                    {smartContractSkills.map(({skill, level, index}) => {
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

export default SmartContract