import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../Style/ReviewSwiper.css";

const reviews = [
  { image: "/assets2/review1.png" },
  { image: "/assets2/review2.png" },
  { image: "/assets2/review1.png" },
  { image: "/assets2/review2.png" },
  { image: "/assets2/review1.png" },
  { image: "/assets2/review2.png" },

];

const ReviewSwiper = () => {
  return (
    <div className="container my-5 position-relative">
      <h3 className="text-center fw-bold mb-4">What Our Clients Say</h3>

      {/* Custom Navigation Arrows */}
      <button id="review-prev" className="swiper-button custom-prev">
        <i className="bi bi-arrow-left-circle-fill"></i>
      </button>
      <button id="review-next" className="swiper-button custom-next">
        <i className="bi bi-arrow-right-circle-fill"></i>
      </button>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={{ prevEl: "#review-prev", nextEl: "#review-next" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="card review-card p-3">
              <img
                src={review.image}
                alt={`Review ${index + 1}`}
                className="img-fluid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSwiper;
