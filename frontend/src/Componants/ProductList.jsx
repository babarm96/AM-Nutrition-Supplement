import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style/ProductStyles.css";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
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
        console.error("Error fetching products:", error);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setSelectedFlavour(product.flavours?.[0] || "");
    setSelectedWeight(product.weights?.[0] || "");
    setQuantity(1);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...selectedProduct, selectedFlavour, selectedWeight, quantity });
    localStorage.setItem("cart", JSON.stringify(cart));
    setShowModal(false);
  };

  if (products.length === 0) {
    return <div>No products available for this category.</div>;
  }

  return (
    <div className="row  pro-body">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4 pro-card-wrapper mt-2">
          <div className="pro-card" onClick={() => handleViewDetails(product)}>
            <div className="pro-badge-discount">Upto {product.discount} </div>
            {product.freeGift && <div className="pro-badge-gift">Free gift</div>}
            <img src={product.image} alt={product.title} className="pro-card-image" />
            <h3 className="pro-card-title">{product.title}</h3>
              <div className="d-flex justify-content-center align-items-center gap-2">
    <span className="text-danger fw-bold fs-6">₹{product.pprice}</span>
    <del className="text-muted fs-6">₹{product.oldPrice}</del>
    <span className="text-success fw-medium">{product.discount} </span>
  </div>
          </div>
        </div>
      ))}

      {showModal && selectedProduct && (
        <div className="pro-modal-overlay">
          <div className="pro-modal">
            <div className="pro-modal-header">
              <h5>{selectedProduct.title}</h5>
              <button onClick={handleCloseModal}>×</button>
            </div>
            <div className="pro-modal-body">
              <div className="pro-modal-left">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="pro-modal-image" />
              </div>
              <div className="pro-modal-right">
                <p className="pro-modal-description">
                  A powerful pre-workout supplement for enhanced performance.
                </p>

                <div className="pro-veg-icon">🟢 Veg</div>

                <div className="pro-counter">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <div className="pro-tab-section">
                  <h6>Flavour:</h6>
                  <div className="pro-tab-container">
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
                      <button
                        key={flavor}
                        className={`pro-tab ${selectedFlavour === flavor ? "active" : ""}`}
                        onClick={() => setSelectedFlavour(flavor)}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pro-tab-section">
                  <h6>Weight:</h6>
                  <div className="pro-tab-container">
                    {[
                      "35 g (0.07 lb)",
                      "500 g (1.1 lb)",
                      "1 kg (2.2 lb)",
                      "1.5 kg (3.3 lb)",
                      "2 kg (4.4 lb)",
                    ].map((weight) => (
                      <button
                        key={weight}
                        className={`pro-tab ${selectedWeight === weight ? "active" : ""}`}
                        onClick={() => setSelectedWeight(weight)}
                      >
                        {weight}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pro-modal-actions">
                  <button className="pro-btn-cart" onClick={handleAddToCart}>
                    Add to Cart 🛒
                  </button>
                  <button className="pro-btn-buy">Buy Now ➜</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
