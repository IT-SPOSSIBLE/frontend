const SaleBike = () => {
  return (
    <div className="bg-gray-300 w-full h-full mx-auto flex-col p-4 mt-4">
      <h1 className="text-2xl">Manage Bike</h1>
      <div className="grid gap-8 md:grid-cols-2 mt-4 ">
        <div className="h-full">
          <div className="">
            <h2 className="text-start mx-auto ">Add Bike To The Inventory</h2>
            <button className="rounded-full h-8 w-8 bg-white text-primary hover:bg-primary hover:text-white">
              +
            </button>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full min-w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                  <tr>
                  <th className="px-6 py-3 whitespace-nowrap">Id</th>
                  <th className="px-6 py-3 whitespace-nowrap">Title</th>
                  <th className="px-6 py-3 whitespace-nowrap">Category</th>
                  <th className="px-6 py-3 whitespace-nowrap">Price</th>
                  <th className="px-6 py-3 whitespace-nowrap">Status</th>
                  <th className="px-6 py-3 whitespace-nowrap">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white border-b border-gray-200">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">CZC</td>
                        <td className="px-6 py-4">Boxer</td>
                        <td className="px-6 py-4">500000</td>
                        <td className="px-6 py-4">Available</td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 hover:text-blue-900">Edit</button>
                          <button className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                        </td>

                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="h-full">
          <h2 className="text-start mx-auto">List of Bike Available</h2>
        </div>
      </div>
    </div>
  );
};

export default SaleBike;
