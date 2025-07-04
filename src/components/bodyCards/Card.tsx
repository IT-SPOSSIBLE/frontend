import React from "react";
import { Product } from "../../types/features/products/productType";
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";
interface Props {
  product: Product;
  onViewDetails?: (id: number) => void;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = (product: Product) => {
    navigate(`/more/${product.id}`, { state: { product } });
  };

  const { title, price, status, created_at, category } = product;

  return (
    <div
      className="bg-gradient-to-r from-[#ffff] to-secondary group-hover:from-white  group-hover:to-[#154360]
 hover:scale-105 hover:shadow-2xl  group-hover:brightness-110 transition duration-300  border-primary border-2 rounded-lg shadow-sm w-80 mx-auto h-96"
    >
      <div className="relative">
        {/* <img
                   src='https://www.shutterstock.com/image-photo/motorbike-on-road-riding-having-260nw-1838812744.jpg'
                    alt={title}
                    className="w-full h-44 object-conatin border-b border-gray-200 p-2"
                /> */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs rounded-full font-semibold shadow ${
            status === "available"
              ? "bg-green-200 text-green-900 border border-green-400"
              : "bg-gray-200 text-gray-700 border border-gray-400"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="p-5 text-sm flex-wrap gap-x-4 gap-y-1 ">
        <h3 className=" text-gray-800 mb-2">{title}</h3>
        <hr className="mb-3" />
        <p className="text-gray-700 mb-1">
          <span className="">Price:</span> ${price.toLocaleString()}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="">Category:</span> {category.category_name}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="">Posted:</span>{" "}
          {new Date(created_at).toLocaleDateString()}
        </p>
        <Button
          onClick={() => handleViewDetails(product)}
          className="w-full bg-secondary  text-primary font-semibold px-4 py-2 rounded hover:bg-secondary/70 hover:text-white transition text-2xl"
        >
          Angalia Zaidi pikipiki hii
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
