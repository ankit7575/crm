import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import UpdatePurchase from "../../../components/Dashboard/StockAndPurchase/PurchaseManagement/UpdatePurchase"; // Import your SalesManagement component

const UpdatePurchasePage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <UpdatePurchase /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdatePurchasePage;
