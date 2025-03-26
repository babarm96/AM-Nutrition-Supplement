


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

    <Container className="mt-4">
      <header className="text-center mb-4">
        <h1>Welcome to Gym Supplements Store</h1>
        <p>Your one-stop shop for all your fitness needs!</p>
      </header>

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

    </>
  );
};

export default Home;