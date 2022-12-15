import React, { useState } from 'react'
import "./portfolio.css"

const portfolioContent = [
    {
        id: 1,
        icon: '-web-grid',
        title: "Crowdfy",
        modalTitle: "A descentralize crowdfunding application.",
        description: "Crowdfy Is a decentralized on-chain crowdfunding application deployed on polygon, avalanche and ethereum testnet networks… It allows any user with an account to create and fund campaigns on the protocol. Also, has capabilities to do yield farming with the funds collected and allow to found campaigns in any token whitelisted on the protocol."
    },
    {
        id: 2,
        icon: '-arrow',
        title: "Starklend",
        modalTitle: "A decentralized lending and borrowing protocol",
        description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing eliaenean commodo ligula eget.",
    },
    {
        id: 3,
        icon: '-edit',
        title: "ArepaChain",
        modalTitle: "A PoS blockchain Protocol",
        description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing eliaenean commodo ligula eget.",
    },
    {
        id: 4,
        icon: '-edit',
        title: "Projects done in my first job",
        modalTitle: "A PoS blockchain Protocol",
        description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing eliaenean commodo ligula eget.",
    },
        {
        id: 5,
        icon: '-edit',
        title: "Dexser",
        modalTitle: "A Descentralize exchange aggregator",
        description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing eliaenean commodo ligula eget.",
    },
];
const Portfolio = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index: number) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">What I have done</span>
            <div className="services__container container grid">
                {portfolioContent.map(({ title, id, icon, modalTitle, description }) => {
                    return (
                        <div className="services__content" key={id}>
                            <div>
                                <i className={`uil uil${icon} services__icon`}></i>
                                <h3 className="services__title">{title}</h3>
                            </div>
                            <span className="services__button" onClick={() => toggleTab(id)}>View more<i className="uil uil-arrow-right services__button-icon"></i></span>

                            <div className={toggleState === id ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close" ></i>
                                    <h3 className="services__modal-title">{modalTitle}</h3>
                                    <p className="services__modal-description">{description}</p>
                                    <a href=""  target="blank" className="services__modal-link">Read detailed explanation <i className="uil uil-arrow-right services__button-icon2"></i></a>
                                    {/* <ul className="services__modal-services grid">
                                        {servicesModal.map(({ description, index}) => {
                                            return (
                                                <li className="services__modal-service" key={index}>
                                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                                    <p className="services__modal-info">{description}</p>
                                                </li>
                                            )
                                        })}
                                    </ul> */}
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </section >
    )
}

export default Portfolio;