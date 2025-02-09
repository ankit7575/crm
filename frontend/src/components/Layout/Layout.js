import React, { useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import SaleNavigation from "../Menu/SaleNavigation"; // Adjust path as needed
import PurchasesNavigation from "../Menu/PurchasesNavigation"; // Adjust path as needed
import StockNavigation from "../Menu/StockNavigation"; // Adjust path as needed
import "./Layout.css"; // Import CSS for layout styles

const Layout = ({ children, userRole, menuType }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Determine which navigation menu to render based on `menuType` and `userRole`
  const renderNavigationMenu = () => {
    if (menuType === "sales") {
      return <SaleNavigation />;
    } else if (userRole === "admin" && menuType === "purchases") {
      return <PurchasesNavigation />;
    } else if (userRole === "admin" && menuType === "stock") {
      return <StockNavigation />;
    }
    return <StockNavigation />; // Default to Stock Navigation if no role or type matches
  };

  return (
    <div className="layout">
      {/* Sidebar toggle button for mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {renderNavigationMenu()}
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
};

// ✅ Add PropTypes validation for Layout component
Layout.propTypes = {
  children: PropTypes.node.isRequired, // `children` must be a valid React node
  userRole: PropTypes.string, // `userRole` is optional but should be a string
  menuType: PropTypes.string, // `menuType` is optional but should be a string
};

export default Layout;
