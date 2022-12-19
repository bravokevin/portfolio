import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

interface Article {
  title: string;
  slug: string
  coverImage: string
}

const query = `
query GetUserArticles($page: Int!) {
    user(username: "KevBTO") {
        publication {
            posts(page: $page) {
                title
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
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
      }}
    >
      {articles.map((item: Article) => {
        return (
          <SwiperSlide className="blog__card">
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