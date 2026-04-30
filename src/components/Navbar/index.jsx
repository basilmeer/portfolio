import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import PropTypes from 'prop-types';
import images from '../../assets/images';

const Navbar = ({ darkMode, handleThemeToggle }) => (
  <nav
    className={`fixed top-0 z-[500] flex w-full px-2 py-3 font-light transition-colors lg:px-10 lg:py-6 lg:bg-transparent ${
      darkMode ? 'bg-[#1b1b1b]' : 'bg-white'
    }`}
  >
    <img
      className="h-9 w-9 transition-transform hover:rotate-90 md:h-12 md:w-12"
      src={darkMode ? images.icon_dark : images.icon}
      alt='Basil Meer'
    />

    <div className="flex items-center ml-auto">
      <ul className="flex items-center space-x-5">
        <li>
          <a href='mailto:hello@basilmeer.com' className={darkMode ? 'text-white hover:text-white/70' : 'hover:text-[#7a7a7a]'}>
            <Mail className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a target="_blank" href='https://www.linkedin.com/in/basilmeer/' className={darkMode ? 'text-white hover:text-white/70' : 'hover:text-[#7a7a7a]'}>
            <Linkedin className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a target="_blank" href='https://github.com/basilmeer/' className={darkMode ? 'text-white hover:text-white/70' : 'hover:text-[#7a7a7a]'}>
            <Github className="w-5 h-5" />
          </a>
        </li>
      </ul>


      <button className={`ml-4 mr-2 ${darkMode ? 'text-white' : 'text-black'}`} onClick={handleThemeToggle}>
        {darkMode ? (
          <Sun />
        ) : (
          <Moon />
        )}
      </button>
    </div>
  </nav>
);

export default Navbar;

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  handleThemeToggle: PropTypes.func.isRequired,
};
