
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../index.css';
import Dashboard from '../components/Dashboard';
const PannelAdmin = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className="grow ml-16 md:ml-64 h-full lg:h-screen text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div>
        <Dashboard />
      </div>
    </div>
  </div>
  )
}

export default PannelAdmin
