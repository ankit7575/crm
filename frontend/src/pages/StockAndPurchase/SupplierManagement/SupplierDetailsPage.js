import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import SupplierDetails from "../../../components/Dashboard/StockAndPurchase/SupplierManagement/SupplierDetails"; // Import your SalesManagement component

const SupplierDetailsPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <SupplierDetails /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupplierDetailsPage;
