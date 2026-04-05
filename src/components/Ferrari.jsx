import { Flag, Flame, Heart, Trophy } from 'lucide-react';
import './Ferrari.css';

const values = [
  { icon: Flame,  title: 'Passion',       desc: 'Ketertarikan mendalam pada dunia balap F1 sejak pertama kali menyaksikan mesin merah melesat di sirkuit.' },
  { icon: Heart,  title: 'Loyalty',       desc: 'Setia pada Scuderia Ferrari dalam kondisi apapun — menang, kalah, atau rebuild. Tifosi sejati tidak pernah pergi.' },
  { icon: Trophy, title: 'Never Give Up', desc: 'Dari Ferrari saya belajar arti konsistensi dan semangat pantang menyerah.' },
];

export default function Ferrari() {
  return (
    <section id="tifosi" className="ferrari">
      <div className="ferrari-bg">
        <img
          src="https://cdn.ferrari.com/cms/network/media/img/resize/69c8f6032d86d20020b79f19-gp-japan-race-report-home1?width=1440&height=900"
          alt="Leclerc Trophy"
          className="ferrari-bg-img"
        />
        <div className="ferrari-overlay" />
      </div>

      <div className="ferrari-content">
        <div className="section-wrap">
          <div className="section-eyebrow ferrari-eyebrow">
            <span className="eyebrow-line" />
            <span>Tifosi Spirit</span>
          </div>

          <div className="ferrari-main">
            <div className="ferrari-text">
              <h2 className="ferrari-heading">Forza<br />Ferrari</h2>
              <p className="ferrari-tagline">— Always.</p>
              <p className="ferrari-desc">
                Saya adalah seorang <strong>Tifosi</strong> — fans setia Scuderia Ferrari
                di Formula 1. Bukan sekadar penonton, tapi seseorang yang merasakan setiap
                lap sebagai bagian dari perjalanan hidup.
              </p>
              <p className="ferrari-desc">
                Ferrari mengajarkan bahwa kebesaran bukan hanya soal kemenangan, tapi soal
                bagaimana kamu bangkit setelah jatuh. <em>Il Cavallino Rampante</em> tidak pernah berhenti berlari.
              </p>
              <div className="italian-flag">
                <span className="flag-green" />
                <span className="flag-white" />
                <span className="flag-red" />
                <span className="ferrari-since">Scuderia Ferrari — Since 1929</span>
              </div>
            </div>

            <div className="ferrari-values">
              <div className="ferrari-quote-block">
                <p className="ferrari-quote-text">"The red car, even before I knew it was called Ferrari, was my obsession."</p>
                <span className="ferrari-quote-author">— Charles Leclerc</span>
              </div>
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="ferrari-value-card">
                    <Icon size={20} color="#ED1131" />
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
