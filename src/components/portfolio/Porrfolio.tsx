import React, { useState } from 'react'
import './portfolio.css'
import Menu from "./Menu"

const workFilters = ["Everything", "Creative", "Art", "Design", "Branding"]

export const Porrfolio = () => {
    const [items, setItems] = useState(Menu);

    const filterItem = (category: string) => {
        if (category === "Everything") {
            setItems(Menu)
        }
        else {
            const updatedItem = Menu.filter((e) => {
                return e.category === category;
            })
            setItems(updatedItem);
        }
    }
    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Projects</h2>
            <div className="work__filters">
                {workFilters.map(filter => {
                    return (
                        <span className="work__item" onClick={() => {
                            filterItem(filter)
                        }}>{filter}</span>
                    )
                })}
            </div>
            <div className="work__container grid">
                {items.map(({ id, image, title, category }) => {
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href="" className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}