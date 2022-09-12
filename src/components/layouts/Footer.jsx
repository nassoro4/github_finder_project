import React from 'react';
import { useContext } from 'react';
import GitHubContext from '../context/gitHub/GitHubContext';

function Footer() {
  const { fullYear } = useContext(GitHubContext);
  return (
    <footer className="footer pt-3 pb-3 bg-gray-800 text-primary-content footer-center">
      <p>Copyright &copy; {fullYear} All right reserved</p>
    </footer>
  );
}

export default Footer;
