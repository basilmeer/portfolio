import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="mt-5 md:mt-0 pb-6">
    <div className="md:grid md:grid-cols-2">
      <ul className='flex w-full items-center space-x-6'>
        <li className="text-sm">You can also find me here:</li>
        <li>
          <a href='mailto:hello@basilmeer.com' rel='noopener noreferrer'>
            <Mail className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/basilmeer/'
            rel='noopener noreferrer'>
            <Linkedin className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a href='https://github.com/basilmeer/' rel='noopener noreferrer'>
            <Github className="w-5 h-5" />
          </a>
        </li>
      </ul>
      <a className="ml-auto text-sm" href='#'>Back to top</a>
    </div>
  </footer>
);

export default Footer;
