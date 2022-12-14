import React from 'react'

const toolsList1 = [
    {skill: "Docker", level: "Intermediate", index:1},
    {skill: "Power BI", level: "Advanced", index:2},
    {skill: "Git/Github", level: "Advanced", index:3},
    {skill: "IPFS", level: "Advanced", index:4},
    {skill: "Alchemy/Infura", level: "Advanced", index:5},
];

const toolsList2 = [
    {skill: "Fleex", level: "Advanced", index:6},
    {skill: "Tenderly", level: "Advanced", index:7},
    {skill: "Tally", level: "Advanced", index:8},
    {skill: "Open Zeppelin", level: "Advanced", index:9},
]

const Tools = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools</h3>

            <div className="skills__box">

                <div className="skills__group">
                    {toolsList1.map(({skill, level, index}) => {
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
                    {toolsList2.map(({skill, level, index}) => {
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

export default Tools;