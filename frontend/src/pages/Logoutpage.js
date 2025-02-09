import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, clearErrors } from '../actions/userActions';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.user); // Retrieve error and authentication state from redux

  useEffect(() => {
    // Check if the user is already logged out
    if (!isAuthenticated) {
      // If the user is already logged out, prevent redundant logout action and redirect to login
      navigate('/login');
      return;
    }

    const handleLogout = async () => {
      await dispatch(logout()); // Trigger the logout action
      navigate('/login'); // Redirect to the login page
    };

    handleLogout();

    // Clear any leftover errors in case of failed logout attempts
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch, navigate, isAuthenticated]); // Depend on isAuthenticated to prevent unnecessary reruns

  return (
    <div className="logout-page">
      <h2>Logging Out...</h2>
      <p>Please wait while we log you out.</p>
      {error && <p className="error-message">Logout failed: {error}</p>} {/* Display error if logout fails */}
    </div>
  );
};

export default LogoutPage;
