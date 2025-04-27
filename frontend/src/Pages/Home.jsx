
import React from "react";
import { useNavigate } from "react-router-dom";
import Carausal from "../Componants/Carausal";
import SectionCard from "../Componants/SectionCard";
import BrandsSection from "../Componants/BrandsSection";
import "./Home.css";
import ReviewSwiper from "../Componants/ReviewSwiper";


const Home = () => {
  const navigate = useNavigate();


  const levels = [
    {
      level: "Beginner",
      text: "For all budding health buffs who are starting out on their fitness journeys.",
      path: "/BeginnerLevel",
    },
    {
      level: "Intermediate",
      text: "In the middle of your fitness journey and looking to improve? This range is for you.",
      path: "/IntermediateLevel",
    },
    {
      level: "Advanced",
      text: "The perfect range for all health gurus who have advanced well into their fitness journey.",
      path: "/AdvancedLevel",
    },
  ];

  return (
    <>
    <div className="carausal" style={{ marginTop: "120px" }}>
        <Carausal />
    </div>
      


      <div className="all-product-container">
          <h1 className="mb-2 text-center fw-bold">Look At Our Products</h1>
          <SectionCard />
          </div>

      {/* Shop by Level Section */}
      <div className="level-container">
        <h1 className="p-2 text-center fw-bold">Shop by Level</h1>
        <div className="card-container mt-1">
          {levels.map((item, index) => (
            <div
              key={index}
              className="flip-card"
              onClick={() => item.path && navigate(item.path)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">{item.level}</div>
                <div className="flip-card-back">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    

      {/* Brands Section */}
      <BrandsSection />

          {/* Reviews section  */}

          <ReviewSwiper />

    </>
  );
};

export default Home;
