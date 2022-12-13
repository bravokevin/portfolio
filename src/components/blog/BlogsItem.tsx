import React from "react";
const BlogsItems = (props) => {
    const { id, image, title, category } = props.item;
    return (
        <div className="blog__card" key={id}>
            <img src={image} alt="" className="blog__img" />
            <h3 className="blog__title">{title}</h3>
            {/* <span className="blog__category">{category}</span> */}
            <a href="" className="blog__button">
                Demo <i className="bx bx-right-arrow-alt blog__button-icon"></i>
            </a>
        </div>
    )
}

export default BlogsItems