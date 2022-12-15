import Blogs from './Blogs';
import './blog.css'

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