import {
  MdDirectionsBike,
  MdSearch,
  MdSupportAgent,
  MdBuild,
  MdVerifiedUser,
  MdTouchApp,
  MdThumbUp,
  MdFavorite,
} from "react-icons/md";
import { motion } from "framer-motion";
import image1 from "../../assets/joshua.jpeg";
import image2 from "../../assets/mlekwa.jpeg";
import image3 from "../../assets/chesco.jpeg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Mkuu wa Operesheni (COO)",
      image: image1,
    },
    {
      name: "Mkurugenzi Fedha (CFO)",
      image: image2,
    },
    {
      name: "Afisa Mkuu (CEO)",
      image: image3,
    },
    // Ongeza wengine kama unavyotaka
  ];

  return (
    <div className="w-full min-h-screen bg-secondary text-white">
      <h1 className="text-3xl font-bold text-primary text-shadow-md text-center mt-16 p-4 animate-slide-in">
        Tunapenda Pikipiki, Tunaaminika na Waendesha Pikipiki
      </h1>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-4 items-center flex justify-center container mx-auto p-4">
          <p className="text-gray-900 text-xl text-center animate-slide-in p-8 bg-gray-300 rounded-lg shadow-md">
            Karibu kwenye "it is possiple" – sehemu yako bora ya kununua na
            kuuza pikipiki za mitumba zenye ubora. Sisi ni timu ya wapenzi wa
            pikipiki tunaoamini kila mmoja anastahili usafiri wa kuaminika bila
            kutumia pesa nyingi.
          </p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 container mx-auto animate-slide-in p-4">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="col-span-1 mt-5 bg-gray-300 shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-thirdy text-white p-4 text-center">
              <h3 className="text-xl font-semibold">Sisi Ni Nani</h3>
            </div>

            <div className="p-6 flex flex-col justify-center items-center">
              <p className="text-gray-900 text-center text-lg">
                Tulianzishwa mwaka 2023 na tayari tumewasaidia mamia ya
                waendesha pikipiki kupata usafiri bora au kuuza kwa urahisi na
                usalama. Iwe unataka kuboresha usafiri wako au kuuza pikipiki ya
                zamani, tupo hapa kuhakikisha mchakato ni rahisi, salama na bila
                usumbufu.
              </p>
            </div>

            <div className="bg-gray-100 p-4 text-center">
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition">
                Jifunze Zaidi
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="col-span-1 mt-5 bg-gray-300 shadow-lg rounded-lg overflow-hidden border border-gray-200">
            {/* Section Header */}
            <div className="bg-thirdy text-white p-4 text-center">
              <h3 className="text-xl font-semibold">Tunachofanya</h3>
            </div>

            {/* Section Content */}
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <MdDirectionsBike className="text-3xl text-primary" />
                  <span className="text-gray-800 text-lg">
                    Tunatangaza pikipiki za mitumba zinazouzwa
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MdSearch className="text-3xl text-primary" />
                  <span className="text-gray-800 text-lg">
                    Tunawasaidia wanunuzi kupata pikipiki bora
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MdSupportAgent className="text-3xl text-primary" />
                  <span className="text-gray-800 text-lg">
                    Tunatoa ushauri na msaada wakati wa ununuzi au mauzo
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MdBuild className="text-3xl text-primary" />
                  <span className="text-gray-800 text-lg">
                    Tunakuunganisha na mafundi au watoa huduma wa kuaminika
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="col-span-1 mt-5 bg-gray-300 shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="relative bg-thirdy text-white p-8 text-center overflow-hidden">
              {/* Repeating background text */}
              <div className="absolute inset-0 opacity-10 text-[80px] text-white font-bold whitespace-nowrap pointer-events-none select-none">
                <div className="animate-marquee">
                  UTUCHAGUE • UTUCHAGUE • UTUCHAGUE • UTUCHAGUE • UTUCHAGUE •
                </div>
              </div>

              {/* Foreground content */}
              <h3 className="text-xl font-semibold relative z-10">
                Kwa Nini Utuchague?
              </h3>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <MdVerifiedUser className="text-3xl text-primary" />
                  <span className="text-gray-800 text-lg">
                    Matangazo yaliyohakikiwa
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MdTouchApp className="text-3xl text-primary" />
                  <span className="text-gray-800 text-lg">
                    Urahisi wa kutumia tovuti
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MdThumbUp className="text-3xl text-primary" />
                  <span className="text-gray-800 text-lg">
                    Msaada wa kweli na wa uaminifu
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MdFavorite className="text-3xl text-primary" />
                  <span className="text-gray-800 text-lg">
                    Mapenzi ya dhati kwa pikipiki
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto mt-8 px-4">
        <h3 className="relative text-2xl font-bold text-primary animate-grow-x z-10">
          Kutana na Timu Yetu
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-auto sm:h-60 mt-4 animate-slide-in-x animate-slide-slow-x">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-4 rounded-lg overflow-hidden bg-white shadow-md-primary border border-gray-200  items-center mb-6"
            >
                <div className="col-span-2 w-full h-full flex-shrink-0 ronded-l-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                </div>
                <div className="col-span-2 p-4 bg-primary/70 rounded-r-lg shadow-lg h-full flex  justify-center relative">
                <h4 className="text-sm font-semibold text-white text-center">
                  {member.name}
                </h4>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
