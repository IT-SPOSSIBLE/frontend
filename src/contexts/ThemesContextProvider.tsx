import React from 'react'
import { createContext,useEffect,useState } from 'react'

export const themeContext = createContext<{
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({
    theme: 'light',
    setTheme: () => {},
});
const ThemesContextProvider:React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    );
    useEffect(()=>{
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    },[theme])
  return (
   <themeContext.Provider value={{theme,setTheme}}>
        {children}
   </themeContext.Provider>
  )
}

export default ThemesContextProvider
