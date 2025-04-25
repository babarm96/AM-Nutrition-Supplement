import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carausal from "./Carausal";
import { useNavigate } from "react-router-dom";
import SectionCard from "./SectionCard";
import "./Home.css";
import BrandsSection from "./BrandsSection";
import ReviewSwiper from "./ReviewSwiper";

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
