import React from 'react'
import Image1 from '../../assets/work-1.svg';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';
import Blogs from './Blogs';
import './blog.css'

// call the hashnode api to retreive the blogs
const blogsInfo = [{
    image: Image1,
    title: "asdfadfadf"
}]

const Blog = () => {
    return (
        <section className="blog section" id="blog">
            <h2 className="section__title">Articles</h2>
            <span className="section__subtitle">My most recent texts</span>
            <Blogs />
        </section>
    )
}

export default Blog