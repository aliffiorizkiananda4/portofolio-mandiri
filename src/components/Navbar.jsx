import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import logoFerrari from '../assets/kuda.png';
import './Navbar.css';

const navLinks = ['Home', 'About', 'Target', 'Projects', 'Tifosi', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const navigate = useNavigate();

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
          <span className="logo-name">PIPDEV</span>
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
        <div className="navbar-right">
          <button className="navbar-game-btn" onClick={() => navigate('/game')}>
            <Gamepad2 size={15} /> Game
          </button>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
