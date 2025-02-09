import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import AddSupplier from "../../../components/Dashboard/StockAndPurchase/SupplierManagement/AddSupplier"; // Import your SalesManagement component

const AddSupplierPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <AddSupplier /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddSupplierPage;
