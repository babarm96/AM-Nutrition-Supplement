import React from "react";
import "./ProductCard.css";

const products = [
  {
    id: 1,
    image: "https://img8.hkrtcdn.com/39016/prd_3901537-MuscleBlaze-Pre-Workout-WrathX-1.12-lb-Fruit-Fury_o.jpg",
    title: "MuscleBlaze Pre Workout WrathX",
    weight: "1.12 lb, Fruit Fury",
    price: "₹1,799",
    oldPrice: "₹2,999",
    discount: "Save ₹1,200",
    rating: "4.4",
  },
  {
    id: 2,
    image: "https://img4.hkrtcdn.com/37799/prd_3779883-MuscleBlaze-PRE-Workout-200-Xtreme-0.22-lb-Fruit-Punch_o.jpg",
    title: "MuscleBlaze PRE Workout 200 Xtreme",
    weight: "0.22 lb, Fruit Punch",
    price: "₹599",
    oldPrice: "₹749",
    discount: "Save ₹150",
    rating: "4.3",
  },
  {
    id: 3,
    image: "https://img8.hkrtcdn.com/39016/prd_3901537-MuscleBlaze-Pre-Workout-WrathX-1.12-lb-Fruit-Fury_o.jpg",
    title: "MuscleBlaze Pre Workout Energy",
    weight: "1.5 lb, Mango Flavor",
    price: "₹1,499",
    oldPrice: "₹2,499",
    discount: "Save ₹1,000",
    rating: "4.5",
  },
];

const ProductCard = () => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-weight">{product.weight}</p>
            <div className="product-pricing">
              <span className="price">{product.price}</span>
              <span className="old-price">{product.oldPrice}</span>
              <span className="discount">{product.discount}</span>
            </div>
            <div className="product-rating">{product.rating} ⭐</div>
            <div className="product-buttons">
              <button className="buy-now">BUY NOW</button>
              <button className="add-to-cart">ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
