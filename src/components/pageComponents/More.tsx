import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../types/features/images/imageSlice";
import { RootState, AppDispatch } from "../../app/store";
import { useLocation } from "react-router-dom";
import { Product } from "../../types/features/products/productType";

const More = () => {
  const location = useLocation();
  const product = location.state?.product as Product | undefined;
  const [showbox, setShowbox] = useState(false);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { images, loading, error } = useSelector(
    (state: RootState) => state.images
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchImages(Number(id)));
    }
  }, [dispatch, id]);
  const handlebox = () => {
    if (!showbox) {
      setShowbox(true);
    } else {
      setShowbox(false);
    }
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading) return <div>Loading images...</div>;
  if (error) return <div>Error loading images: {error}</div>;
  if (images.length === 0) return <div>No images found for this product.</div>;

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center px-4">
      <div className="flex flex-col md:flex-row bg-gray-900  shadow-lg overflow-hidden max-w-5xl w-full">
        <div className="relative md:w-2/3 w-full h-[400px] md:h-[500px] bg-gray-300">
          <img
            src={`${import.meta.env.VITE_API_BASE_URL}${
              images[currentIndex].image
            }`}
            className="object-conatin h-full w-full"
            alt={`Product image ${currentIndex + 1}`}
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {product ? (
          <div className="bg-gradient-to-r from-[#ffff] to-secondary md:w-1/3 w-full hover:scale-105 hover:shadow-2xl hover:brightness-110 transition duration-300 border border-gray-300 rounded-lg shadow-sm p-5 text-sm flex-wrap gap-x-4 gap-y-1 text-gray-800">
            <h3 className="text-gray-800 text-xl font-bold mb-2">
              {product.title}
            </h3>
            <hr className="mb-3 border-gray-400" />

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Price:</span> TZS{" "}
              {product.price.toLocaleString()}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Category:</span>{" "}
              {product.category.category_name}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Posted:</span>{" "}
              {new Date(product.created_at).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`font-bold ${
                  product.status === "available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.status}
              </span>
            </p>

            <button
              onClick={handlebox}
              className="w-full bg-secondary text-primary font-semibold px-4 py-2 rounded hover:bg-secondary/70 hover:text-white transition text-xl"
            >
              Wasiliana na Muuzaji
            </button>
          </div>
        ) : (
          <p className="text-gray-600">Hakuna taarifa za bidhaa hii.</p>
        )}
      </div>
      {showbox && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowbox(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-64 h-auto bg-secondary flex items-center justify-center rounded shadow-lg p-6 text-white
           transform transition-all duration-500 ease-in-out scale-90 translate-y-4 opacity-0
           animate-fade-in"
          >
            <div className="text-center">
              <p className="mb-4 font-semibold text-lg">Wasiliana na Muuzaji</p>
              <div>
                <ul className="text-left text-white space-y-2">
                  <li>
                    <span className="font-semibold">📞 Simu 1:</span> +255 712
                    345 678
                  </li>
                  <li>
                    <span className="font-semibold">📞 Simu 2:</span> +255 713
                    456 789
                  </li>
                  <li>
                    <span className="font-semibold">📞 Simu 3:</span> +255 714
                    567 890
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setShowbox(false)}
                className="mt-6 bg-white text-secondary px-4 py-2 rounded hover:bg-gray-200"
              >
                Funga
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default More;
