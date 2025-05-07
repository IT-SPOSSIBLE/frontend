import  {  useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { themeContext } from '../contexts/ThemesContextProvider'
const Navbar = () => {
  const themeContextValue = useContext(themeContext);
  if (!themeContextValue) {
    throw new Error('themeContext must be used within a ThemesContextProvider');
  }
  const { theme, setTheme } = themeContextValue;
  return (
    <div className=' bg-side text-gray-900 border-b border-secondary p-4 flex items-center justify-between dark:bg-gray-900 dark:text-white'>
      <h1>Dashboard</h1>
      <button className='text-2xl text-dark' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  )
}

export default Navbar
