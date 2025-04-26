import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Style/BrandProducts.css";

const BrandProducts = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");

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
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    alert(`${product.pname} (${selectedFlavour}, ${selectedWeight}) added to cart!`);
  };

  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.pname} (${selectedFlavour}, ${selectedWeight})`);
  };

  if (loading) {
    return <p className="bp-loading">Loading products...</p>;
  }

  if (error) {
    return <p className="bp-error">{error}</p>;
  }

  return (
    <section className="bp-section">
      <h2 className="bp-heading">Products from {formattedBrandName}</h2>
      <div className="bp-products-container row">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
            >
              <div className="bp-card">
                <div className="bp-card-offer">
                  <span className="bp-discount-badge">{product.discount}</span>
                  {product.freeGift && (
                    <span className="bp-freegift-badge">Free gift</span>
                  )}
                </div>
                <img
                  src={product.image}
                  alt={product.pname}
                  className="bp-card-image"
                />
                <h3 className="bp-card-title">{product.pname}</h3>
                <button
                  className="bp-viewdetails-btn"
                  onClick={() => handleViewDetails(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="bp-no-products">No products found for this brand.</p>
        )}
      </div>

      {showModal && selectedProduct && (
        <div className="bp-modal-overlay">
          <div className="bp-modal">
            <div className="bp-modal-header">
              <h5 className="bp-modal-title">{selectedProduct.pname}</h5>
              <button className="bp-modal-close" onClick={handleCloseModal}>
                Close
              </button>
            </div>
            <div className="bp-modal-body">
              <div className="bp-modal-left">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.pname}
                  className="bp-modal-image"
                />
              </div>
              <div className="bp-modal-right">
                <p className="bp-modal-description">{selectedProduct.description}</p>

                <div className="bp-modal-veg">
                  {selectedProduct.veg ? <span>🟢 Veg</span> : <span>🔴 Non-Veg</span>}
                </div>

                <div className="bp-modal-counter">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>

                <div className="bp-modal-flavour">
                  <h6>Flavour:</h6>
                  <div className="bp-tab-container">
                    {selectedProduct.flavours?.map((flavour, idx) => (
                      <button
                        key={idx}
                        className={`bp-tab ${selectedFlavour === flavour ? "bp-tab-active" : ""}`}
                        onClick={() => setSelectedFlavour(flavour)}
                      >
                        {flavour}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bp-modal-weight">
                  <h6>Weight:</h6>
                  <div className="bp-tab-container">
                    {selectedProduct.weights?.map((weight, idx) => (
                      <button
                        key={idx}
                        className={`bp-tab ${selectedWeight === weight ? "bp-tab-active" : ""}`}
                        onClick={() => setSelectedWeight(weight)}
                      >
                        {weight}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bp-modal-actions">
                  <button
                    className="bp-addcart-btn"
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    Add to Cart 🛒
                  </button>
                  <button
                    className="bp-buynow-btn"
                    onClick={() => handleBuyNow(selectedProduct)}
                  >
                    Buy Now
                  </button>
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






// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../Style/BrandProducts.css";

// const BrandProducts = () => {
//   const { brandName } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const formattedBrandName = brandName
//     ? brandName.replace("-", " ")
//     : "Unknown Brand";

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/AllProducts");
//         const filteredProducts = response.data.filter(
//           (product) =>
//             product.pbrand.toLowerCase().replace(/\s+/g, "-") ===
//             brandName.toLowerCase()
//         );
//         setProducts(filteredProducts);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setError("Failed to load products.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [brandName]);

//   const handleViewDetails = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   const handleAddToCart = (product) => {
//     alert(`${product.pname} added to cart!`);
//   };

//   const handleBuyNow = (product) => {
//     alert(`Proceeding to buy: ${product.pname}`);
//   };

//   if (loading) {
//     return <p className="bp-loading">Loading products...</p>;
//   }

//   if (error) {
//     return <p className="bp-error">{error}</p>;
//   }

//   return (
//     <section className="bp-product-section">
//       <h2 className="text-dark">Products from {formattedBrandName}</h2>
//       <div className="bp-product-container row">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div
//               key={product.id}
//               className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
//             >
//               <div className="bp-product-card">
//                 <img
//                   src={product.image}
//                   alt={product.pname}
//                   className="img-fluid p-2"
//                 />
//                 <h3>{product.pname}</h3>
//                 <p className="bp-price">Price: ₹{product.pprice}</p>
//                 <p className="bp-old-price">MRP: ₹{product.oldPrice}</p>
//                 <p className="bp-discount">{product.discount}</p>
//                 <button
//                   className="btn btn-primary mt-2"
//                   onClick={() => handleViewDetails(product)}
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="bp-no-products">No products found for this brand.</p>
//         )}
//       </div>

//       {showModal && selectedProduct && (
//         <div className="bp-custom-modal">
//           <div className="bp-modal-content">
//             <div className="bp-modal-header">
//               <h5 className="bp-modal-title">{selectedProduct.pname}</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 onClick={handleCloseModal}
//               ></button>
//             </div>
//             <div className="bp-modal-body">
//               <div className="text-center">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.pname}
//                   className="img-fluid mb-3"
//                 />
//               </div>
//               <p><strong>Category:</strong> {selectedProduct.pcategory}</p>
//               <p><strong>Price:</strong> ₹{selectedProduct.pprice}</p>
//               <p><strong>MRP:</strong> ₹{selectedProduct.oldPrice}</p>
//               <p><strong>Discount:</strong> {selectedProduct.discount}</p>
//               <p><strong>Description:</strong> {selectedProduct.description}</p>
//               <p><strong>Level:</strong> {selectedProduct.level}</p>
//               <p><strong>Free Gift:</strong> {selectedProduct.freeGift ? "Yes" : "No"}</p>
//               <p><strong>Vegetarian:</strong> {selectedProduct.veg ? "Yes" : "No"}</p>
//             </div>
//             <div className="bp-modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-success me-2"
//                 onClick={() => handleAddToCart(selectedProduct)}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-warning"
//                 onClick={() => handleBuyNow(selectedProduct)}
//               >
//                 Buy Now
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={handleCloseModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default BrandProducts;
