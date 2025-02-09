import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import AddPurchase from "../../../components/Dashboard/StockAndPurchase/PurchaseManagement/AddPurchase"; // Import your SalesManagement component

const AddPurchasePage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <AddPurchase /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddPurchasePage;
