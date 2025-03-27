// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./SectionCard.css";

// const SectionCard = () => {
//   const navigate = useNavigate();

//   const cardsData = [
//     {
//       id: "all-products",
//       title: "All Products",
//       image: "./assets2/card1.jpeg",
//     },
//     {
//       id: "proteins",
//       title: "Proteins",
//       image: "./assets2/card2.jpeg",
//     },
//     {
//       id: "pre-post-workout",
//       title: "Pre/Post Workout",
//       image: "./assets2/card3.jpeg",
//     },
//     {
//       id: "weight-gainer",
//       title: "Weight Gainer",
//       image: "./assets2/card4.jpeg",
//     },
//     {
//       id: "multivitamins",
//       title: "Multivitamins & Supplements",
//       image: "./assets2/card5.jpeg",
//     },
//   ];

//   // Handle card click
//   const handleCardClick = (section) => {
//     navigate(`/${section}`);
//   };

//   return (
//     <div className="cards-container">
//       {cardsData.map((card) => (
//         <div
//           key={card.id}
//           className="card-custom"
//           style={{ backgroundImage: `url(${card.image})` }}
//           onClick={() => handleCardClick(card.id)}
//         >
//           <div className="overlay">
//             <div className="card-text">{card.title}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionCard;





// ------------------------------------



// src/components/SectionCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SectionCard.css";
// import "./ProductList.css"

const SectionCard = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      id: "all-products",
      title: "All Products",
      image: "./assets2/card1.jpeg",
    },
    {
      id: "proteins",
      title: "Proteins",
      image: "./assets2/card2.jpeg",
    },
    {
      id: "pre-post-workout",
      title: "Pre/Post Workout",
      image: "./assets2/card3.jpeg",
    },
    {
      id: "weight-gainer",
      title: "Weight Gainer",
      image: "./assets2/card4.jpeg",
    },
    {
      id: "multivitamins",
      title: "Multivitamins & Supplements",
      image: "./assets2/card5.jpeg",
    },
  ];

  // Handle section click
  const handleCardClick = (section) => {
    navigate(`/${section}`);
  };

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="card-custom"
          style={{ backgroundImage: `url(${card.image})` }}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="overlay">
            <div className="card-text">{card.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionCard;
