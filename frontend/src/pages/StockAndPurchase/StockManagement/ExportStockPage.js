import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import ExportStock from "../../../components/Dashboard/StockAndPurchase/StockManagement/ExportStock"; // Import your SalesManagement component

const ExportStockPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <ExportStock /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExportStockPage;
