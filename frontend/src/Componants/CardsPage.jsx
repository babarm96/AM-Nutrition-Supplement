import React from "react";
import { useParams } from "react-router-dom";

const cardData = {
  protein: [{ title: "Whey Protein", image: "/assets/protein1.jpg", desc: "Build lean muscle." }],
  vitamins: [{ title: "Multivitamins", image: "/assets/vitamin1.jpg", desc: "Boost immunity." }],
  workout: [{ title: "Pre Workout", image: "/assets/workout1.jpg", desc: "Get energy burst." }],
  "weight-gainer": [{ title: "Mass Gainer", image: "/assets/gainer1.jpg", desc: "Gain healthy weight." }],
  combo: [{ title: "Combo Pack", image: "/assets/combo1.jpg", desc: "Everything you need." }],
};

const CardsPage = () => {
  const { section } = useParams();
  const products = cardData[section] || [];

  return (
    <>
      <style>
        {`
          .card {
            border-radius: 10px;
            transition: transform 0.3s ease-in-out;
          }
          .card:hover {
            transform: scale(1.05);
          }
          .card-img-top {
            height: 250px;
            object-fit: cover;
          }
        `}
      </style>

      <div className="container mt-5">
        <h2 className="mb-4 text-center">{section.toUpperCase()}</h2>
        <div className="row">
          {products.map((product, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="card shadow">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.desc}</p>
                  <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsPage;
