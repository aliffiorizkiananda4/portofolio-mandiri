import { Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="logo-text">Aliffio<span className="logo-dot">.</span></span>
          <p>Siswa SMK Wikrama Kota Bogor yang passionate di bidang web development.</p>
        </div>

        <div className="footer-links">
          {['Home', 'About', 'Projects', 'Contact'].map((link) => (
            <button
              key={link}
              className="footer-link"
              onClick={() => {
                document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Aliffio Rizki Ananda. Dibuat dengan <Heart size={13} fill="#ef4444" color="#ef4444" style={{ display: 'inline', verticalAlign: 'middle' }} /> menggunakan React JS</p>
      </div>
    </footer>
  );
}
