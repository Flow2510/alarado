import './App.scss'
import About from './components/about/about'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const root = document.documentElement;
  if (darkTheme === true) {
    root.style.setProperty('--background-color', '#111729' );
    root.style.setProperty('--background-color2', '#111729' );
    root.style.setProperty('--text-color', '#ffffff' );
    root.style.setProperty('--text-color2', '#ffffff' );
    root.style.setProperty('--text-color3', '#ffffff' );
    root.style.setProperty('--theme-background', '#223344' );
  } else {
    root.style.setProperty('--background-color', '#F2F9FE' );
    root.style.setProperty('--background-color2', '#ffffff' );
    root.style.setProperty('--text-color', '#111729' );
    root.style.setProperty('--text-color2', '#223344' );
    root.style.setProperty('--text-color3', '#2A4DD0' );
    root.style.setProperty('--theme-background', '#111729' );
  }

  return (
    <>
      <Header 
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App


