import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/SectionCard.css";

const SectionCard = () => {
  const [sections, setSections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get("http://localhost:3000/AllProducts");
        const allProducts = response.data;

        const categories = Array.from(
          new Set(allProducts.map((item) => item.pcategory))
        );

        const formattedSections = categories.map((category, index) => ({
          id: category,
          title: category,
          image: `./assets2/card${index + 1}.jpeg`,
        }));

        const allProductsCard = {
          id: "All Products",
          title: "All Products",
          image: "./assets2/all-products.jpeg",
        };

        setSections([allProductsCard, ...formattedSections]);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, []);

  const handleCardClick = (section) => {
    navigate(`/category/${encodeURIComponent(section)}`);
  };

  return (
    <div className="section-card-container">
      {sections.map((card) => (
        <div
          key={card.id}
          className="section-card-custom"
          style={{ backgroundImage: `url(${card.image})` }}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="section-overlay">
            <div className="section-card-text">{card.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionCard;


