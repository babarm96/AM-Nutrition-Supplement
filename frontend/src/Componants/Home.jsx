import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carausal from "./Carausal";
import SectionCard from "./SectionCard";
import "./Home.css"; // Ensure this file exists

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Carausal />

      <Container className="mt-4">
        <header className="text-center mb-4">
          <h1>Welcome to Gym Supplements Store</h1>
          <p>Your one-stop shop for all your fitness needs!</p>
        </header>

        <SectionCard />

        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {[
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
          ].map((product, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/300" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.text}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="level-container">
        <h1 className="p-5 text-center">Shop by Level</h1>
        <div className="card-container">
          {[
            { level: "Beginner", text: "For all budding health buffs who are starting out on their fitness journeys.", path: "/BeginnerLevel" },
            { level: "Intermediate", text: "In the middle of your fitness journey and looking to improve? This range is for you.", path: "/IntermediateLevel" },
            { level: "Advanced", text: "The perfect range for all health gurus who have advanced well into their fitness journey." , path: "/AdvancedLevel" },
          ].map((item, index) => (
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
    </>
  );
};

export default Home;
