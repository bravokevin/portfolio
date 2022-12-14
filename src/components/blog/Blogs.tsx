import React from 'react'
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

    <Swiper className="blog__container container grid"
      modules={[Pagination]}
      spaceBetween={24}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      breakpoints={{
        567: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 48
        }
      }}
    >
      {articles.map((item) => {
        return (
          <SwiperSlide>
            <BlogsItems item={item} key={item.id} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Blogs