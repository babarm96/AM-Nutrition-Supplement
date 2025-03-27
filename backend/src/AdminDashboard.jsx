import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'

const AdminDashboard = () => {
//   const nav = useNavigate();
  const [data, setData] = useState({
    pname: '',
    pprice: '',
    pcategory: '',
    pbrand: '',
    image: '',
    title: '',
    oldPrice: '',
    discount: '',
    freeGift: false,
    description: '',
    veg: false,
    level: '',
  });

  console.log(data);

  const dataHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === 'checkbox' ? checked : value });
  };

  const saveForm = async (e) => {
    try {
      e.preventDefault();
      await axios.post('http://localhost:3000/AllProducts', data);
      alert('Product added successfully!');
  
      // Reset the form
      setData({
        pname: '',
        pprice: '',
        pcategory: '',
        pbrand: '',
        image: '',
        title: '',
        oldPrice: '',
        discount: '',
        freeGift: false,
        description: '',
        veg: false,
        level: '',
      });
  
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <>
    <div className="form-container">
      <form onSubmit={saveForm}>
        <div className="container-fluid my-4">
          <div className="row p-4">
            <div className="col-md-12">
              <div className="inputGroup m-auto">
                <label>Product Name</label>
                <input type="text" name="pname" value={data.pname} onChange={dataHandler} required className="form-control" autoComplete="off" />
              </div>
            </div>
            
            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label>Product Image URL</label>
                <input type="text" name="image" value={data.image} onChange={dataHandler} required className="form-control" autoComplete="off" />
              </div>
            </div>
            
            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label>Product Title</label>
                <input type="text" name="title" value={data.title} onChange={dataHandler} required className="form-control" autoComplete="off" />
              </div>
            </div>
            
            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label>Product Price</label>
                <input type="number" name="pprice" value={data.pprice} onChange={dataHandler} required className="form-control" autoComplete="off" />
              </div>
            </div>

            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label>Old Price</label>
                <input type="number" name="oldPrice" value={data.oldPrice} onChange={dataHandler} className="form-control" autoComplete="off" />
              </div>
            </div>
            
            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label>Discount</label>
                <input type="text" name="discount" value={data.discount} onChange={dataHandler} className="form-control" autoComplete="off" />
              </div>
            </div>
            
            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label>Product Category</label>
                <select name="pcategory" value={data.pcategory} onChange={dataHandler} required className="form-control">
                  <option value="" hidden>Select a category</option>
                  <option value="Protein">Protein</option>
                  <option value="Creatine">Creatine</option>
                  <option value="Pre/Post Workout">Pre/Post Workout</option>
                </select>
              </div>
            </div>
            
            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label>Product Level</label>
                <select name="level" value={data.level} onChange={dataHandler} required className="form-control">
                  <option value="" hidden>Select level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
            
            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label>Product Description</label>
                <textarea name="description" value={data.description} onChange={dataHandler} className="form-control"></textarea>
              </div>
            </div>

            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label className="checkbox-container">
                  <input 
                    className="custom-checkbox" 
                    type="checkbox" 
                    name="freeGift" 
                    checked={data.freeGift} 
                    onChange={(e) => setData({ ...data, freeGift: e.target.checked })} 
                  />
                  <span className="checkmark"></span>
                  Free Gift Included
                </label>
              </div>
            </div>

            <div className="col-md-12 my-3">
              <div className="inputGroup m-auto">
                <label className="checkbox-container">
                  <input 
                    className="custom-checkbox" 
                    type="checkbox" 
                    name="veg" 
                    checked={data.veg} 
                    onChange={(e) => setData({ ...data, veg: e.target.checked })} 
                  />
                  <span className="checkmark"></span>
                  Vegetarian Product
                </label>
              </div>
            </div>

            
            <div className="col-md-12 text-center">
              <button className="btn btn-primary px-4 fw-bold">Add Product</button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default AdminDashboard;
