import React from "react";
import { useParams } from "react-router-dom";
import "./BrandProducts.css";

// Sample Product Data
const productData = {
  "optimum-nutrition": [
    { id: 1, name: "Gold Standard Whey", price: "$45", image: "/images/gold-standard.jpg" },
    { id: 2, name: "Amino Energy", price: "$25", image: "/images/amino-energy.jpg" },
  ],
  muscletech: [
    { id: 1, name: "NitroTech Whey", price: "$50", image: "/images/nitrotech.jpg" },
    { id: 2, name: "Hydroxycut Elite", price: "$30", image: "/images/hydroxycut.jpg" },
  ],
  bsn: [
    { id: 1, name: "Syntha-6 Protein", price: "$48", image: "/images/syntha6.jpg" },
    { id: 2, name: "NO Xplode", price: "$28", image: "/images/noxplode.jpg" },
  ],
  dymatize: [
    { id: 1, name: "ISO 100 Whey", price: "$55", image: "/images/iso100.jpg" },
    { id: 2, name: "Super Mass Gainer", price: "$60", image: "/images/supermass.jpg" },
  ],
  cellucor: [
    { id: 1, name: "C4 Pre-Workout", price: "$35", image: "/images/c4.jpg" },
    { id: 2, name: "Cor-Performance Whey", price: "$45", image: "/images/cor-whey.jpg" },
  ],
};

const BrandProducts = () => {
  const { brandName } = useParams();

  // Check if brandName is undefined or null before using replace
  const formattedBrandName = brandName
    ? brandName.replace("-", " ")
    : "Unknown Brand";

  // Check if brandName exists in productData, otherwise return an empty array
  const products = productData[brandName] || [];

  return (
    <section className="product-section">
      <h2>Products from {formattedBrandName}</h2>
      <div className="product-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found for this brand.</p>
        )}
      </div>
    </section>
  );
};

export default BrandProducts;
