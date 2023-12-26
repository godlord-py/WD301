import React from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard: React.FC = () => {
  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem('userData') || '');
    // Logout function to clear user data from localStorage
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        // Navigate to the login page
        navigate('/signin');
        console.log("Removed")
        }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <button
            id="logout-link"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={logout}
        ></button>
      </div>
    </div>
  );
}

export default Dashboard;
