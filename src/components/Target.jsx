import './Target.css';

const goals = [
  { number: '01', title: 'Frontend Developer', desc: 'Menguasai React, TypeScript, dan modern web stack untuk membangun aplikasi yang cepat dan elegan.', progress: 65 },
  { number: '02', title: 'Lulus SMK dengan Prestasi', desc: 'Menyelesaikan pendidikan di SMK Wikrama dengan nilai terbaik dan portofolio yang kuat.', progress: 80 },
  { number: '03', title: 'Kontribusi Open Source', desc: 'Berkontribusi pada project open source dan membangun reputasi di komunitas developer.', progress: 20 },
];

export default function Target() {
  return (
    <section id="target" className="target">
      <div className="section-wrap">
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Target Saya</span>
        </div>

        <div className="target-header">
          <h2 className="target-heading">Next<br /><span className="text-red">Goal</span></h2>
          <p className="target-sub">Setiap lap menuju finish line membutuhkan strategi dan konsistensi.</p>
        </div>

        <div className="target-grid">
          {goals.map((g) => (
            <div key={g.number} className="target-card">
              <span className="target-number">{g.number}</span>
              <h3 className="target-title">{g.title}</h3>
              <p className="target-desc">{g.desc}</p>
              <div className="target-progress-wrap">
                <div className="target-progress-bar">
                  <div className="target-progress-fill" style={{ width: `${g.progress}%` }} />
                </div>
                <span className="target-progress-label">{g.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
