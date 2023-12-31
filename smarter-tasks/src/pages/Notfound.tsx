import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const BackToHomePage = () => {
    navigate("/home");
  };
  return (
    <div className="container py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Error 404 - Page Not Found</h1>
      <p className="text-gray-600-bold mb-8 text-xl">
        The page you are looking for does not exist. Please return to the home
        page by clicking on the button.
      </p>
      <button
        id="backToHomeButton"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={BackToHomePage}
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
