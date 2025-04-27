import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Style/ProductStyles.css";

const BrandProducts = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [quantity, setQuantity] = useState(1);

  const formattedBrandName = brandName
    ? brandName.replace("-", " ")
    : "Unknown Brand";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/AllProducts");
        const filteredProducts = response.data.filter(
          (product) =>
            product.pbrand.toLowerCase().replace(/\s+/g, "-") ===
            brandName.toLowerCase()
        );
        setProducts(filteredProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [brandName]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setSelectedFlavour(product.flavours?.[0] || "");
    setSelectedWeight(product.weights?.[0] || "");
    setQuantity(1);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, selectedFlavour, selectedWeight, quantity });
    localStorage.setItem("cart", JSON.stringify(cart));
    setShowModal(false);
  };

  if (loading) return <p className="pro-loading">Loading products...</p>;
  if (error) return <p className="pro-error">{error}</p>;

  return (
    <section className="pro-section pro-body">
      <h2 className="pro-heading pb-2 text-light">Products from {formattedBrandName}</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4 pro-card-wrapper">
              <div className="pro-card" onClick={() => handleViewDetails(product)}>
                <div className="pro-badge-discount">{product.discount}</div>
                {product.freeGift && <div className="pro-badge-gift">Free gift</div>}
                <img src={product.image} alt={product.pname} className="pro-card-image" />
                <h3 className="pro-card-title">{product.pname}</h3>
                <div className="d-flex justify-content-center align-items-center gap-2">
    <span className="text-danger fw-bold fs-6">₹{product.pprice}</span>
    <del className="text-muted fs-6">₹{product.oldPrice}</del>
    <span className="text-success fw-medium">{product.discount}</span>
  </div>
              </div>
            </div>
          ))
        ) : (
          <p className="pro-no-products">No products found for this brand.</p>
        )}
      </div>

      {showModal && selectedProduct && (
        <div className="pro-modal-overlay">
          <div className="pro-modal">
            <div className="pro-modal-header">
              <h5>{selectedProduct.pname}</h5>
              <button onClick={handleCloseModal}>×</button>
            </div>
            <div className="pro-modal-body">
              <div className="pro-modal-left">
                <img src={selectedProduct.image} alt={selectedProduct.pname} className="pro-modal-image" />
              </div>
              <div className="pro-modal-right">
                <p className="pro-modal-description">{selectedProduct.description}</p>

                <div className="pro-veg-icon">
                  {selectedProduct.veg ? "🟢 Veg" : "🔴 Non-Veg"}
                </div>

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
                  <button className="pro-btn-cart" onClick={() => handleAddToCart(selectedProduct)}>
                    Add to Cart 🛒
                  </button>
                  <button className="pro-btn-buy">Buy Now ➜</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrandProducts;





