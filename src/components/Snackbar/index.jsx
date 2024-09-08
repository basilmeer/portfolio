import { Github, Linkedin, Mail } from 'lucide-react';

const Snackbar = () => (
  <ul className='flex flex-col fixed top-1/2 left-8 space-y-4'>
    <li>
      <a href='mailto:hello@basilmeer.com'>
        <Mail className="w-5 h-5" />
      </a>
    </li>
    <li>
      <a href='https://www.linkedin.com/in/basilmeer/'>
        <Linkedin className="w-5 h-5" />
      </a>
    </li>
    <li>
      <a href='https://github.com/basilmeer/'>
        <Github className="w-5 h-5" />
      </a>
    </li>
  </ul>
);

export default Snackbar;
