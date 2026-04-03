import React, { useState } from "react";
import Swal from "sweetalert2";

function Index() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleValidation = () => {
    const { name, price, description } = formData;
    if (!name || !price || !description) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill in all the futuristic data points.",
        background: "#1a1a1a",
        color: "#fff",
      });
      return false;
    }
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      Swal.fire("Error", "Please enter a valid positive price.", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      Swal.fire({
        title: "Data Uplink Successful",
        icon: "success",
        background: "#0f172a",
        color: "#38bdf8",
      });
    }
  };

  const inputClasses =
    "w-full bg-slate-900/50 border border-slate-700 text-cyan-100 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-slate-500 text-sm";

  return (
    /* 1. Added pt-16 to offset the fixed navbar 
       2. Used flex-col to ensure proper vertical distribution
    */
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center pt-16 p-6 font-sans">
      {/* Ambient Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

      <form
        onSubmit={handleSubmit}
        /* Reduced max-width from max-w-lg (512px) to max-w-md (448px) 
           Reduced padding from p-8 to p-6 for a tighter look
        */
        className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 shadow-2xl my-auto"
      >
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-widest">
            New Product Entry
          </h2>
          <p className="text-slate-500 text-xs mt-1">
            Initialize resource parameters
          </p>
        </div>

        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-cyan-500 text-[10px] font-bold uppercase mb-1 tracking-widest">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name..."
              className={inputClasses}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Price Field */}
          <div>
            <label className="block text-cyan-500 text-[10px] font-bold uppercase mb-1 tracking-widest">
              Price
            </label>
            <input
              type="text"
              placeholder="0.00"
              className={inputClasses}
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-cyan-500 text-[10px] font-bold uppercase mb-1 tracking-widest">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="Describe capabilities..."
              className={inputClasses}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white text-sm font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(8,145,178,0.2)] hover:shadow-[0_0_25px_rgba(8,145,178,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
          >
            Save
          </button>
        </div>
      </form>

      {/* Spacer to balance the top Navbar height at the bottom */}
      <div className="h-16 w-full"></div>
    </div>
  );
}

export default Index;
