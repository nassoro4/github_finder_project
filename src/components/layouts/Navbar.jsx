import React from 'react';
import { PropTypes } from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Navbar({ title }) {
  return (
    <div className="navbar mb-10 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none mx-2 px-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg align-middle font-bold">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <div className="btn btn-sm btn-ghost rounded-btn">Home</div>
            <div className="btn btn-sm btn-ghost rounded-btn">About</div>
          </div>
        </div>
      </div>
    </div>
  );
}
Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
