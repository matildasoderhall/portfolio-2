import { useEffect, useState } from 'react';
import './Navigation.scss';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 50) { // -50px offset so it triggers just before the section ends
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isVisible ? 'is-visible' : ''}`}>
      <nav className="main-nav" aria-label="Main menu">
        <button
          className="main-nav__toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`main-nav__hamburger ${isOpen ? 'is-active' : ''}`}
          />
          <span
            className={`main-nav__hamburger ${isOpen ? 'is-active' : ''}`}
          />
          <span
            className={`main-nav__hamburger ${isOpen ? 'is-active' : ''}`}
          />
        </button>
        <ul className={`main-nav__list ${isOpen ? 'is-open' : ''}`}>
          <li className="main-nav__item">
            <a href="#about" className="main-nav__link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#contact" className="main-nav__link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
