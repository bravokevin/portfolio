import React from 'react'

type Item = {
    id: number;
    image: string;
    title: string;
    category: string;
}


const WorksItems = (props) => {
    const { id, image, title, category } = props.item;
    return (
        <div className="work__card" key={id}>
            <img src={image} alt="" className="work__img" />
            <h3 className="work__title">{title}</h3>
            {/* <span className="work__category">{category}</span> */}
            <a href="" className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorksItems