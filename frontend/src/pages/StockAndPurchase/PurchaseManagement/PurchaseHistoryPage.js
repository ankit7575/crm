import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import PurchaseHistory from "../../../components/Dashboard/StockAndPurchase/PurchaseManagement/PurchaseHistory"; // Import your SalesManagement component

const PurchaseHistoryPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <PurchaseHistory /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PurchaseHistoryPage;
