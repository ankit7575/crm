import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import AddStock from "../../../components/Dashboard/StockAndPurchase/StockManagement/AddStock"; // Import your SalesManagement component

const AddStockPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <AddStock /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddStockPage;
