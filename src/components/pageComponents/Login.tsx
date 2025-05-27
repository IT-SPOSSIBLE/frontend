import React,{useState} from 'react';
import {useAuth} from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const[username,setUsername]=useState<string>('');
  const[password,setPassword]=useState<string>('');

  const handleSubmit=async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginSuccess(false);
    try {
      await login(username, password);

      setLoginSuccess(true);
        setTimeout(() => {
      // Replace this with your redirect/navigation logic
      // window.location.href = ""; 
      navigate("/")
    }, 1500);
      // Redirect or show success message
    }catch (error) {
      console.error('Login failed:', error);
      // Show error message
    }finally {
    setIsLoggingIn(false);
  }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-gray-200 to-gray-300 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-primary mb-6">Ingia</h1> {/* "Login" in Swahili */}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
              Jina la mtumiaji
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Ingiza jina lako la mtumiaji"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Neno la siri
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Ingiza neno lako la siri"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
          >
            Ingia
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-primary hover:underline">
            Umesahau neno lako la siri?
          </a>
        </div>
        {(isLoggingIn || loginSuccess) && (
  <div className="absolute inset-0 z-50 bg-slate-100/80 backdrop-blur-md flex items-center justify-center rounded-md p-4">
    {/* Inner Card for content */}
    <div
      className="
        bg-white shadow-xl rounded-lg p-6 sm:p-8
        flex flex-col items-center gap-4 text-center
        w-full max-w-xs
        font-serifLoader {/* Or remove if you want default Tisa Sans Pro */}
        animate-loader-fade-in-gentle {/* Re-using from AppPromiseLoader */}
      "
    >
      {isLoggingIn ? (
        <>
          {/* Refined Spinner - using sky color for consistency */}
          <svg
            className="animate-spin h-8 w-8 text-sky-600" // Changed color
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V4a8 8 0 00-8 8h0z" // Slightly adjusted path for a common spinner look
            />
          </svg>
          <p className="text-slate-700 font-medium animate-loader-fade-in-text-1"> {/* Re-using animation */}
            Tunaangalia taarifa zako...
          </p>
        </>
      ) : (
        <>
          {/* Success Icon with pop animation */}
          <div className="p-2 bg-green-100 rounded-full animate-loader-success-pop"> {/* Added container for pop effect */}
            <svg
              className="h-10 w-10 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5" // Slightly thicker for more presence
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-green-700 font-semibold text-lg animate-loader-fade-in-text-1">
            Umefanikiwa kuingia!
          </p>
          <p className="text-slate-600 text-sm animate-loader-fade-in-text-2"> {/* Re-using animation */}
            Unapelekwa kwenye dashibodi...
          </p>
        </>
      )}
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Login;
