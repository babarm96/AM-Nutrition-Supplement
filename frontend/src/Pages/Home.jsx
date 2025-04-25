
import React from "react";
import { useNavigate } from "react-router-dom";
import Carausal from "../Componants/Carausal";
import SectionCard from "../Componants/SectionCard";
import BrandsSection from "../Componants/BrandsSection";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      title: "Protein Powder",
      text: "High-quality protein powder to help you build muscle and recover faster.",
    },
    {
      title: "Creatine",
      text: "Boost your performance and strength with our premium creatine supplement.",
    },
    {
      title: "Pre-Workout",
      text: "Get the energy and focus you need for your workouts with our pre-workout formula.",
    },
  ];

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
      <Carausal />
      <SectionCard />

      {/* Shop by Level Section */}
      <div className="level-container">
        <h1 className="p-5 text-center">Shop by Level</h1>
        <div className="card-container">
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

      {/* Featured Products Section (Optional if you had cards before) */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.text}</p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brands Section */}
      <BrandsSection />
    </>
  );
};

export default Home;
