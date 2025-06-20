
const AppPromiseLoader = () => {
  return (
    <div className="fixed  inset-0 z-50 bg-gradient-to-br from-indigo-200 via-white to-indigo-100 flex items-center justify-center backdrop-blur-md">
      <div className="relative flex flex-col items-center gap-6 px-6 text-center animate-fade-in">

        {/* Aura ring animation */}
        <div className="relative">
         <div className="absolute inset-0 animate-ping-slow rounded-full border-4 border-indigo-300 opacity-50" />

          <svg
            className="relative animate-spin h-12 w-12 text-indigo-600 drop-shadow-lg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="30"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        </div>

        {/* Promise text */}
        <p className="text-xl font-bold text-indigo-900 drop-shadow-md">
          Tunaahidi... Mfumo wako upo mbioni kuanza 
        </p>
        <p className="text-sm text-primary max-w-xs leading-relaxed">
          Tumia IT IS POSSIBLE WEBSITE kuangalia pikipiki unayo ipenda 
        </p>

        {/* Promise flair */}
        <div className="text-xs text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full shadow-md">
          Teknolojia salama. Kasi ya uhakika. 
        </div>
      </div>
    </div>
  );
};

export default AppPromiseLoader;
