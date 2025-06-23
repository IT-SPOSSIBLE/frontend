import { useNavigate } from "react-router-dom";
import image from '../../assets/itispossible.jpeg'
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt="Second-hand motorcycles"
        className="absolute inset-0 w-full h-full object-cover opacity-60 "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-thirdy/20 to-transparent"></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold animate-grow-x text-white drop-shadow-2xl tracking-wide leading-tight">
          Miliki Ndoto Yako. Leo Hii.
        </h1>
        <p className="mt-6 text-lg md:text-2xl animate-grow-x text-gray-200 max-w-2xl mx-auto drop-shadow-md">
          Pata pikipiki bora za mitumba — zenye hali nzuri, tayari kwa barabara,
          na bei nafuu. Furahia uhuru wa kusafiri kwa mitindo na ufanisi bila
          kutumia pesa nyingi.
        </p>

        <button
          onClick={() => navigate("/product")}
          className="mt-8 px-8 py-3 bg-primary animate-grow-x transition duration-300 ease-in-out hover:animate-pulse-white text-white rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:bg-opacity-90"
        >
          Tazama Pikipiki Zaidi
        </button>
      </div>
    </div>
  );
};

export default Home;
