import React from 'react'

function AboutBox() {
    const achivements = [
        { number: "198", icon: "icon-fire", title: "Projects completed" },
        { number: "5670", icon: "icon-cup", title: "Cups of coffe" },
        { number: "427", icon: "icon-people", title: "Satisfied Clients" },
        { number: "35", icon: "icon-badge", title: "Nominiees winner" },

    ]
    return (
        <div className="about__boxes grid">

            {/* if we want to make this section in the future, it starts in  1:20 */}
            {/* It repeats */}
            {achivements.map(({ number, icon, title }) => {
                return (
                    <div className="about__box">
                        <i className={`about__icon ${icon}`}></i>
                        <div>
                            <h3 className="about__title">{number}</h3>
                            <span className="about__subtitle">{title}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutBox