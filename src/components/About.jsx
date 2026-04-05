import { MapPin, School, BookOpen, Target, Flag, Code } from 'lucide-react';
import './About.css';

const skills = ['HTML & CSS', 'JavaScript', 'React JS', 'PHP', 'Laravel', 'Bootstrap', 'Git', 'UI Design'];

const info = [
  { icon: MapPin,   label: 'Asal',    value: 'Bogor, Jawa Barat' },
  { icon: School,   label: 'Sekolah', value: 'SMK Wikrama Kota Bogor' },
  { icon: BookOpen, label: 'Jurusan', value: 'Rekayasa Perangkat Lunak' },
  { icon: Target,   label: 'Fokus',   value: 'Web Development' },
  { icon: Flag,     label: 'Status',  value: 'Tifosi — Scuderia Ferrari' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-wrap">
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>About Me</span>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-heading">Kenalan<br /><span className="text-red">Lebih Dekat</span></h2>
            <p className="about-bio">
              Saya <strong>Aliffio Rizki Ananda</strong>, siswa SMK Wikrama Kota Bogor jurusan
              Rekayasa Perangkat Lunak. Passionate di bidang web development dan selalu
              berusaha belajar teknologi terbaru.
            </p>
            <p className="about-bio">
              Di luar coding, saya adalah seorang Tifosi — fans setia Scuderia Ferrari
              yang percaya bahwa semangat dan konsistensi adalah kunci keberhasilan,
              baik di sirkuit maupun di dunia teknologi.
            </p>
            <div className="skills-wrap">
              {skills.map(s => <span key={s} className="skill-chip">{s}</span>)}
            </div>
          </div>

          <div className="about-right">
            <div className="about-card">
              <div className="about-avatar">AR</div>
              <h3>Aliffio Rizki Ananda</h3>
              <p className="about-role">Web Developer &amp; Student</p>
              <div className="info-list">
                {info.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="info-item">
                      <Icon size={16} color={item.label === 'Status' ? '#ED1131' : '#888'} />
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
        </div>
      </div>
    </section>
  );
}
