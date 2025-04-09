"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSwiper = ({ testimonials }) => {
  return (
    <div className="testimonial-swiper-wrapper">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination]}
        className="testimonial-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-description">
                <p>{item.description}</p>
              </div>
              <div className="testimonial-author">
                <Image
                  src={item.image}
                  alt={item.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h4>{item.author}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="testimonial-controls">
        
        <div className="custom-nav-buttons">
          <button className="custom-prev">
            <Image
              src={"/assets/img/left.svg"}
              alt="left"
              width={15}
              height={10}
            />
          </button>
          <div className="custom-pagination" />
          <button className="custom-next">
            
            <Image
              src={"/assets/img/right.svg"}
              alt="left"
              width={15}
              height={10}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
