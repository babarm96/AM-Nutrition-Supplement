import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carausal.css"; // Your custom styles

const Carausal = () => {
  const navigate = useNavigate();

  const slides = [
    { img: "/assets2/banner1.png", path: "/cards/protein" },
    { img: "/assets2/banner2.jpg", path: "/cards/vitamins" },
    { img: "/assets2/banner3.jpg", path: "/cards/workout" },
    { img: "/assets2/banner4.jpg", path: "/cards/weight-gainer" },
    { img: "/assets2/banner5.jpg", path: "/cards/combo" },
    { img: "/assets2/banner6.jpg", path: "/cards/energy" },
    { img: "/assets2/banner7.jpg", path: "/cards/immunity" },
  ];

  return (
    <div className="carousel-wrapper" style={{ position: "relative" }}>
      {/* Custom Navigation Buttons */}
      <button id="swiper-prev" className="swiper-button prev-button">‹</button>
      <button id="swiper-next" className="swiper-button next-button">›</button>

      {/* Swiper Component */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{ prevEl: "#swiper-prev", nextEl: "#swiper-next" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="bestSellingSwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={slide.img}
              alt={`Slide ${idx + 1}`}
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
              onClick={() => navigate(slide.path)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carausal;
