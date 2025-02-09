import React from "react";
import Layout from "../components/Layout/Layout"; // Import your Layout component
import Home from "../components/Dashboard/Stock/Home"; // Import your SalesManagement component

const StockDashboradPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Home /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StockDashboradPage;
