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
    <div className="container">
      <div className="row g-4 justify-content-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-md-3 col-lg-3 col-sm-6 col-12 mb-4 productlist-card-wrapper"
          >
            <div
              className="productlist-card"
              onClick={() => handleShow(product)}
            >
              <div className="productlist-badge-container">
                <div className="productlist-badge-discount">
                  Upto {product.discount} OFF
                </div>
                {product.freeGift && (
                  <div className="productlist-badge-gift">Free gift</div>
                )}
              </div>
              <div className="productlist-card-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="productlist-card-image"
                />
              </div>
              <div className="productlist-card-title">
                {product.title.split(" ").map((word, idx) => (
                  <div key={idx}>{word}</div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {selectedProduct && (
          <Modal
            show={showModal}
            onHide={handleClose}
            size="lg"
            className="productlist-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-md-5">
                  <div className="productlist-modal-img-wrapper">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="img-fluid productlist-modal-image"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <p className="productlist-description">
                    A powerful pre-workout supplement for enhanced performance.
                  </p>

                  <div className="productlist-price-section">
                    <span className="productlist-price-old">
                      ₹{selectedProduct.oldPrice}
                    </span>
                    <span className="productlist-price-new">
                      ₹{selectedProduct.pprice}
                    </span>
                  </div>

                  <div className="productlist-veg-icon">
                    <span className="veg-dot"></span> Veg
                  </div>

                  <div className="productlist-qty-control">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>

                  <div className="productlist-flavour-section">
                    <p>
                      Flavour: <strong>{selectedFlavour}</strong>
                    </p>
                    <div className="productlist-tags-container">
                      {[
                        "Cafe Mocha",
                        "Cold Coffee",
                        "Double Rich Chocolate",
                        "Kesar Badam Pista",
                        "Malai Kulfi",
                        "Mango",
                        "Rich Chocolate Creme",
                        "Vanilla Ice Cream",
                      ].map((flavour) => (
                        <span
                          key={flavour}
                          className={`productlist-tag ${
                            selectedFlavour === flavour ? "active" : ""
                          }`}
                          onClick={() => setSelectedFlavour(flavour)}
                        >
                          {flavour}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="productlist-weight-section">
                    <p>
                      Weight: <strong>{selectedWeight}</strong>
                    </p>
                    <div className="productlist-tags-container">
                      {[
                        "35 g (0.07 lb)",
                        "500 g (1.1 lb)",
                        "1 kg (2.2 lb)",
                        "1.5 kg (3.3 lb)",
                        "2 kg (4.4 lb)",
                      ].map((weight) => (
                        <span
                          key={weight}
                          className={`productlist-tag ${
                            selectedWeight === weight ? "active" : ""
                          }`}
                          onClick={() => setSelectedWeight(weight)}
                        >
                          {weight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="productlist-modal-buttons">
                    <Button
                      variant="primary"
                      className="productlist-btn-cart"
                      onClick={handleAddToCart}
                    >
                      Add to Cart 🛒
                    </Button>
                    <Button variant="danger" className="productlist-btn-buy">
                      Buy Now ➜
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProductList;
