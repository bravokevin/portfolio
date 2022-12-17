import React from 'react'
import Card from './Card';

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

                    {Frameworks1.map((info) => {
                        return <Card {...info} />
                    })}
                </div>
                <div className="skills__group">
                    {Frameworks2.map((info) => {
                        return <Card {...info} />

                    })}
                </div>
            </div>
        </div>
    )
}

export default Frameworks;