import React from "react";
import Layout from "../../components/Layout/Layout"; // Import your Layout component
import Home from "../../components/Dashboard/StockAndPurchase/Home/Home"; // Import your SalesManagement component

const PurchasesDashboradPage = () => {
  return (
    <Layout menuType="Stock" userRole="admin"> {/* Pass menuType and userRole */}
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

export default PurchasesDashboradPage;
