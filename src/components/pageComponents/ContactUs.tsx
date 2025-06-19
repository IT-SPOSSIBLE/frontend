import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa";
import { motion } from "framer-motion";
const ContactUs = () => {
  return (
    <div className="w-full min-h-screen motion-present-bounce bg-gray-300 text-white">
      <div className="relative text-center mt-16">
  
  {/* Foreground Main Title */}
  <h1 className="relative text-3xl font-bold text-primary text-shadow-md animate-slide-in z-10 ">
    Tunafurahi Kusikia Kutoka Kwako!
  </h1>
</div>

      
      <motion.div 
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
     <div className="container mx-auto p-4 flex  flex-col items-center text-center text-gray-900 mt-4">
        <p className="max-w-xl bg-white/40 shadow-md rounded-md text-2xl p-8 transition duration-300 ease-in-out hover:animate-pulse-white text-secondary">
          Una swali, unahitaji msaada, au unataka kuweka tangazo la pikipiki
          yako? Usisite kuwasiliana nasi — tupo kwa ajili yako kila wakati.
        </p>
      </div>
    </motion.div>
      <div className="px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-secondary">
        {/* Sehemu ya Mawasiliano */}

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 flex flex-col justify-center items-center right-0 top-0 text-2xl">
            <h2 className="text-2xl font-semibold text-shadow-sm text-center">
              Taarifa za Mawasiliano
            </h2>
            <p className="flex items-center gap-2">
              <MdEmail className="text-primary text-xl" />
              finesawa36@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MdPhone className=" text-primary text-xl" />
              +255 123 456 789
            </p>
            <p className="flex items-center gap-2">
              <MdLocationOn className=" text-primary text-xl" />
              Eneo lako (hiari)
            </p>
            <div>
              <h3 className="text-2xl font-medium  flex items-center gap-2">
                <MdAccessTime className="text-primary text-xl" />
                Saa za Kufungua
              </h3>
              <p>Jumapili – Ijumaa: 3:00 Asubuhi – 12:00 Jioni</p>
              <p>Jumamosi: Tumefungwa</p>
            </div>
          </div>
        </motion.div>
        {/* Fomu ya Ujumbe */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-secondary justify-center items-center left-0 top-0 text-2xl">
            <form className="w-full h-full space-y-4">
              <h2 className="m-4 p-8 text-2xl font-semibold text-shadow-sm text-center">
                Tutumie Ujumbe
              </h2>
              <div className="mx-4 px-8">
                <input
                  type="text"
                  placeholder="Jina Kamili"
                  className="w-full border border-first p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-0"
                />
              </div>
              <div className="mx-4 px-8">
                <input
                  type="email"
                  placeholder="Barua Pepe"
                  className="w-full border border-first p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-0"
                />
              </div>
              <div className="mx-4 px-8">
                <textarea
                  placeholder="Ujumbe Wako / Kichwa cha Habari"
                  rows={4}
                  className="w-full border border-first p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-0"
                ></textarea>
              </div>
              <button
                type="submit"
                className="ms-12 p-8 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
              >
                Tuma Ujumbe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Mapambo ya Pikipiki */}
      <div className="flex flex-row justify-center items-center gap-8 mt-8  container mx-auto">
        <div className="p-4">
          <FaMotorcycle className="text-5xl text-primary" />
        </div>
        <div className="p-4">
          <FaMotorcycle className="text-5xl text-primary" />
        </div>
        <div className="p-4">
          <FaMotorcycle className="text-5xl text-primary" />
        </div>
      </div>
    </div>
    
  );
};

export default ContactUs;
