
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
// import axios from "axios";
// import "./ProductList.css";

// const ProductList = () => {
//   const { section } = useParams();
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Fetch product data from API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/AllProducts");

//         // Format API response to required format
//         const formattedData = response.data.map((item) => ({
//           id: item.id,
//           name: item.pname,
//           price: parseInt(item.pprice), // Convert price to number
//           discount: item.discount.replace("% OFF", ""), // Remove % OFF
//           description: item.description,
//           category: item.pcategory
//             .toLowerCase()
//             .replace(/\s+/g, "-")
//             .replace("/", "-"), // Handle / in categories
//           image: item.image,
//         }));

//         setProducts(formattedData);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products based on section
//   useEffect(() => {
//     if (section === "all-products") {
//       setFilteredProducts(products); // Show all products
//     } else {
//       const filtered = products.filter(
//         (product) => product.category === section
//       );
//       setFilteredProducts(filtered);
//     }
//   }, [section, products]);

//   // Open Modal
//   const handleShow = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   // Close Modal
//   const handleClose = () => setShowModal(false);

//   return (
//     <Container>
//       <h2 className="text-center my-4 section-title">
//         {section.replace("-", " ").toUpperCase()}
//       </h2>
//       <Row>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Col key={product.id} md={4} lg={4} className="mb-4">
//               <Card className="product-card">
               
//                 <Card.Body>
//                 <Card.Img
//                   variant="top"
//                   src={product.image}
//                   alt={product.name}
//                   className="product-image"
//                 />
//                   <Card.Title className="product-name">{product.name}</Card.Title>
//                   <Card.Text className="product-price">
//                     <strong>₹{product.price}</strong>{" "}
//                     <span className="text-success">
//                       ({product.discount}% Off)
//                     </span>
//                   </Card.Text>
//                   <Button
//                     variant="outline-primary"
//                     className="btn-view-details"
//                     onClick={() => handleShow(product)}
//                   >
//                     View Details
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <p className="text-center no-products">No products found in this category.</p>
//         )}
//       </Row>

//       {/* Product Modal */}
//       <Modal show={showModal} onHide={handleClose} centered>
//         {selectedProduct && (
//           <>
//             <Modal.Header closeButton className="modal-header-custom">
//               <Modal.Title className="modal-title-custom">
//                 {selectedProduct.name}
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body className="modal-body-custom">
//               <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 className="img-fluid mb-3 modal-img"
//               />
//               <p className="modal-description">
//                 <strong>Description:</strong> {selectedProduct.description}
//               </p>
//               <p className="modal-price">
//                 <strong>Price:</strong> ₹{selectedProduct.price}{" "}
//                 <span className="text-success">
//                   ({selectedProduct.discount}% Off)
//                 </span>
//               </p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//               <Button variant="success">Add to Cart</Button>
//             </Modal.Footer>
//           </>
//         )}
//       </Modal>
//     </Container>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";  
import axios from "axios";
import "./ProductList.css";
import { Card } from "react-bootstrap";


const ProductList = () => {
  const { section } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch product data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/AllProducts");

        // Format API response to required format
        const formattedData = response.data.map((item) => ({
          id: item.id,
          title: item.pname,
          price: parseInt(item.pprice), // Convert price to number
          oldPrice: parseInt(item.oldPrice || item.pprice) + 500, // Default old price
          discount: item.discount.replace("% OFF", ""), // Remove % OFF
          description: item.description,
          category: item.pcategory
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace("/", "-"), // Handle / in categories
          image: item.image,
          freeGift: item.freeGift || false,
        }));

        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on section
  useEffect(() => {
    if (section === "all-products") {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter(
        (product) => product.category === section
      );
      setFilteredProducts(filtered);
    }
  }, [section, products]);

  // Open Modal
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close Modal
  const handleClose = () => setShowModal(false);

  return (
    <Container>
      <h2 className="text-center my-4 section-title">
        {section.replace("-", " ").toUpperCase()}
      </h2>
      <Row className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product.id} md={4} lg={3} sm={6} xs={12} className="mb-4">
  <Card className="product-card" onClick={() => handleShow(product)}>
    <Card.Img
      variant="top"
      src={product.image}
      alt={product.title}
      className="product-image"
    />
    <Card.Body className="product-info">
      <h3 className="product-title">{product.title}</h3>
      <div className="product-pricing">
        <span className="price">₹{product.price}</span>
        <span className="old-price">₹{product.oldPrice}</span>
      </div>
    </Card.Body>
    {product.freeGift && <div className="free-gift">Free Gift</div>}
    <div className="discount-tag">Upto {product.discount}% OFF</div>
  </Card>
</Col>

          ))
        ) : (
          <p className="text-center no-products">
            No products found in this category.
          </p>
        )}
      </Row>

      {/* Product Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        {selectedProduct && (
          <>
            <Modal.Header closeButton className="modal-header-custom">
              <Modal.Title className="modal-title-custom">
                {selectedProduct.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-custom">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="img-fluid mb-3 modal-img"
              />
              <p className="modal-description">
                <strong>Description:</strong> {selectedProduct.description}
              </p>
              <p className="modal-price">
                <strong>Price:</strong> ₹{selectedProduct.price}{" "}
                <span className="text-success">
                  ({selectedProduct.discount}% Off)
                </span>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success">Add to Cart</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default ProductList;
