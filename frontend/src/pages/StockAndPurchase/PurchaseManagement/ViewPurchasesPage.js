import React from "react";
import Layout from "../../../components/Layout/Layout"; // Import your Layout component
import ViewPurchases from "../../../components/Dashboard/StockAndPurchase/PurchaseManagement/ViewPurchases"; // Import your SalesManagement component

const ViewPurchasesPage = () => {
  return (
    <Layout menuType="stock" userRole="admin"> {/* Pass menuType and userRole */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <ViewPurchases /> {/* Render the Sales Management component */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewPurchasesPage;
