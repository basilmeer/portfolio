import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

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
    <div
      className={`relative min-h-screen w-full transition-all duration-300 ${darkMode ? 'bg-[#1b1b1b] text-white' : 'bg-[#f8fafc] text-[#1f1f1f]'
        }`}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: darkMode
            ? `
              linear-gradient(to right, #3a3a3a 1px, transparent 1px),
              linear-gradient(to bottom, #3a3a3a 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, #e7e5e4 1px, transparent 1px),
              linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
            `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 0',
          WebkitMaskImage:
            `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
            `,
          maskImage:
            `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
            `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      <div className="relative z-10">
        <Navbar darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8 md:pt-[120px]">
          <Welcome darkMode={darkMode} />
          <Portfolio
            defaultItems={4}
            showPagination
            showMoreLink
            darkMode={darkMode}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App
