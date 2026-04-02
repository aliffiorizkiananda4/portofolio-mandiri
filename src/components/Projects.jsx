import { ShoppingCart, Cloud, CheckSquare, FileText } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce App',
    description:
      'Aplikasi toko online sederhana dengan fitur keranjang belanja, filter produk, dan halaman detail produk. Dibangun menggunakan React JS dan CSS murni.',
    tags: ['React JS', 'CSS', 'JavaScript'],
    icon: ShoppingCart,
    color: '#6c63ff',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description:
      'Dashboard cuaca real-time yang menampilkan informasi cuaca berdasarkan lokasi. Menggunakan OpenWeather API dan desain yang bersih dan informatif.',
    tags: ['JavaScript', 'API', 'HTML/CSS'],
    icon: Cloud,
    color: '#06b6d4',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Task Manager',
    description:
      'Aplikasi manajemen tugas dengan fitur tambah, edit, hapus, dan filter tugas berdasarkan status. Menggunakan localStorage untuk penyimpanan data.',
    tags: ['React JS', 'LocalStorage', 'CSS'],
    icon: CheckSquare,
    color: '#10b981',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Blog Personal',
    description:
      'Website blog personal dengan tampilan artikel, kategori, dan fitur pencarian. Didesain dengan tampilan minimalis dan mudah dibaca.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: FileText,
    color: '#f59e0b',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Project Saya</h2>
          <p className="section-desc">
            Beberapa project yang pernah saya kerjakan selama belajar
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-thumbnail"
                style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
              >
                <project.icon size={56} color={project.color} strokeWidth={1.5} />
                <div
                  className="project-glow"
                  style={{ background: project.color }}
                ></div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link link-github">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href={project.demo} className="project-link link-demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
