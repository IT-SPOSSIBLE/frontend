import React, { useState, useEffect } from "react";
import CardMoto from "../../components/bodyCards/CardMoto";
import { motion } from "framer-motion";
import { CardDataType } from "../../types/CardData";
import { getAllCards } from "../../api/services/MotoServices"; // Your API call function

const Product: React.FC = () => {
  const [cards, setCards] = useState<CardDataType[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    getAllCards()
      .then(setCards)
      .catch((e) => console.error("Failed to fetch cards", e));
  }, []);

  const categories = Array.from(
    new Set(cards.map((item) => item.category.category_name))
  );

  const selectedCategory = categories[activeIndex];
  const filteredCard = cards.filter(
    (card) => card.category.category_name === selectedCategory
  );

  return (
    <div className="w-full min-h-screen bg-gray-200">
      <h1 className="text-lg text-primary md:text-3xl mt-16 p-4 font-bold text-center shadow-md bg-white rounded-r-lg">
        Gundua Pikipiki Zote
      </h1>

      <motion.div>
        <div className="flex flex-wrap gap-4 px-4 my-4 border-b border-gray-300 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 shadow-md
              ${
                activeIndex === index
                  ? "text-white bg-primary hover:bg-primary-dark font-semibold"
                  : "text-gray-900 bg-white hover:bg-gray-100 font-medium"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 justify-items-center">
        {filteredCard.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="w-full flex justify-center"
          >
            <CardMoto
              title={item.title}
              price={item.price}
              image={item.motocycleImage?.image || "/placeholder.jpg"}
              status={item.status}
              category={item.category.category_name}
              createdAt={item.created_at}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Product;
