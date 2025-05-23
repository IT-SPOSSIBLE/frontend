import React,{useState} from 'react';
import {useAuth} from '../../hooks/useAuth';
const Login: React.FC = () => {
  const { login } = useAuth();
  const[username,setUsername]=useState<string>('');
  const[password,setPassword]=useState<string>('');

  const handleSubmit=async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      // Redirect or show success message
    }catch (error) {
      console.error('Login failed:', error);
      // Show error message
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-gray-200 to-gray-300 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
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
      </div>
    </div>
  );
};

export default Login;
