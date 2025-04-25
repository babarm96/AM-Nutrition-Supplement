import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../Style/Carausal.css";

const Carausal = () => {
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  const slides = [
    { img: "/assets2/banner1.png", path: "/cards/protein" },
    { img: "/assets2/banner2.jpg", path: "/cards/vitamins" },
    { img: "/assets2/banner3.jpg", path: "/cards/workout" },
    { img: "/assets2/banner4.jpg", path: "/cards/weight-gainer" },
    { img: "/assets2/banner5.jpg", path: "/cards/combo" },
    { img: "/assets2/banner6.jpg", path: "/cards/energy" },
    { img: "/assets2/banner7.jpg", path: "/cards/immunity" },
  ];

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <div className="ns-carousel-wrapper" style={{ position: "relative" }}>
      <button ref={prevRef} className="ns-carousel-button ns-carousel-prev">‹</button>
      <button ref={nextRef} className="ns-carousel-button ns-carousel-next">›</button>

      {navigationReady && (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="ns-carousel-swiper"
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
      )}
    </div>
  );
};

export default Carausal;
