import React from "react";
import AdminFranchisecategory from "../components/AdminFranchisecategory";  // Assuming this is the sign-up form component
import '../styles/global.css';  // Ensure global styles are included

const AdminFranchisecategoryPage = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="registration-page">
         
            <AdminFranchisecategory />

           
        </div>
      </div>
    </>
  );
};

export default AdminFranchisecategoryPage;
