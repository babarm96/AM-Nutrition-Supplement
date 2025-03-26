import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carausal from "./Carausal";
import "./Home.css"; // Import the new CSS file

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

// Home.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Carausal'
import Carausal from './Carausal';
import { Outlet } from "react-router-dom";
import SectionCard from './SectionCard';

const Home = () => {
  return (
<>
  <Carausal/>
  <SectionCard/>
        {/* Dynamic section content (loaded via Outlet) */}
        {/* <div className="content-container mt-4">
        <Outlet />
      </div> */}
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Protein Powder</Card.Title>
                <Card.Text>High-quality protein powder to help you build muscle and recover faster.</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Creatine</Card.Title>
                <Card.Text>Boost your performance and strength with our premium creatine supplement.</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Pre-Workout</Card.Title>
                <Card.Text>Get the energy and focus you need for your workouts with our pre-workout formula.</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="level-container">
        <h1 className="p-5 text-center">Shop by Level</h1>
        <div className="card-container">
          <div className="flip-card" onClick={() => navigate("/productsCard")}>
            <div className="flip-card-inner">
              <div className="flip-card-front">Beginner</div>
              <div className="flip-card-back">For all budding health buffs who are starting out on their fitness journeys.</div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">Intermediate</div>
              <div className="flip-card-back">In the middle of your fitness journey and looking to improve? This range is for you.</div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">Advanced</div>
              <div className="flip-card-back">The perfect range for all health gurus who have advanced well into their fitness journey.</div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center mb-4">Featured Products</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Protein Powder</Card.Title>
              <Card.Text>
                High-quality protein powder to help you build muscle and recover faster.
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Creatine</Card.Title>
              <Card.Text>
                Boost your performance and strength with our premium creatine supplement.
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Pre-Workout</Card.Title>
              <Card.Text>
                Get the energy and focus you need for your workouts with our pre-workout formula.
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>

      <br /><br />
    </>
  );
};

export default Home;
