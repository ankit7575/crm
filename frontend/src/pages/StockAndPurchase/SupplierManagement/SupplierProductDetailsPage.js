import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import SupplierProductDetails from "../../../components/Dashboard/StockAndPurchase/SupplierManagement/SupplierProductDetails"; // Import your SalesManagement component

const SupplierProductDetailsPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <SupplierProductDetails /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupplierProductDetailsPage;
