import { useState } from 'react';
import { Mail, MessageCircle, GitFork, ExternalLink, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const contacts = [
  { icon: Mail,          label: 'Email',     value: 'aliffioaliffio4@email.com',   href: 'mailto:aliffioaliffio4@email.com',   color: '#ea4335' },
  { icon: MessageCircle, label: 'WhatsApp',  value: '+62 895-3881-46100',           href: 'https://wa.me/62895388146100',       color: '#25d366' },
  { icon: GitFork,       label: 'GitHub',    value: 'github.com/aliffiorizkiananda4', href: 'https://github.com/aliffiorizkiananda4', color: '#888' },
  { icon: ExternalLink,  label: 'LinkedIn',  value: 'aliffio-rizki-ananda',     href: 'https://www.linkedin.com/in/aliffio-rizki-ananda-b5532b340/',   color: '#0077b5' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-wrap">
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Contact</span>
        </div>

        <div className="contact-layout">
          <div className="contact-left">
            <h2 className="contact-heading">Hubungi<br /><span className="text-red">Saya</span></h2>
            <p className="contact-sub">Terbuka untuk kolaborasi, project, atau sekadar ngobrol tentang teknologi dan F1.</p>
            <div className="contact-list">
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <div className="contact-icon-wrap" style={{ background: `${c.color}18`, color: c.color }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="contact-item-label">{c.label}</span>
                      <span className="contact-item-value">{c.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact-right">
            {sent ? (
              <div className="contact-success">
                <CheckCircle size={48} color="#ED1131" strokeWidth={1.5} />
                <h4>Pesan Terkirim!</h4>
                <p>Terima kasih, saya akan segera membalas.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nama</label>
                  <input id="name" type="text" name="name" placeholder="Nama kamu" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" placeholder="email@contoh.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Pesan</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tulis pesanmu..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn-red" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <Send size={15} /> Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
