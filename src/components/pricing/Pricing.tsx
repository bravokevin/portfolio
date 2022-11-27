import React from 'react'
import Image1 from '../../assets/price-1.svg';
import Image2 from '../../assets/price-2.svg';
import Image3 from '../../assets/price-23.svg';

const pricingItems = [
    {
        title: "",
        plan: "",
        img: "",
        support: "",
        link: "",
        htmlexcept: ""
    },
        {
        title: "",
        plan: "",
        img: "",
        support: "",
        link: "",
        htmlexcep: "best"
    }
]

export const Pricing = () => {
    return (
        <section className="pricing container section">
            <h2 className="section__title"></h2>
            <div className="pricing__container grid">
                {pricingItems.map(({ title, plan, img, support, link, htmlexcept}) => {
                    return (
                        <div className= {`pricing__item ${htmlexcept}`}>
                            <span className="recommended">Recomended</span>
                            <img src={img} alt="" className="pricing__img" />
                            <h3 className="pricing__plan">{plan}</h3>
                            <p className="pricing__title">{title}</p>
                            <p className="pricing__support">{support}</p>
                            <h3 className="price">
                                <em>$</em> 9 <span>Month</span>
                            </h3>
                            <a href={link} className="btn">Get Started</a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
