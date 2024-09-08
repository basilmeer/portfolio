import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import './App.scss'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem('darkMode')));
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
      <div className="max-w-[80%] md:max-w-[60%] mx-auto pt-[100px] md:pt-[160px]">
        <Welcome />
        <Portfolio
          defaultItems={4}
          showPagination
          showMoreLink={true}
          darkMode={darkMode}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App
