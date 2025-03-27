import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componants/Navbar';
import Home from './Componants/Home'; // Create these components
import Products from './Componants/Products';
import About from './Componants/About';
import Contact from './Componants/Contact';
import Cart from './Componants/Cart';
import Login from './Componants/Login';
import Carousel from './Componants/Carausal';
import SectionCard from './Componants/SectionCard';
import AllProducts from './Componants/AllProducts';
import Protins from './Componants/Protins';
import Multivitamins from './Componants/Multivitamins';
import PrePostWorkout from './Componants/PrePostWorkout';
import WeightGainer from './Componants/WeightGainer';
import BeginnerLevel from './Componants/BeginnerLevel'
import IntermediateLevel from './Componants/IntermediateLevel';
import AdvancedLevel from './Componants/AdvancedLevel';


const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
           <Route path="/all-products" element={<AllProducts/>} />
           <Route path="/proteins" element={<Protins/>} />
           <Route path="/pre-post-workout" element={<PrePostWorkout/>} />
           <Route path="/weight-gainer" element={<WeightGainer/>} />
           <Route path="/multivitamins" element={<Multivitamins/>} />
      {/* </Route> */}
        <Route path="/about" element={<About/>} />
        <Route path="/products" elementt={<Products />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/BeginnerLevel" element={<BeginnerLevel />} />
        <Route path="/IntermediateLevel" element={<IntermediateLevel /> } />
        <Route path="/AdvancedLevel" element={<AdvancedLevel/> } />
      </Routes>
    </Router>
  );
};

export default App;
