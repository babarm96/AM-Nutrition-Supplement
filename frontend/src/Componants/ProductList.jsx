import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../Style/ProductList.css";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavour, setSelectedFlavour] = useState("Cafe Mocha");
  const [selectedWeight, setSelectedWeight] = useState("500 g (1.1 lb)");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/AllProducts");
        const allProducts = response.data;

        const filteredProducts =
          category === "All Products"
            ? allProducts
            : allProducts.filter(
                (product) =>
                  product.pcategory.trim().toLowerCase() ===
                  category.trim().toLowerCase()
              );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };

    if (category) {
      fetchCategoryProducts();
    }
  }, [category]);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setSelectedFlavour("Cafe Mocha");
    setSelectedWeight("500 g (1.1 lb)");
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleAddToCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const productToAdd = {
      ...selectedProduct,
      quantity,
      selectedFlavour,
      selectedWeight,
    };
    cartData.push(productToAdd);
    localStorage.setItem("cart", JSON.stringify(cartData));
    setShowModal(false);
  };

  if (products.length === 0) {
    return <div>No products available for this category.</div>;
  }

  return (
    <div className="row">
      {products.map((product) => (
        <div
          key={product.id}
          className="col-md-4 col-lg-3 col-sm-6 col-12 mb-4 gympro-card-wrapper"
        >
          <div className="gympro-card" onClick={() => handleShow(product)}>
            <div className="gympro-badge-discount">
              Upto {product.discount} OFF
            </div>
            {product.freeGift && (
              <div className="gympro-badge-gift">Free gift</div>
            )}
            <div className="gympro-card-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="gympro-card-image"
              />
            </div>
            <div className="gympro-card-title">
              {product.title.split(" ").map((word, idx) => (
                <div key={idx}>{word}</div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {selectedProduct && (
        <Modal show={showModal} onHide={handleClose} size="lg" className="gympro-modal">
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-5">
                <div className="gympro-modal-img-wrapper">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="img-fluid gympro-modal-image"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <p className="gympro-description">
                  A powerful pre-workout supplement for enhanced performance.
                </p>

                <div className="gympro-price-section">
                  <span className="gympro-price-old">₹{selectedProduct.oldPrice}</span>
                  <span className="gympro-price-new">₹{selectedProduct.pprice}</span>
                </div>

                <div className="gympro-veg-icon">
                  <span className="gympro-veg-dot"></span> Veg
                </div>

                <div className="gympro-qty-control">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <div className="gympro-flavour-section">
                  <p>
                    Flavour: <strong>{selectedFlavour}</strong>
                  </p>
                  <div className="gympro-tags-container">
                    {[
                      "Cafe Mocha",
                      "Cold Coffee",
                      "Double Rich Chocolate",
                      "Kesar Badam Pista",
                      "Malai Kulfi",
                      "Mango",
                      "Rich Chocolate Creme",
                      "Vanilla Ice Cream",
                    ].map((flavor) => (
                      <span
                        key={flavor}
                        className={`gympro-tag ${selectedFlavour === flavor ? "active" : ""}`}
                        onClick={() => setSelectedFlavour(flavor)}
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="gympro-weight-section">
                  <p>
                    Weight: <strong>{selectedWeight}</strong>
                  </p>
                  <div className="gympro-tags-container">
                    {[
                      "35 g (0.07 lb)",
                      "500 g (1.1 lb)",
                      "1 kg (2.2 lb)",
                      "1.5 kg (3.3 lb)",
                      "2 kg (4.4 lb)",
                    ].map((weight) => (
                      <span
                        key={weight}
                        className={`gympro-tag ${selectedWeight === weight ? "active" : ""}`}
                        onClick={() => setSelectedWeight(weight)}
                      >
                        {weight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="gympro-modal-buttons">
                  <Button
                    variant="primary"
                    className="gympro-btn-cart"
                    onClick={handleAddToCart}
                  >
                    Add to Cart 🛒
                  </Button>
                  <Button variant="danger" className="gympro-btn-buy">
                    Buy Now ➜
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
