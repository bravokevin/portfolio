import React from 'react'
import Image1 from '../../assets/testimonial1.png';
import Image3 from '../../assets/testimonial2.png';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css'

const data = [
    {
        id: 1,
        image: Image1,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment:
            "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
        id: 2,
        image: Image3,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment:
            "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
];


const Testimonials = () => {
    return (

        <section className="testimonials container section">
            <h2 className="section__title">
                Clients & Reviews
            </h2>
            <span className="section__subtitle">Subtitle</span>
            <Swiper className="testimonial__container"
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
                        slidesPerView: 2,
                        spaceBetween: 48
                    }
                }}
            >
                {data.map(({ id, image, title, subtitle, comment }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="" className="testimonial__img"/>
                            <h3 className="testimonials__title">{title}</h3>
                            {/* <span className="subtitle">{subtitle}</span> */}
                            <p className="testimonial__description">{comment}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials;