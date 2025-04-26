import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componants/Navbar';
import Home from './Pages/Home';
import CategoryPage from "./Pages/CategoryPage";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Componants/Products';
import Cart from './Componants/Cart';
import Login from './Componants/Login';
import ProductCard from './Componants/ProductCard';
import ProductList from "./Componants/ProductList";
import Footer from './Componants/Footer';
import BrandsSection from "./Componants/BrandsSection";
import BrandProducts from "./Componants/BrandProducts";
import BeginnerLevel from './Componants/BeginnerLevel';
import IntermediateLevel from './Componants/IntermediateLevel';
import AdvancedLevel from './Componants/AdvancedLevel';
import ScrollToTop from './Componants/ScrollToTop';
// import "./Componants/ProductList.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/brand" element={<BrandsSection />} />
        <Route path="/brand/:brandName" element={<BrandProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productsCard" element={<ProductCard />} />
        <Route path="/:section" element={<ProductList />} />
        <Route path="/BeginnerLevel" element={<BeginnerLevel />} />
        <Route path="/IntermediateLevel" element={<IntermediateLevel />} />
        <Route path="/AdvancedLevel" element={<AdvancedLevel />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
