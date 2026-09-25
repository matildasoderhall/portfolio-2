import { useEffect, useState } from 'react';
import './Navigation.scss';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== 'undefined'
      ? window.scrollY >= window.innerHeight - 50
      : false
  );

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    const handleScroll = () => {
      setIsVisible(window.scrollY >= window.innerHeight - 50);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
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
            <a
              href="#about"
              className={`main-nav__link ${activeHash === '#about' ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li className="main-nav__item">
            <a
              href="#contact"
              className={`main-nav__link ${activeHash === '#contact' ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
