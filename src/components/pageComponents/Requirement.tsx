
const Requirement = () => {
  return (
    <div className="w-full min-h-screen bg-secondary text-white px-6 py-12">
   <div className="relative text-center mt-8">
  {/* Background Decorative Text */}
  <div
    className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none"
    aria-hidden="true"
  >
    <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] font-medium text-gray-300 opacity-5 whitespace-nowrap select-none tracking-wide">
      Mahitaji Muhimu
    </h1>
  </div>

  {/* Foreground Main Title */}
  <h1 className="relative text-2xl font-bold text-primary text-shadow-md animate-slide-in z-10">
    Mahitaji Muhimu
  </h1>
</div>

      <p className="text-lg  text-center max-w-3xl mx-auto mb-10 mt-4 bg-primary/50 rounded-lg p-8 ">
        Kabla ya kununua pikipiki ya mitumba kupitia mfumo wetu, hakikisha umekidhi vigezo vifuatavyo ili kuhakikisha mchakato unakuwa salama na rahisi.
      </p>

      <div className="max-w-4xl mx-auto p-8 space-y-6">
        <RequirementItem
          title="1. Kitambulisho Halali"
          description="Andaa nakala ya kitambulisho chako (NIDA, Leseni ya Udereva, au Kitambulisho cha Mpiga Kura) kuthibitisha utambulisho."
        />
        <RequirementItem
          title="2. Malipo ya Awali"
          description="Kwa baadhi ya pikipiki, malipo ya awali ya asilimia fulani ya bei yanahitajika kabla ya makubaliano ya mwisho."
        />
        <RequirementItem
          title="3. Makubaliano ya Mkataba"
          description="Soma na ukubaliane na masharti ya mkataba wa mauziano. Tunatoa mkataba rasmi ulio wazi na wa haki."
        />
        <RequirementItem
          title="4. Uthibitisho wa Makazi"
          description="Toa uthibitisho wa mahali unapoishi, kama bili ya maji/umeme au barua ya utambulisho wa mtaa."
        />
        <RequirementItem
          title="5. Mawasiliano Sahihi"
          description="Hakikisha unatoa namba ya simu inayopatikana na anwani sahihi kwa mawasiliano ya haraka."
        />
      </div>

      <div className="text-center mt-12">
       
      </div>
    </div>
  );
};

const RequirementItem = ({ title, description }: { title: string; description: string }) => (
  <div className="border-l-4 border-primary pl-4">
    <h2 className="text-xl font-semibold text-white animate-grow-x">{title}</h2>
    <p className="text-white mt-1 animate-grow-x">{description}</p>
  </div>
);

export default Requirement;
