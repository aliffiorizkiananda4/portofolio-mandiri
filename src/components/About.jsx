import { MapPin, School, BookOpen, Target } from 'lucide-react';
import './About.css';

const skills = [
  { name: 'HTML & CSS', level: 85 },
  { name: 'JavaScript', level: 49 },
  { name: 'React JS', level: 70 },
  { name: 'UI/UX Design', level: 65 },
  { name: 'Git & GitHub', level: 60 },
];

const info = [
  { icon: MapPin, label: 'Asal', value: 'Bogor, Jawa Barat' },
  { icon: School, label: 'Sekolah', value: 'SMK Wikrama Kota Bogor' },
  { icon: BookOpen, label: 'Jurusan', value: 'Rekayasa Perangkat Lunak' },
  { icon: Target, label: 'Fokus', value: 'Web Development' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Tentang Saya</span>
          <h2 className="section-title">Kenalan Lebih Dekat</h2>
          <p className="section-desc">
            Sedikit cerita tentang siapa saya dan apa yang saya kerjakan
          </p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-card">
              <div className="about-avatar">
                <span>AR</span>
              </div>
              <h3>Aliffio Rizki Ananda</h3>
              <p className="about-role">Web Developer &amp; Student</p>
              <div className="about-info-list">
                {info.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="about-info-item">
                      <span className="info-icon">
                        <Icon size={18} color="var(--primary)" />
                      </span>
                      <div>
                        <span className="info-label">{item.label}</span>
                        <span className="info-value">{item.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="about-right">
            <p className="about-bio">
              Halo! Saya <strong>Aliffio Rizki Ananda</strong>, siswa SMK Wikrama Kota Bogor
              jurusan Rekayasa Perangkat Lunak. Saya memiliki ketertarikan besar dalam dunia
              web development dan selalu berusaha untuk terus belajar teknologi terbaru.
            </p>
            <p className="about-bio">
              Saat ini saya sedang mengembangkan kemampuan di bidang front-end development
              menggunakan React JS, serta belajar tentang desain UI/UX untuk menciptakan
              pengalaman pengguna yang menarik dan intuitif.
            </p>

            <div className="skills-section">
              <h4>Tech Skills</h4>
              <div className="skills-list">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
