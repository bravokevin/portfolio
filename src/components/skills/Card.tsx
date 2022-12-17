import { Component } from "react";

interface CardProp {
    index: number;
    skill: string;
    level: string
}

const Card = ({index, skill, level}: CardProp) => {
    return (
        <div className="skills__data" key={index}>
            <i className="bx bx-badge-check"></i>
            <div className="">
                <h3 className="skills__name">{skill}</h3>
                <span className="skills__level">{level}</span>
            </div>
        </div>
    )
}

export default Card;