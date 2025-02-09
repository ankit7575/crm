import React, { useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import { Link } from "react-router-dom";
import "./Navigation.css"; // Ensure your styles are included

// Dropdown Component for displaying categories and their options
function Dropdown({ category, options, isOpen, onToggle }) {
  const handleDropdownClick = (e) => {
    e.stopPropagation(); // Prevent the dropdown from toggling when clicking inside
    onToggle();
  };

  return (
    <li className="menu-category">
      <div
        className="category-wrapper"
        onClick={handleDropdownClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleDropdownClick(e);
        }}
      >
        <div
          className={`category-inner-wrapper ${isOpen ? "category-selected" : ""}`}
        >
          <span className="category-title">
            {category}
            <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
          </span>
        </div>
      </div>
      {isOpen && (
        <ul className="subcategory-list">
          {options.map((option, index) => (
            <li className="subcategory-item" key={index}>
              <Link
                to={`/${option.toLowerCase().replace(/ /g, "-")}`} // Ensure this matches your route paths
                className="subcategory-link"
              >
                {option}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// ✅ Add PropTypes validation
Dropdown.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

// Main Navigation Component for Stock
function StockNavigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleDropdown = (category) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const menuItems = [
    {
      category: "Purchase Management",
      options: [
        "View Purchases",
        "Add Purchase",
        "Product Parts Add Purchase",
        "Update Purchase",
      ],
    },
    {
      category: "Stock Management",
      options: ["Add Stock", "Update Stock", "View All Stock"],
    },
    {
      category: "Supplier Management",
      options: [
        "Add Supplier",
        "Supplier Details",
        "Supplier List",
        "Supplier Product Details",
      ],
    },
    {
      category: "Return and Refund",
      options: ["Return Product List", "Refund Product List"],
    },
  ];

  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <h1 className="white">Haryana Electric Scooty</h1>
        </li>
        <li>
          <Link className="menu-item" to="/Stock">
            Dashboard
          </Link>
        </li>
        {menuItems.map((menu, index) => (
          <Dropdown
            key={index}
            category={menu.category}
            options={menu.options}
            isOpen={isDropdownOpen[menu.category] || false}
            onToggle={() => toggleDropdown(menu.category)}
          />
        ))}
        <li>
          <Link className="menu-item" to="/logout">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default StockNavigation;
