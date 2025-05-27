// components/bodyCards/CardMoto.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export interface CardMotoProps {
  title: string;
  price: number;
  image: string;
  status: string;
  category: string;
  createdAt: string;
}

const CardMoto: React.FC<CardMotoProps> = ({
  title,
  price,
  image,
  status,
  category,
  createdAt,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // You might want to pass an ID or slug to navigate to a specific moto's page
    // e.g., navigate(`/motos/${title.toLowerCase().replace(/\s+/g, '-')}`);
    navigate("/more"); // Placeholder for now
  };
  const formattedPrice = new Intl.NumberFormat('sw-TZ', {
    style: 'currency',
    currency: 'TZS',
    minimumFractionDigits: 0,
  }).format(price);
  

  return (
    <div
      className="
        group // For group hover effects
        w-[300px] sm:w-[320px] rounded-xl bg-white dark:bg-[var(--color-secondary)]
        shadow-lg hover:shadow-xl dark:shadow-slate-700/50 dark:hover:shadow-slate-700/70
        overflow-hidden
        transition-all duration-300 ease-in-out
        flex flex-col
        cursor-pointer
      "
      onClick={handleNavigate} // Make the whole card clickable
    >
      {/* Image Container with Hover Effect */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={image}
          alt={`Image of ${title}`}
          className="
            w-full h-full object-cover
            transition-transform duration-300 ease-in-out
            group-hover:scale-105
          "
        />
        {/* Status Badge */}
        <span
          className={`
            absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full
            ${
              status === "available"
                ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
            }
            shadow-sm
          `}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-[var(--color-primary)] dark:text-orange-400 font-medium mb-1">
          {category}
        </p>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 truncate group-hover:text-[var(--color-primary)] dark:group-hover:text-orange-400 transition-colors">
          {title}
        </h3>

        <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          {formattedPrice}
        </p>

        {/* Spacer to push button to bottom if content is short */}
        <div className="flex-grow"></div>

        {/* Footer Info & Action */}
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {new Date(createdAt).toLocaleDateString()}
          </p>
          <button
            // onClick is now on the parent div, but we can keep this for explicit click target / styling
            // or remove it if the whole card click is sufficient.
            // For accessibility, having a button is good.
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent onClick if this button has a different action
              handleNavigate();
            }}
            className="
              px-4 py-1.5 text-sm font-medium
              bg-[var(--color-primary)] text-white
              rounded-md
              hover:bg-orange-600 dark:hover:bg-orange-400
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50
              transition-colors duration-200
            "
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMoto;