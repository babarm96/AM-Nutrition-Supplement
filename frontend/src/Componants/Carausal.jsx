// import React, { useState } from "react";
// import { Carousel, Button } from "react-bootstrap";
// import "./Carausal.css"; // Updated CSS with fixes

// const Carausal = () => {
//   const slides = [
//     {
//       id: 1,
//       bgImage: "./assets2/bg1.jpeg",
//       productImage: "./assets2/prr1.png",
//       title: "Exclusive Offer on Product 1",
//       description: "Get 30% OFF on your first purchase. Limited time deal!",
//     },
//     {
//       id: 2,
//       bgImage: "./assets2/bg2.jpeg",
//       productImage: "./assets2/pr2.jpg",
//       title: "New Arrivals - Product 2",
//       description: "Experience premium quality at the best price!",
//     },
//     {
//       id: 3,
//       bgImage: "./assets2/bg3.jpeg",
//       productImage: "./assets2/pr3.jpeg",
//       title: "Limited Stock - Product 3",
//       description: "Hurry! Only a few left in stock. Order now!",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <Carousel
//       fade
//       interval={3000}
//       wrap={true}
//       className="custom-carousel"
//       onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
//     >
//       {slides.map((slide, index) => (
//         <Carousel.Item
//           key={slide.id}
//           style={{
//             backgroundImage: `url(${slide.bgImage})`,
//           }}
//           className={`carousel-item ${
//             index === activeIndex ? "active-slide" : ""
//           }`}
//         >
//           {/* Content Wrapper */}
//           <div className="carousel-content bg-transparent">
//             {/* Centered Product Card */}
//             <div className="product-card bg-transparent d-flex">
//               {/* Left Side - Product Info */}
//               <div className="left-content">
//                 <h2 className="product-title ">{slide.title}</h2>
//                 <p className="product-description">{slide.description}</p>
//                 <Button className="buy-now-btn ">Buy Now</Button>
//               </div>

//               {/* Right Side - Product Image */}
//               <div className="right-content">
//                 <div className=""><img
//                   src={slide.productImage}
//                   alt="Product"
//                   className="product-image"
//                 />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default Carausal;





import React, { useState, useEffect } from "react";
import "./Carausal.css"; // Keeping your custom CSS

const Carausal = () => {
  const slides = [
    {
      id: 1,
      bgImage: "./assets2/bg1.jpeg",
      productImage: "./assets2/prr1.png",
      title: "Exclusive Offer on Product 1",
      description: "Get 30% OFF on your first purchase. Limited time deal!",
    },
    {
      id: 2,
      bgImage: "./assets2/bg2.jpeg",
      productImage: "./assets2/pr2.jpg",
      title: "New Arrivals - Product 2",
      description: "Experience premium quality at the best price!",
    },
    {
      id: 3,
      bgImage: "./assets2/bg3.jpeg",
      productImage: "./assets2/pr3.jpeg",
      title: "Limited Stock - Product 3",
      description: "Hurry! Only a few left in stock. Order now!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      id="customCarousel"
      className="carousel slide custom-carousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          >
            {/* Content Wrapper */}
            <div className="carousel-content">
              {/* Centered Product Card */}
              <div className="product-card d-flex">
                {/* Left Side - Product Info */}
                <div className="left-content">
                  <h2 className="product-title">{slide.title}</h2>
                  <p className="product-description">{slide.description}</p>
                  <button className="buy-now-btn">Buy Now</button>
                </div>

                {/* Right Side - Product Image */}
                <div className="right-content">
                  <img
                    src={slide.productImage}
                    alt="Product"
                    className="product-image"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="prev"
        onClick={() =>
          setActiveIndex(
            activeIndex === 0 ? slides.length - 1 : activeIndex - 1
          )
        }
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="next"
        onClick={() =>
          setActiveIndex(
            activeIndex === slides.length - 1 ? 0 : activeIndex + 1
          )
        }
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carausal;
