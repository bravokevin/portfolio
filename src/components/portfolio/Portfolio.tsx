import { useState, useEffect } from 'react'
import { getPortfolioContent, PortfolioObject } from './portfolioData'
import "./portfolio.css"


const Portfolio = () => {
  const [portfolioContent, setPortfolioContent] = useState<PortfolioObject[]>([]);
  const [toggleState, setToggleState] = useState('0');
  const toggleTab = (index: string) => {
    setToggleState(index);
  }

  useEffect(() => {
    getPortfolioContent()
      .then(response => {
        setPortfolioContent(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">What I have done</span>
      <div className="services__container container grid">

        {portfolioContent.map((item) => {
          const { id, title, description, modalTitle, link, icon, demoLink } = item;
          return (
            <div className="services__content" key={id}>
              <div>
                <i className={`uil uil${icon} services__icon`}></i>
                <h3 className="services__title">{title}</h3>
                <span className="services__subtitle">{modalTitle}</span>
              </div>
              <span className="services__button" onClick={() => toggleTab(id)}>View more<i className="uil uil-arrow-right services__button-icon"></i></span>
              <div className={toggleState === id ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                  <i onClick={() => toggleTab('0')} className="uil uil-times services__modal-close" ></i>
                  <h3 className="services__modal-title">{modalTitle}</h3>
                  <p className="services__modal-description">{description}</p>
                  <a href={link} target="blank" className="services__modal-link">Read detailed explanation <i className="uil uil-arrow-right services__button-icon2"></i></a>
                  <a href={demoLink} target="blank" className="button__demo-link">{'  '}Demo<i className="uil uil-arrow-right services__button-icon2"></i></a>
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