import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import ProductPartsAddPurchase from "../../../components/Dashboard/StockAndPurchase/PurchaseManagement/ProductPartsAddPurchase"; // Import your SalesManagement component

const ProductPartsAddPurchasePage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <ProductPartsAddPurchase/> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPartsAddPurchasePage;
