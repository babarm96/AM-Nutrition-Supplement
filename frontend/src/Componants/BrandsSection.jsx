// // import React from "react";
// // import "./BrandsSection.css";
// // import { useNavigate } from "react-router-dom";

// // // Brand Data
// // const brands = [
// //   {
// //     id: 1,
// //     name: "Optimum Nutrition",
// //     image: "/images/optimum-nutrition.jpg",
// //     url: "/brand/optimum-nutrition",
// //   },
// //   {
// //     id: 2,
// //     name: "MuscleTech",
// //     image: "/images/muscletech.jpg",
// //     url: "/brand/muscletech",
// //   },
// //   {
// //     id: 3,
// //     name: "BSN",
// //     image: "/images/bsn.jpg",
// //     url: "/brand/bsn",
// //   },
// //   {
// //     id: 4,
// //     name: "Dymatize",
// //     image: "/images/dymatize.jpg",
// //     url: "/brand/dymatize",
// //   },
// //   {
// //     id: 5,
// //     name: "Cellucor",
// //     image: "/images/cellucor.jpg",
// //     url: "/brand/cellucor",
// //   },
// // ];

// // const BrandsSection = () => {
// //   const navigate = useNavigate();

// //   // Handle brand click
// //   const handleBrandClick = (url) => {
// //     navigate(url);
// //   };

// //   return (
// //     <section className="brands-section">
// //       <h2>Shop by Brand</h2>
// //       <div className="brands-container">
// //         {brands.map((brand) => (
// //           <div
// //             key={brand.id}
// //             className="brand-card"
// //             onClick={() => handleBrandClick(brand.url)}
// //           >
// //             <img src={brand.image} alt={brand.name} />
// //             <h3>{brand.name}</h3>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default BrandsSection;




// import React from "react";
// import "./BrandsSection.css";
// import { useNavigate } from "react-router-dom";

// // Brand Data
// const brands = [
//   {
//     id: 1,
//     name: "Optimum Nutrition",
//     image: "/assets2/optimum-nutrition.png",
//     url: "/brand/optimum-nutrition",
//   },
//   {
//     id: 2,
//     name: "MuscleTech",
//     image: "/assets2/muscletec.png",
//     url: "/brand/muscletech",
//   },
//   {
//     id: 3,
//     name: "BSN",
//     image: "/assets2/bsn.png",
//     url: "/brand/bsn",
//   },
//   {
//     id: 4,
//     name: "Dymatize",
//     image: "/assets2/dymatize.png",
//     url: "/brand/dymatize",
//   },
//   {
//     id: 5,
//     name: "Cellucor",
//     image: "/assets2/cellucor.png",
//     url: "/brand/cellucor",
//   },
// ];

// const BrandsSection = () => {
//   const navigate = useNavigate();

//   // Handle brand click
//   const handleBrandClick = (url) => {
//     navigate(url);
//   };

//   return (
//     <section className="brands-section">
//       <h2>Shop by Brand</h2>
//       <div className="container">
//         <div className="row justify-content-center">
//           {brands.map((brand) => (
//             <div
//               key={brand.id}
//               className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
//             >
//               <div
//                 className="brand-card"
//                 onClick={() => handleBrandClick(brand.url)}
//               >
//                 <img src={brand.image} alt={brand.name} className="img-fluid p-2" />
//                 <h3>{brand.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandsSection;


import React from "react";
import "./BrandsSection.css";
import { useNavigate } from "react-router-dom";

// Brand Data
const brands = [
  {
    id: 1,
    name: "Optimum Nutrition",
    image: "/assets2/optimum-nutrition.png",
    url: "/brand/optimum-nutrition",
  },
  {
    id: 2,
    name: "MuscleTech",
    image: "/assets2/muscletec.png",
    url: "/brand/muscletech",
  },
  {
    id: 3,
    name: "BSN",
    image: "/assets2/bsn.png",
    url: "/brand/bsn",
  },
  {
    id: 4,
    name: "Dymatize",
    image: "/assets2/dymatize.png",
    url: "/brand/dymatize",
  },
  {
    id: 5,
    name: "Cellucor",
    image: "/assets2/cellucor.png",
    url: "/brand/cellucor",
  },
];

const BrandsSection = () => {
  const navigate = useNavigate();

  // Handle brand click
  const handleBrandClick = (url) => {
    navigate(url);
  };

  return (
    <section className="brands-section mt-4">
      <h2 className="text-dark">Shop by Brand</h2>
      <div className="container">
        <div className="row justify-content-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
            >
              <div
                className="brand-card"
                onClick={() => handleBrandClick(brand.url)}
              >
                <img src={brand.image} alt={brand.name} className="img-fluid p-2" />
                <h3>{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

