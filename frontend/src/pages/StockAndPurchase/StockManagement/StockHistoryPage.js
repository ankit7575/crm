import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import StockHistory from "../../../components/Dashboard/StockAndPurchase/StockManagement/StockHistory"; // Import your SalesManagement component

const StockHistoryPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <StockHistory /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StockHistoryPage;
