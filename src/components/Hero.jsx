import heroBg from '../assets/image.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="Hero" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-line" />
          <span>SMK Wikrama Kota Bogor</span>
        </div>
        <h1 className="hero-title">
          Aliffio<br />
          <span className="hero-title-red">Rizki</span><br />
          Ananda
        </h1>
        <p className="hero-subtitle">Frontend Developer &amp; Tifosi</p>
        <div className="hero-actions">
          <button className="btn-red" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Lihat Project
          </button>
          <button className="btn-outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Tentang Saya
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
