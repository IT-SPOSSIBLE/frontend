import React, { useState } from "react";
import CardMoto from "../../components/bodyCards/CardMoto";
import { cardData } from "../../types/CardData";
import { motion } from "framer-motion";

const categories = Array.from(new Set(cardData.map((item) => item.category)));

const Product: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Kuweka kumbukumbu ya kategoria iliyochaguliwa

  const selectedCategory = categories[activeIndex];
  const filteredCard = cardData.filter(
    (card) => card.category === selectedCategory
  );

  return (
    <div className="w-full min-h-screen bg-gray-300 mt-4">
      {/* Kichwa cha ukurasa */}
      <h1 className="mt-8 text-3xl text-center rounded-sm text-primary">
      Gundua Pikipiki Zote
      </h1>

      <motion.div>
      
      <div className="flex flex-wrap gap-4 px-4  my-4 border-b border-gray-200 justify-center text-2xl">
        {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`relative px-6 py-3 text-sm font-medium slide-in-slow-right-to-left rounded-full transition-all duration-300 shadow-md
          ${
          activeIndex === index
            ? "text-white bg-primary hover:bg-primary-dark whitespace-nowrap font-semibold text-2xl"
            : "text-gray-900 bg-white hover:bg-gray-100 whitespace-nowrap font-medium"
          }`}
        >
          {category}
          {activeIndex === index && (
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 h-1 w-10 bg-white rounded-full shadow-md" />
          )}
        </button>
        ))}
      </div>
      </motion.div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4 justify-items-center text-2xl">
        {filteredCard.map((item, index) => (
          <motion.div
        key={index}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="w-full flex justify-center"
          >
        <CardMoto
          title={item.title}
          value={item.value}
          image={item.image}
          className="shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
        />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Product;
