import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import images from '../../assets/images';

const Navbar = ({ darkMode, handleThemeToggle }) => (
  <nav
    className={`flex w-full px-2 py-3 lg:px-10 lg:py-6 fixed bg-${darkMode ? '[#1b1b1b]' : 'white'} lg:bg-transparent z-[500]`}>
    <img className="w-9 h-9 md:w-12 md:h-12 transition-all hover:rotate-90" src={darkMode ? images.icon_dark : images.icon} alt='Basil Meer' />

    <div className="flex items-center ml-auto">
      <ul className="flex items-center space-x-5">
        <li>
          <a href='mailto:hello@basilmeer.com'>
            <Mail className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a target="_blank" href='https://www.linkedin.com/in/basilmeer/'>
            <Linkedin className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a target="_blank" href='https://github.com/basilmeer/'>
            <Github className="w-5 h-5" />
          </a>
        </li>
      </ul>


      <button className="ml-4 mr-2" onClick={handleThemeToggle}>
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
