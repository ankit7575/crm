import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Authentication pages
import SignUpAndVerifyForm from "./pages/SignUpPage";
import Category from "./pages/Category";
import LoginPage from "./pages/LoginPage";
import AdminFranchisecategoryPage from "./pages/AdminFranchisecategoryPage";
import SalesDashboardPage from "./pages/SalesDashboardPage";


import PurchasesDashboradPage from "./pages/StockAndPurchase/PurchasesDashboradPage";
// 404 Not Found page
import NotFoundPage from "./pages/NotFoundPage";



// Purchase Management components
import AddPurchasePage from "./pages/StockAndPurchase/PurchaseManagement/AddPurchasePage";
import PurchaseHistoryPage from "./pages/StockAndPurchase/PurchaseManagement/PurchaseHistoryPage";
import UpdatePurchasePage from "./pages/StockAndPurchase/PurchaseManagement/UpdatePurchasePage";
import ViewPurchasesPage from "./pages/StockAndPurchase/PurchaseManagement/ViewPurchasesPage";
import ProductPartsAddPurchasePage from "./pages/StockAndPurchase/PurchaseManagement/ProductPartsAddPurchasePage";

// Stock Management components
import AddStockPage from "./pages/StockAndPurchase/StockManagement/AddStockPage";
import ExportStockPage from "./pages/StockAndPurchase/StockManagement/ExportStockPage";
import ImportStockPage from "./pages/StockAndPurchase/StockManagement/ImportStockPage";
import StockHistoryPage from "./pages/StockAndPurchase/StockManagement/StockHistoryPage";
import UpdateStockPage from "./pages/StockAndPurchase/StockManagement/UpdateStockPage";
import ViewAllStockPage from "./pages/StockAndPurchase/StockManagement/ViewAllStockPage";

// Supplier Management components
import AddSupplierPage from "./pages/StockAndPurchase/SupplierManagement/AddSupplierPage";
import SupplierDetailsPage from "./pages/StockAndPurchase/SupplierManagement/SupplierDetailsPage";
import SupplierListPage from "./pages/StockAndPurchase/SupplierManagement/SupplierListPage";
import SupplierProductDetailsPage from "./pages/StockAndPurchase/SupplierManagement/SupplierProductDetailsPage";

const App = () => {



  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {/* Signup Page */}
        <Route path="/signup" element={<SignUpAndVerifyForm />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/franchisecategory" element={<AdminFranchisecategoryPage />} />
        <Route path="/sales" element={<SalesDashboardPage />} />
        <Route path="/purchases" element={<PurchasesDashboradPage />} />
        <Route path="/stock" element={<PurchasesDashboradPage />} />

        {/* Purchase Management Routes */}
        <Route path="/add-purchase" element={<AddPurchasePage />} />
        <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
        <Route path="/update-purchase" element={<UpdatePurchasePage />} />
        <Route path="/view-purchases" element={<ViewPurchasesPage />} />
        <Route path="/product-parts-add-purchase" element={<ProductPartsAddPurchasePage />} />
        
        {/* Stock Management Routes */}
        <Route path="/add-stock" element={<AddStockPage />} />
        <Route path="/export-stock" element={<ExportStockPage />} />
        <Route path="/import-stock" element={<ImportStockPage />} />
        <Route path="/stock-history" element={<StockHistoryPage />} />
        <Route path="/update-stock" element={<UpdateStockPage />} />
        <Route path="/view-all-stock" element={<ViewAllStockPage />} />

        {/* Supplier Management Routes */}
        <Route path="/add-supplier" element={<AddSupplierPage />} />
        <Route path="/supplier-details" element={<SupplierDetailsPage />} />
        <Route path="/suppliers" element={<SupplierListPage />} />
        <Route path="/supplier-product-details/:supplierId" element={<SupplierProductDetailsPage />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
