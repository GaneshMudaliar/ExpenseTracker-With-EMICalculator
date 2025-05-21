import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (path) =>
    `block px-4 py-2 rounded hover:bg-indigo-600 ${
      location.pathname === path ? 'bg-indigo-700 text-white' : 'text-gray-200'
    }`;

  return (
    <nav className="bg-indigo-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold"> FinTrack</h1>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-4 items-center">
          <li>
            <Link to="/" className={linkStyle('/')}>
              Expense Tracker
            </Link>
          </li>
          <li>
            <Link to="/emi" className={linkStyle('/emi')}>
              EMI Calculator
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className={linkStyle('/dashboard')}>
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <ul className="sm:hidden mt-4 space-y-2">
          <li>
            <Link to="/" className={linkStyle('/')} onClick={() => setIsOpen(false)}>
              Expense Tracker
            </Link>
          </li>
          <li>
            <Link to="/emi" className={linkStyle('/emi')} onClick={() => setIsOpen(false)}>
              EMI Calculator
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className={linkStyle('/dashboard')} onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;


