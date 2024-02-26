import React from "react";
import { useNavigate } from "react-router-dom";

function AlreadyVoted() {
    const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center min-h-fit pt-10 flex-col">
      <img
        src={require("../assets/vote-complete.jpg")}
        alt="Bruh, you came to vote again?"
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

export default AlreadyVoted;
