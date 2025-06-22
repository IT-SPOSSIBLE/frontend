import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts } from "../../types/features/products/productSlice";
import ProductCard from "../../components/bodyCards/Card";
import { Product as ProductType } from "../../types/features/products/productType";
import { motion } from "framer-motion";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Product: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    product: products,
    loading,
    error,
  } = useAppSelector((state) => state.products);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories: string[] = Array.from(
    new Set(products.map((item: ProductType) => item.category.category_name))
  );

  const selectedCategory = categories[activeIndex];

  const filteredProducts: ProductType[] = products.filter(
    (product: ProductType) => product.category.category_name === selectedCategory
  );

  const handleViewDetails = (id: number): void => {
    console.log("View product ID:", id);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="w-full min-h-screen bg-gray-100 mt-4 pb-8">
      <h1 className="pt-8 text-3xl text-center text-primary font-bold">
        Angalia pikipiki zote zilizopo
      </h1>

      <motion.div>
        <div className="flex flex-wrap gap-4 px-4 my-6 border-b border-gray-200 justify-center text-lg">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 shadow-md
                ${
                  activeIndex === index
                    ? "text-white bg-primary hover:bg-primary-dark whitespace-nowrap font-semibold"
                    : "text-gray-900 bg-white hover:bg-gray-100 whitespace-nowrap"
                }`}
            >
              {category}
              {activeIndex === index && (
                <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 h-1 w-8 bg-white rounded-full shadow-md" />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 justify-items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="w-full max-w-xs"
            >
              <ProductCard
                product={product}
               
                onViewDetails={handleViewDetails}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            Hakuna pikipiki zilizopatikana katika kategoria hii
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
