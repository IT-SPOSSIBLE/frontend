import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts } from "../../types/features/products/productSlice";
import ProductCard from "../../components/bodyCards/CardImage";
import { Product as ProductType } from "../../types/features/products/productType";
import { motion } from "framer-motion";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import { FaCheck } from "react-icons/fa";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Product: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const dispatch = useAppDispatch();
  const {
    product: products,
    loading,
    error,
  } = useAppSelector((state) => state.products);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    setSelectedProductId(null); // reset selected product when category changes
  }, [activeIndex]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories: string[] = Array.from(
    new Set(
      products
        .map((item: ProductType) => item.category?.category_name?.trim() ?? "")
        .filter((name) => name !== "")
    )
  ).sort((a, b) => a.localeCompare(b));

  const selectedCategory = categories[activeIndex];

  const filteredProducts: ProductType[] = products.filter(
    (product: ProductType) =>
      product.category?.category_name?.trim() === selectedCategory
  );
  const imagesToDisplay = selectedProductId
    ? products.find((p) => p.id === selectedProductId)?.images || []
    : filteredProducts.flatMap((p) => p.images);
  // };
  const getFullImageUrl = (imagePath: string): string => {
    if (!imagePath) return "/placeholder.jpg";

    // Ensure no double slashes when joining
    return `${API_BASE_URL.replace(/\/$/, "")}/${imagePath.replace(/^\//, "")}`;
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
      <div className="grid md:grid-cols-1 lg:grid-cols-6 gap-4 min-h-[600px]">
        <div className="md:col-span-1 bg-white p-4 rounded shadow overflow-auto">
          <h2 className="text-3xl mb-4 text-center">Motor products</h2>
          <div className="flex flex-col gap-3 text-sm ">
            {filteredProducts.map((product) => (
             <button
             key={product.id}
             onClick={() => setSelectedProductId(product.id)}
             className={`flex items-center justify-between px-4 py-2 text-center rounded-sm transition-colors duration-300 ${
               selectedProductId === product.id
                 ? "bg-gray-300/60 text-gray-700"
                 : "bg-gray-100 text-gray-900 hover:bg-gray-200"
             }`}
           >
             <span>{product.title}</span>
             {selectedProductId === product.id && (
               <FaCheck className="text-shadow-blue-200/35 ml-2" />
             )}
           </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-4 rounded shadow overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-items-center">
            {imagesToDisplay.length > 0 ? (
              imagesToDisplay.map((image, idx) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="w-full max-w-xs"
                >
                  <ProductCard
                    imageurl={getFullImageUrl(image.image)}
                    alt={`Pikipiki Image ${idx + 1}`}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                Hakuna picha za pikipiki zinazopatikana
              </div>
            )}
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Product;
