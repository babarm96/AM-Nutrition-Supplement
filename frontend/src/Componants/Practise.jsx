// import React from "react";
// import { Carousel, Button } from "react-bootstrap";
// import "./Practise.css";              

// const ProductCarousel = () => {
//   const slides = [
//     {
//       id: 1,
//       bgImage: "./assets2/bg1.jpeg",
//       productImage: "./assets2/pr1.jpeg",
//       title: "Exclusive Offer on Product 1",
//       description: "Get 30% OFF on your first purchase. Limited time deal!",
//     },
//     {
//       id: 2,
//       bgImage: "./assets2/bg2.jpeg",
//       productImage: "./assets2/pr2.jpeg",
//       title: "New Arrivals - Product 2",
//       description: "Experience premium quality at the best price!",
//     },
//     {
//       id: 3,
//       bgImage: "https://via.placeholder.com/1200x600/7fff7f/333?text=Background+3",
//       productImage: "https://via.placeholder.com/300x300/ffffff/000?text=Product+3",
//       title: "Limited Stock - Product 3",
//       description: "Hurry! Only a few left in stock. Order now!",
//     },
//   ];

//   return (
//     <Carousel fade interval={3000} className="custom-carousel">
//       {slides.map((slide) => (
//         <Carousel.Item key={slide.id} style={{ backgroundImage: `url(${slide.bgImage})` }}>
//           <div className="carousel-content">
//             <div className="left-content">
//               <h2>{slide.title}</h2>
//               <p>{slide.description}</p>
//               <Button className="buy-now-btn">Buy Now</Button>
//             </div>
//             <div className="right-content">
//               <img src={slide.productImage} alt="Product" className="product-image" />
//             </div>
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductCarousel;

// import React, { useState } from "react";
// import { Carousel, Button } from "react-bootstrap";
// // import "./styles.css"; // Import custom CSS
// import "./Practise.css"; 

// const ProductCarousel = () => {
//   const slides = [
//     {
//       id: 1,
//       bgImage: "./assets2/bg1.jpeg",
//       productImage: "./assets2/pr1.jpeg",
//       title: "Exclusive Offer on Product 1",
//       description: "Get 30% OFF on your first purchase. Limited time deal!",
//     },
//     {
//       id: 2,
//       bgImage: "./assets2/bg2.jpeg",
//       productImage: "./assets2/pr2.jpeg",
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
//       className="custom-carousel"
//       onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
//     >
//       {slides.map((slide, index) => (
//         <Carousel.Item 
//           key={slide.id} 
//           style={{ backgroundImage: `url(${slide.bgImage})` }}
//           className={index === activeIndex ? "active-slide" : ""}
//         >
//           <div className="carousel-content">
//             <div className="left-content">
//               <h2>{slide.title}</h2>
//               <p>{slide.description}</p>
//               <Button className="buy-now-btn">Buy Now</Button>
//             </div>
//             <div className="right-content">
//               <img 
//                 src={slide.productImage} 
//                 alt="Product" 
//                 className="product-image animated-zoom" 
//               />
//             </div>
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductCarousel;

import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Practise.css";  

const ProductCarousel = () => {
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

  return (
    <Carousel 
      fade 
      interval={3000} 
      wrap={true}  // Enables continuous looping
      className="custom-carousel"
      onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
    >
      {slides.map((slide, index) => (
        <Carousel.Item 
          key={slide.id} 
          style={{ backgroundImage: `url(${slide.bgImage})` }}
          className={index === activeIndex ? "active-slide" : ""}
        >
          <div className="carousel-content">
            <div className="left-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <Button className="buy-now-btn">Buy Now</Button>
            </div>
            <div className="right-content">
              <img 
                src={slide.productImage} 
                alt="Product" 
                className="product-image animated-zoom bg-transparent img-fluid" 
              />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;

