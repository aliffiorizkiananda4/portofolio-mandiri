import { ExternalLink } from 'lucide-react';
import imgTixid from '../assets/Screenshot 2026-04-03 220126.png';
import imgGadai from '../assets/Screenshot 2026-01-13 104232.png';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Tix Id',
    category: 'Ticketing App',
    description: 'Aplikasi pemesanan tiket online dengan fitur pencarian dan pemesanan tiket acara. Dibangun dengan PHP Laravel dan Bootstrap.',
    tags: ['PHP', 'Laravel', 'Bootstrap'],
    image: imgTixid,
    github: 'https://github.com/aliffio123/tixid.git',
    demo: '#',
  },
  {
    id: 2,
    title: 'Super Gadai',
    category: 'Management System',
    description: 'Sistem manajemen pergadaian untuk mengelola data nasabah, barang gadai, dan transaksi pinjaman.',
    tags: ['PHP', 'Laravel', 'Bootstrap'],
    image: imgGadai,
    github: 'https://github.com/aliffiorizkiananda4',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-wrap">
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Projects</span>
        </div>

        <div className="projects-header">
          <h2 className="projects-heading">Project<br /><span className="text-red">Saya</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} className="project-img" />
                <div className="project-img-overlay">
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                      GitHub
                    </a>
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-outline">
                      <ExternalLink size={14} /> Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-body">
                <span className="project-category">{p.category}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
