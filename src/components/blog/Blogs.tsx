import BlogsItems from './BlogsItem'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const query = `
query GetUserArticles($page: Int!) {
    user(username: "KevBTO") {
        publication {
            posts(page: $page) {
                title
                brief
                slug
                coverImage
            }
        }
    }
}
`;

const variables = { page: 0 }
const data = await fetch("https://api.hashnode.com/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query,
    variables,
  }),
});


const results = await data.json();
const articles = results.data.user.publication.posts;


const Blogs = () => {
  return (
    <Swiper className="blog__container"
    modules={[Pagination]}
    spaceBetween={24}
    loop={true}
    grabCursor={true}
    pagination={{ clickable: true }}
    breakpoints ={{
        567: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 48
        }
    }}
    >
      {articles.map((item) => {
        return (
          <SwiperSlide className="blog__card" key={item.id}>
            <img src={item.coverImage} alt="" className="blog__img" />
            <h3 className="blog__title">{item.title}</h3>
            <a href={`https://kevdevto.hashnode.dev/${item.slug}`} className="blog__button" target="blank">
              Read <i className="bx bx-right-arrow-alt blog__button-icon"></i>
            </a>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Blogs