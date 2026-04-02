import { Code2, Palette, GitBranch } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content fade-in-up">
          <div className="hero-badge">👋 Halo, saya</div>
          <h1 className="hero-title">
            Aliffio Rizki<br />
            <span className="hero-title-accent">Ananda</span>
          </h1>
          <p className="hero-subtitle">
            Siswa SMK Wikrama Kota Bogor yang passionate di bidang
            <span className="highlight"> Web Development</span> &amp;
            <span className="highlight"> UI/UX Design</span>
          </p>
          <div className="hero-tags">
            <span className="tag">React JS</span>
            <span className="tag">HTML &amp; CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">UI Design</span>
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={handleContact}>
              Hubungi Saya
            </button>
            <button className="btn-secondary" onClick={handleProjects}>
              Lihat Project
            </button>
          </div>
        </div>

        <div className="hero-visual fade-in">
          <div className="avatar-wrapper">
            <div className="avatar-ring"></div>
            <div className="avatar-circle">
              <Code2 size={80} color="white" strokeWidth={1.5} />
            </div>
            <div className="floating-badge badge-1"><Code2 size={14} /> React</div>
            <div className="floating-badge badge-2"><Palette size={14} /> CSS</div>
            <div className="floating-badge badge-3"><GitBranch size={14} /> Git</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
        <span>Scroll ke bawah</span>
      </div>
    </section>
  );
}
