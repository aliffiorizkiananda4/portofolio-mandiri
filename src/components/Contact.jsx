import { useState } from 'react';
import { Mail, MessageCircle, GitFork, ExternalLink, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aliffio@email.com',
    href: 'mailto:aliffio@email.com',
    color: '#ea4335',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    href: 'https://wa.me/6281234567890',
    color: '#25d366',
  },
  {
    icon: GitFork,
    label: 'GitHub',
    value: 'github.com/aliffiorizkiananda4',
    href: 'https://github.com/aliffiorizkiananda4',
    color: '#333',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aliffio',
    href: 'https://linkedin.com/in/aliffio',
    color: '#0077b5',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Kontak</span>
          <h2 className="section-title">Hubungi Saya</h2>
          <p className="section-desc">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Mari Terhubung</h3>
            <p>
              Saya terbuka untuk peluang baru, kolaborasi project, atau sekadar ngobrol
              tentang teknologi. Hubungi saya melalui salah satu platform berikut.
            </p>

            <div className="contact-cards">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-icon" style={{ background: `${c.color}18`, color: c.color }}>
                    <c.icon size={20} />
                  </div>
                  <div>
                    <span className="contact-card-label">{c.label}</span>
                    <span className="contact-card-value">{c.value}</span>
                  </div>
                  <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            {sent ? (
              <div className="success-msg">
                <CheckCircle size={52} color="#10b981" strokeWidth={1.5} />
                <h4>Pesan Terkirim!</h4>
                <p>Terima kasih, saya akan segera membalas pesan kamu.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Kirim Pesan</h3>
                <div className="form-group">
                  <label htmlFor="name">Nama</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nama kamu"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email@contoh.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tulis pesanmu di sini..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Send size={16} /> Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
