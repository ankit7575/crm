import React, { useState, useEffect } from "react";
import "../styles/global.css"; // Ensure global styles are included

const AdminFranchisecategory = () => {
  const [selectedFranchise, setSelectedFranchise] = useState(""); // State for selected franchise
  const [franchiseList, setFranchiseList] = useState([]); // State for franchise options

  // Fetch franchise data from the public folder (data.json)
  useEffect(() => {
    // Use the fetch API to get the data from the public directory
    fetch("/data.json")
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => setFranchiseList(data.franchises)) // Set the data in state
      .catch((error) => console.error("Error loading franchise data: ", error)); // Handle errors
  }, []);

  // Handle franchise selection
  const handleFranchiseChange = (e) => {
    setSelectedFranchise(e.target.value);
  };

  // Check if the selected franchise exists in the data
  const isFranchiseValid = franchiseList.some(
    (franchise) => franchise.location === selectedFranchise
  );

  // Handle the Select button action
  const handleSelectFranchise = () => {
    if (isFranchiseValid) {
      alert(`Logged in to the ${selectedFranchise} Franchise.`);
      // Redirect to the category page after valid franchise selection
      window.location.href = "/category";  // This will redirect to the /category page
    } else {
      alert("Invalid franchise selected.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="franchise-selection-box">
            <h2>Select Franchise</h2>
            <select
              className="franchise-dropdown"
              value={selectedFranchise}
              onChange={handleFranchiseChange}
            >
              <option value="">-- Select Franchise --</option>
              {franchiseList.map((franchise, index) => (
                <option key={index} value={franchise.location}>
                  {franchise.location}
                </option>
              ))}
            </select>
            <div className="pt-3">
              <button
                onClick={handleSelectFranchise}
                className="buttonSignUpPage"
                aria-label="Select franchise"
              >
                Select
              </button>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="forgot-password-container pt-2">
                  <button
                    onClick={() => alert("Redirecting to New Franchise page...")}
                    className="buttonSignUpPage"
                    aria-label="Redirect to New Franchise page"
                  >
                    Franchise Management
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFranchisecategory;
