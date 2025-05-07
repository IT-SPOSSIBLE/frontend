import React from "react";
import { useNavigate } from "react-router-dom";

export interface CardProps {

  title: string;
  value: string;
  image: string;
  className?: string; 
}

const CardMoto: React.FC<CardProps> = ({ title, value, image }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/more");
  };

  return (
    <div className="w-[340px] h-[360px] rounded-lg bg-secondary relative shadow-md overflow-hidden">
      
      {/* Top Section */}
      <div className="w-full h-[100px] grid grid-cols-3 gap-4 mt-4 text-white px-2">
        <div className="flex justify-center items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-base font-medium">{value}</p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleNavigate}
            className="px-3 py-1 bg-white text-secondary rounded hover:bg-gray-100 transition"
          >
            Explore
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="absolute bottom-0 left-0 w-full h-[260px] bg-white rounded-lg shadow-md">
        <img
          src={image}
          alt={`Image for ${title}`}
          className="w-full h-full object-cover rounded-b-lg"
        />
      </div>
    </div>
  );
};

export default CardMoto;
