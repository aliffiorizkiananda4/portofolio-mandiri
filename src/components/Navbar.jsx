import { useState, useEffect } from 'react';
import logoFerrari from '../assets/kuda.png';
import './Navbar.css';

const navLinks = ['Home', 'About', 'Target', 'Projects', 'Tifosi', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNav('Home')}>
          <img src={logoFerrari} alt="Ferrari" className="logo-img" />
          <span className="logo-name">Aliffio</span>
        </div>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <button className={`nav-link ${active === link ? 'active' : ''}`} onClick={() => handleNav(link)}>
                {link}
              </button>
            </li>
          ))}
        </ul>
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
