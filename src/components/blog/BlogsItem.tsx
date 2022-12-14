import React from "react";
const BlogsItems = (props) => {
    const { title, brief, link, coverImage } = props.item;
    return (
        <div className="blog__card">
            <img src={coverImage} alt="" className="blog__img" />
            <h3 className="blog__title">{title}</h3>
            <a href={link} className="blog__button">
                Read <i className="bx bx-right-arrow-alt blog__button-icon"></i>
            </a>
        </div>
    )
}

export default BlogsItems