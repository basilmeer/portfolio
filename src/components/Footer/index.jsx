import { ArrowUpCircle, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="mt-[150px] pb-6 font-light">
    <div className="flex justify-space-between">
      <ul className='flex w-full items-center space-x-6'>
        <li>
          <a target="_blank" href='mailto:hello@basilmeer.com' rel='noopener noreferrer'>
            <Mail className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a
            target="_blank" href='https://www.linkedin.com/in/basilmeer/'
            rel='noopener noreferrer'>
            <Linkedin className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a target="_blank" href='https://github.com/basilmeer/' rel='noopener noreferrer'>
            <Github className="w-5 h-5" />
          </a>
        </li>
      </ul>
      <a className="text-sm hover:text-[#7a7a7a]" href='#'>
        <ArrowUpCircle className="w-6 h-6" />
      </a>
    </div>
  </footer>
);

export default Footer;
