import  { useState, useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    if (darkMode) {
      body.classList.add('bg-dark', 'text-light');
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.classList.add('navbar-dark', 'bg-dark');
    } else {
      body.classList.remove('bg-dark', 'text-light');
      navbar.classList.remove('navbar-dark', 'bg-dark');
      navbar.classList.add('navbar-light', 'bg-light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="btn btn-link d-flex align-items-center justify-content-center"
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        fontSize: '1.5rem',
        color: darkMode ? '#FFD700' : '#4A4A4A', // Gold for dark mode, grey for light mode
        transition: 'color 0.3s ease',
      }}
    >
      {darkMode ? (
        <BsFillSunFill title="Light Mode" />
      ) : (
        <BsFillMoonFill title="Dark Mode" />
      )}
    </button>
  );
};

export default DarkModeToggle;
