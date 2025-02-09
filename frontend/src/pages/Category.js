import React from "react";
import Categorybutton from "../components/Categorybutton";  // Assuming this is the sign-up form component
import '../styles/global.css';  // Ensure global styles are included

const Category = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="registration-page">
         
            <Categorybutton />

           
        </div>
      </div>
    </>
  );
};

export default Category;
