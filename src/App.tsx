import {createContext, useContext, useState} from 'react'

interface ThemeContextTypes {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined)

export function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const ThemeContextValue: ThemeContextTypes = {
    theme,
    toggleTheme,
  }

  return (
   <ThemeContext.Provider value={ThemeContextValue}>
    <Home />
   </ThemeContext.Provider>
  )
}

function Home() {
  const themeContext = useContext(ThemeContext)

  if(!themeContext) return null

  const {theme, toggleTheme} = themeContext

  return (
    <>
      <button onClick={toggleTheme}>Trocar tema</button>
      <h1>Site com tema {theme === 'light'? 'Claro' : 'Escuro'}</h1>
    </>
  )
}
