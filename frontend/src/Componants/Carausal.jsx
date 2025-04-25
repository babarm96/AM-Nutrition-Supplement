import React, { useState, useEffect } from "react";
import "../Style/Carausal.css";

const Carausal = () => {
  const slides = [
    {
      id: 1,
      bgImage: "/assets2/bg1.jpeg",
      productImage: "/assets2/prr1.png",
      title: "Exclusive Offer on Product 1",
      description: "Get 30% OFF on your first purchase. Limited time deal!",
    },
    {
      id: 2,
      bgImage: "/assets2/bg2.jpeg",
      productImage: "/assets2/pr2.jpg",
      title: "New Arrivals - Product 2",
      description: "Experience premium quality at the best price!",
    },
    {
      id: 3,
      bgImage: "/assets2/bg3.jpeg",
      productImage: "/assets2/pr3.jpeg",
      title: "Limited Stock - Product 3",
      description: "Hurry! Only a few left in stock. Order now!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div id="gymCarousel" className="carousel slide gym-carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="gym-carousel-content">
              <div className="gym-product-card d-flex">
                <div className="gym-left-content">
                  <h2 className="gym-product-title">{slide.title}</h2>
                  <p className="gym-product-description">{slide.description}</p>
                  <button className="gym-buy-now-btn">Buy Now</button>
                </div>
                <div className="gym-right-content">
                  <img
                    src={slide.productImage}
                    alt="Product"
                    className="gym-product-image"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carausal;
