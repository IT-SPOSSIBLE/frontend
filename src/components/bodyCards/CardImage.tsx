// import { FaEye } from "react-icons/fa";

interface CardImageProps {
  imageurl: string;
  alt?: string;
}

const CardImage = ({ imageurl, alt = "motor card" }: CardImageProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg w-full h-60 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={imageurl}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
     <div className="absolute inset-0 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
  <button
    className="absolute bottom-4 bg-primary rounded-full text-white px-6 py-2"
  >
    Explore Product
  </button>
</div>

    </div>
  );
};

export default CardImage;
