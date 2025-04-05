import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SectionCard.css";

const SectionCard = () => {
  const [sections, setSections] = useState([]);
  const navigate = useNavigate();

  // Fetch section data from API
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get("http://localhost:3000/AllProducts");
        const allProducts = response.data;

        // Extract unique sections from pcategory
        const categories = Array.from(
          new Set(allProducts.map((item) => item.pcategory))
        );

        // Format data for cards
        const formattedSections = categories.map((category, index) => ({
          id: category
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace("/", "-"), // Handle / with -
          title: category,
          image: `./assets2/card${index + 1}.jpeg`,
        }));

        // Add "All Products" card at the beginning
        const allProductsCard = {
          id: "all-products",
          title: "All Products",
          image: "./assets2/all-products.jpeg", // Add your default image for All Products
        };

        // Add "All Products" to the beginning
        setSections([allProductsCard, ...formattedSections]);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, []);

  // Handle section click
  const handleCardClick = (section) => {
    navigate(`/${section}`);
  };

  return (
    <div className="cards-container">
      {sections.map((card) => (
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















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./SectionCard.css";

// const SectionCard = () => {
//   const [sections, setSections] = useState([]);
//   const navigate = useNavigate();

//   // Fetch section data from API
//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/AllProducts");
//         const allProducts = response.data;

//         // Extract unique sections from pcategory
//         const categories = Array.from(
//           new Set(allProducts.map((item) => item.pcategory))
//         );

//         // Format data for cards
//         const formattedSections = categories.map((category, index) => ({
//           id: category
//             .toLowerCase()
//             .replace(/\s+/g, "-")
//             .replace("/", "-"), // Replace / with - for consistency
//           title: category,
//           image: `./assets2/card${index + 1}.jpeg`,
//         }));

//         setSections(formattedSections);
//       } catch (error) {
//         console.error("Error fetching sections:", error);
//       }
//     };

//     fetchSections();
//   }, []);

//   // Handle section click
//   const handleCardClick = (section) => {
//     navigate(`/${section}`);
//   };

//   return (
//     <div className="cards-container">
//       {sections.map((card) => (
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