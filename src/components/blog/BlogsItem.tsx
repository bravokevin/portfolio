import React from "react";
const BlogsItems = (props) => {
    const { slug, coverImage, title} = props.item;
    return (
        <div className="blog__card">
            <img src={coverImage} alt="" className="blog__img" />
            <h3 className="blog__title">{title}</h3>
            <a href={`https://kevdevto.hashnode.dev/${slug}`} className="blog__button" target="blank">
                Read <i className="bx bx-right-arrow-alt blog__button-icon"></i>
            </a>
        </div>
    )
}

export default BlogsItems