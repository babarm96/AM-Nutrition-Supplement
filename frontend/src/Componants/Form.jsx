import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = "Valid phone number is required";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-auto w-50" >
        <div className="row m-auto">
          <div className="col-sm-6"  > 
            <input
              type="text"
              placeholder="Name*"
              className="p-2 border rounded-5 w-75"
              style={{background:"#F4F4F4"}}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="col-sm-6">
            <input
              placeholder="Phone No*"
              type="text"
              className="p-2 border rounded-5 w-75"
              style={{background:"#F4F4F4"}}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
        </div>
        <div className="row w-75 mt-3">
          <input
            type="email"
            placeholder="Email*"
            className="w-75 p-2 border rounded-5 m-2"
            style={{background:"#F4F4F4"}}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="row w-75 mt-3">
          <textarea
          placeholder="Say Something here.....!!"
            className="w-full p-2 border rounded"
            style={{background:"#F4F4F4"}}
            rows="3"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button type="submit" className="w-full bg--500 text-white p-2 rounded mt-4">Submit</button>
      </form>
    </div>
  );
}
