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
                to={`/${option.toLowerCase().replace(/ /g, "-")}`} // ✅ Fixed space replacement globally
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

// ✅ Add PropTypes validation for Dropdown
Dropdown.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

// Main Navigation Component
function SaleNavigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleDropdown = (category) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const menuItems = [
    {
      category: "Sales Management",
      options: ["New Sale", "Pending Sales", "Completed Sales", "Customer Orders", "Sales Returns"],
    },
    {
      category: "Invoices",
      options: ["Generate Invoice", "Invoice History", "Pending Payments", "Payment Receipts"],
    },
    {
      category: "Discounts and Offers",
      options: ["Create Discount", "Active Discounts", "Expired Discounts", "Customer-Specific Discounts"],
    },
    {
      category: "Customer Management",
      options: ["Customer List", "Add New Customer", "Customer Profiles", "Customer Feedback"],
    },
    {
      category: "Sales Analytics",
      options: [
        "Sales Dashboard",
        "Sales by Product",
        "Sales by Region",
        "Customer Insights",
        "Sales Growth Trends",
      ],
    },
    {
      category: "Sales Reports",
      options: [
        "Daily Sales Report",
        "Monthly Sales Report",
        "Yearly Sales Report",
        "Custom Date Range Report",
        "Profit Margins",
      ],
    },
    {
      category: "Order Fulfillment",
      options: ["Packing Slips", "Shipment Tracking", "Delivery Status"],
    },
    {
      category: "Payment Management",
      options: ["Payment Methods", "Partial Payments", "Refund Processing"],
    },
    {
      category: "Returns and Refunds",
      options: ["Return Requests", "Refund Status", "Damaged Goods Returns"],
    },
    {
      category: "User Permissions",
      options: ["Sales Team Access", "Assign Sales Leads", "Performance Metrics"],
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

export default SaleNavigation;
