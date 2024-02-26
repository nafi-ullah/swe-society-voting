import React from "react";
import { useNavigate } from "react-router-dom";

function VoteCastSuccess() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center min-h-full flex-col m-6">
      <img
        src={require("../assets/success-meme.png")}
        alt="Vote Cast Successfully"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10"
        onClick={handleButtonClick}
      >
        Go Back
      </button>
    </div>
  );
}

export default VoteCastSuccess;
