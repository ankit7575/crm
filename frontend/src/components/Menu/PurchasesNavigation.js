import React, { useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes for prop validation
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
      <div className="category-wrapper" onClick={handleDropdownClick}>
        <div className={`category-inner-wrapper ${isOpen ? "category-selected" : ""}`}>
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
                to={`/${option.toLowerCase().replace(/ /g, "-")}`} // ✅ Correct space replacement globally
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

// ✅ Add PropTypes validation for Dropdown component
Dropdown.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

// Main Navigation Component for Purchases
function PurchasesNavigation() {
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
      options: ["New Purchase Order", "Pending Purchase Orders", "Completed Purchase Orders", "Purchase Returns"],
    },
    {
      category: "Supplier Management",
      options: ["Add New Supplier", "Supplier List", "Supplier Orders"],
    },
    {
      category: "Invoice Management",
      options: ["Generate Purchase Invoice", "Pending Invoices", "Invoice History"],
    },
    {
      category: "Payment Management",
      options: ["Record Payments", "Pending Payments", "Payment History"],
    },
    {
      category: "Reports & Analytics",
      options: ["Purchase Reports", "Supplier Reports", "Payment Reports"],
    },
  ];

  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <h1 className="white">Haryana Electric Scooty</h1>
        </li>
        {menuItems.map((menu, index) => (
          <Dropdown
            key={index}
            category={menu.category}
            options={menu.options}
            isOpen={isDropdownOpen[menu.category] || false} // ✅ Ensure default state
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

export default PurchasesNavigation;
