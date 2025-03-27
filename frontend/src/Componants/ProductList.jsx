// src/components/ProductList.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./ProductList.css";
import "./ProductList.css"

const ProductList = () => {
  const { section } = useParams();

  // Product Data
  const products = [
    {
      id: 1,
      name: "Whey Protein",
      price: 2000,
      discount: 10,
      description: "High-quality whey protein for muscle growth.",
      rating: 4.5,
      category: "proteins",
      image: "./assets2/protein1.jpeg",
    },
    {
      id: 2,
      name: "Creatine Monohydrate",
      price: 1500,
      discount: 5,
      description: "Increases strength and endurance.",
      rating: 4.7,
      category: "pre-post-workout",
      image: "./assets2/pre-post1.jpeg",
    },
    {
      id: 3,
      name: "Mass Gainer",
      price: 2500,
      discount: 15,
      description: "Helps you gain muscle mass effectively.",
      rating: 4.2,
      category: "weight-gainer",
      image: "./assets2/gainer1.jpeg",
    },
    {
      id: 4,
      name: "Multivitamins",
      price: 500,
      discount: 8,
      description: "Supports overall health and immunity.",
      rating: 4.1,
      category: "multivitamins",
      image: "./assets2/multi1.jpeg",
    },
  ];

  // Filter products based on section
  const filteredProducts =
    section === "all-products"
      ? products
      : products.filter((product) => product.category === section);

  // State for Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open Modal
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close Modal
  const handleClose = () => setShowModal(false);

  return (
    <Container>
      <h2 className="text-center my-4 text-warning">
        {section.replace("-", " ").toUpperCase()}
      </h2>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} md={4} lg={3} className="mb-4">
            <Card className="product-card">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>₹{product.price}</strong>{" "}
                  <span className="text-success">
                    ({product.discount}% Off)
                  </span>
                </Card.Text>
                <Button variant="primary" onClick={() => handleShow(product)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Product Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="img-fluid mb-3 modal-img"
              />
              <p>
                <strong>Description:</strong> {selectedProduct.description}
              </p>
              <p>
                <strong>Price:</strong> ₹{selectedProduct.price}{" "}
                <span className="text-success">
                  ({selectedProduct.discount}% Off)
                </span>
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {selectedProduct.rating}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success">Add to Cart</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default ProductList;
