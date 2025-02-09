import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import ImportStock from "../../../components/Dashboard/StockAndPurchase/StockManagement/ImportStock"; // Import your SalesManagement component

const ImportStockPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <ImportStock /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImportStockPage;
