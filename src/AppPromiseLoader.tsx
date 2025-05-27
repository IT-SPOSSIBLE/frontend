import React from "react";

const AppPromiseLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-100/80 flex items-center justify-center backdrop-blur-sm p-4">
      {/* Main Promise Card */}
      <div
        className="
          flex flex-col items-center gap-5 px-6 sm:px-8 py-10
          bg-white text-slate-700
          rounded-lg shadow-xl border border-slate-200
          w-full max-w-xs sm:max-w-sm
          font-serifLoader {/* Using custom font utility from your CSS */}
          animate-loader-fade-in-gentle {/* Custom animation utility */}
        "
      >
        {/* Simple Hourglass Icon */}
        <div className="w-10 h-10 text-sky-600">
          <svg
            className="w-full h-full animate-loader-pulse-subtle" // Custom animation utility
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 2V8C6 8.55228 6.44772 9 7 9H17C17.5523 9 18 8.55228 18 8V2H16V7H8V2H6ZM6 22V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V22H16V17H8V22H6ZM7 10L10.5 12L7 14V10ZM17 10V14L13.5 12L17 10Z" />
          </svg>
        </div>

        {/* Promise Text */}
        <p className="text-lg sm:text-xl font-semibold text-slate-800 text-center animate-loader-fade-in-text-1">
          Tunaahidi...
        </p>
        <p className="text-sm text-slate-600 leading-relaxed text-center animate-loader-fade-in-text-2">
          Mfumo wako upo mbioni kuanza. Tafadhali subiri kidogo.
        </p>

        {/* Loading Dots Feature */}
        <div className="flex space-x-1.5 mt-2 animate-loader-fade-in-text-3">
          <div className="w-2 h-2 bg-sky-500 rounded-full animate-loader-dot-flourish-1"></div>
          <div className="w-2 h-2 bg-sky-500 rounded-full animate-loader-dot-flourish-2"></div>
          <div className="w-2 h-2 bg-sky-500 rounded-full animate-loader-dot-flourish-3"></div>
        </div>

        {/* Optional Smaller Message or Motto */}
        <p className="mt-4 text-xs text-sky-700 animate-loader-fade-in-text-4">
          IT IS POSSIBLE WEBSITE - Kasi ya Uhakika.
        </p>
      </div>
    </div>
  );
};

export default AppPromiseLoader;