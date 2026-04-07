import { Heart, Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logoFerrari from '../assets/kuda.png';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const links = ['Home', 'About', 'Target', 'Projects', 'Tifosi', 'Contact'];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="section-wrap footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoFerrari} alt="Ferrari" className="footer-logo-img" />
              <span className="logo-name">Aliffio</span>
            </div>
            <p>Siswa SMK Wikrama Kota Bogor — Frontend Developer &amp; Tifosi.</p>
          </div>
          <div className="footer-nav">
            {links.map((link) => (
              <button key={link} className="footer-link"
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}>
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-wrap footer-bottom-inner">
          <p>© {year} Aliffio Rizki Ananda</p>
          <button className="ttt-link" onClick={() => navigate('/game')}><Gamepad2 size={14} /> Play Tic Tac Toe</button>
          <p style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            Made with <Heart size={13} fill="#ED1131" color="#ED1131" /> &amp; Forza Ferrari
          </p>
        </div>
      </div>
    </footer>
  );
}
