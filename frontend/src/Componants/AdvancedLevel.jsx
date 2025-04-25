import React, { useState, useEffect } from "react";
import "../Style/AllLevelCss.css";

const flavours = [
  "Cafe Mocha", "Cold Coffee", "Double Rich Chocolate", "Kesar Badam Pista",
  "Malai Kulfi", "Mango", "Rich Chocolate Creme", "Vanilla Ice Cream"
];

const weights = [
  "35 g (0.07 lb)", "500 g (1.1 lb)", "1 kg (2.2 lb)", "1.5 kg (3.3 lb)", "2 kg (4.4 lb)"
];

const AdvancedLevel = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavour, setSelectedFlavour] = useState(flavours[0]);
  const [selectedWeight, setSelectedWeight] = useState(weights[1]);

  useEffect(() => {
    fetch("http://localhost:3000/AllProducts") // Fetching JSON data
      .then((response) => response.json())
      .then((data) => {
        // Filtering only beginner-level products
        const beginnerProducts = data.filter((product) => product.level === "Advanced");
        setProducts(beginnerProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
          <div className="discount-tag">Upto {product.discount}</div>
          {product.freeGift && <div className="free-gift">Free gift</div>}
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <div className="product-pricing">
              <span className="price">{product.price}</span>
              <span className="old-price">{product.oldPrice}</span>
            </div>
          </div>
        </div>
      ))}

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" />
            </div>
            <div className="modal-right">
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.description}</p>
              <div className="product-pricing">
                <span className="price">{selectedProduct.price}</span>
                <span className="old-price">{selectedProduct.oldPrice}</span>
              </div>
              <div className="veg-nonveg">
                <span>{selectedProduct.veg ? "🟢 Veg" : "🔴 Non-Veg"}</span>
              </div>

              <div className="quantity-selector">
                <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
              </div>

              {/* Flavour Selector */}
              <div className="flavour-selector">
                <h4>Flavour: {selectedFlavour}</h4>
                <div className="selector-options">
                  {flavours.map((flavour) => (
                    <button 
                      key={flavour} 
                      onClick={() => setSelectedFlavour(flavour)}
                      className={selectedFlavour === flavour ? "selected" : ""}
                    >
                      {flavour}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Selector */}
              <div className="weight-selector">
                <h4>Weight: {selectedWeight}</h4>
                <div className="selector-options">
                  {weights.map((weight) => (
                    <button 
                      key={weight} 
                      onClick={() => setSelectedWeight(weight)}
                      className={selectedWeight === weight ? "selected" : ""}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <button type="button" className="button add-to-cart">
                  <span className="button__text">Add to Cart</span>
                  <span className="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.2 11.5a2 2 0 0 0 2 1.5h9.8a2 2 0 0 0 2-1.5L23 6H6"></path>
                    </svg>
                  </span>
                </button>
                <button type="button" className="button buy-now">
                  <span className="button__text">Buy Now</span>
                  <span className="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <button className="close-modal" onClick={() => setSelectedProduct(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedLevel;
