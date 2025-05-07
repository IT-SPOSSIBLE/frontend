
const Register = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
      {/* Header Section */}
      <h1 className="text-3xl font-semibold text-center text-primary mb-6">
        Usajili
      </h1>

      {/* Registration Form Container */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 space-y-6">
        <form className="space-y-4">
          {/* Full Name Input */}
          <div>
            <label htmlFor="jina" className="block text-sm font-medium text-gray-700">
              Jina Kamili
            </label>
            <input
              type="text"
              id="jina"
              name="jina"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Ingiza jina lako kamili"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Barua Pepe
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Ingiza barua pepe yako"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="nenoLaSiri" className="block text-sm font-medium text-gray-700">
              Neno la Siri
            </label>
            <input
              type="password"
              id="nenoLaSiri"
              name="nenoLaSiri"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Ingiza neno la siri"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="nenoLaSiriTena" className="block text-sm font-medium text-gray-700">
              Rudia Neno la Siri
            </label>
            <input
              type="password"
              id="nenoLaSiriTena"
              name="nenoLaSiriTena"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Rudia neno lako la siri"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Jisajili
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Tayari una akaunti?{' '}
            <a href="/login" className="text-primary hover:underline">
              Ingia hapa
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
