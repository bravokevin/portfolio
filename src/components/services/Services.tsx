import React, { useState } from 'react'
import "./services.css"
import Image1 from "../../assets/work-1.svg"
import Image2 from "../../assets/work-1.svg"
import Image3 from "../../assets/work-1.svg"

const servicesContent = [
    {
        id: 1,
        icon: '-web-grid',
        title: "Smart contract development",
        modalTitle: "Smart contract developer",
        description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
        id: 2,
        icon: '-arrow',
        title: "Blockchain Developer.",
        modalTitle: "Smart contrac",
        description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
        id: 3,
        icon: '-edit',
        title: "Backend developer.",
        modalTitle: "Smart contrac",
        description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
];


const servicesModal = [{ description: '', index: 1 }]


const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index: 0 | 1) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">What I have done</span>
            <div className="services__container container grid">
                {servicesContent.map(({ title, id, icon, modalTitle, description }) => {
                    return (
                        <div className="services__content" key={id}>
                            <i className={`uil uil${icon} services__icon`}></i>
                            <h3 className="services__title">{title}</h3>

                            <span className="services__button" onClick={() => toggleTab(1)}>View more <i className="uil uil-arrow-right services__buton-icon"></i></span>

                            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close" ></i>
                                    <h3 className="services__modal-title">{modalTitle}</h3>
                                    <p className="services__modal-description">{description}</p>
                                    <ul className="services__modal-services grid">
                                        {servicesModal.map(({ description, index}) => {
                                            return (
                                                <li className="services__modal-service" key={index}>
                                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                                    <p className="services__modal-info">{description}</p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </section >
    )
}

export default Services