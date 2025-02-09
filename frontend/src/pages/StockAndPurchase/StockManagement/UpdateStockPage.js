import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import UpdateStock from "../../../components/Dashboard/StockAndPurchase/StockManagement/UpdateStock"; // Import your SalesManagement component

const UpdateStockPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <UpdateStock /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateStockPage;
