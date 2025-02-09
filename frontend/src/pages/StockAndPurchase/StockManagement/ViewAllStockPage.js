import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import ViewAllStock from "../../../components/Dashboard/StockAndPurchase/StockManagement/ViewAllStock"; // Import your SalesManagement component

const ViewAllStockPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <ViewAllStock /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewAllStockPage;
