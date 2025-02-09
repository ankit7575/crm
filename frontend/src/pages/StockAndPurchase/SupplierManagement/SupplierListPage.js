import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import SupplierList from "../../../components/Dashboard/StockAndPurchase/SupplierManagement/SupplierList"; // Import your SalesManagement component

const SupplierListPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <SupplierList /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupplierListPage;
