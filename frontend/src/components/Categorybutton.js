import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css"; // Ensure global styles are included

const Categorybutton = () => {
  const navigate = useNavigate(); // React Router's navigate hook

  const handleCategoryClick = (category) => {
    if (category === "Sales") {
      navigate("/sales"); // Navigate to /sales
    } else if (category === "Stock") {
      navigate("/stock"); // Navigate to /stock
    }
  };

  return (
    <div className="home-layout">
      <h2 className="home-title">Choose Your Category</h2>
      <div className="row justify-content-center">
        {/* Sales */}
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
          <div
            className="franchise-card card-stock2"
            onClick={() => handleCategoryClick("Sales")}
          >
            <p className="category-text">Sales</p>
          </div>
        </div>

        {/* Stock */}
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
          <div
            className="franchise-card card-stock2"
            onClick={() => handleCategoryClick("Stock")}
          >
            <p className="category-text">Stock</p>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
          <div
            className="franchise-card card-stock2"
            onClick={() => handleCategoryClick("Stock")}
          >
            <p className="category-text">Profit & Loss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorybutton;
