import React, { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  
  {
    id: 1,
    title: 'Blood Management System',
    subtitle: 'Healthcare & Donor Management',
    desc: 'A smart blood management system that helps manage donor details, blood stock availability, and emergency blood requests efficiently.',
    longDesc:
      'This application was developed to simplify blood bank operations and improve emergency response. It includes donor registration, blood availability tracking, request management, and hospital coordination features. The system focuses on accessibility, quick data retrieval, and an easy-to-use interface for both donors and administrators.',
    tech: [
      'React.js',
      'JavaScript',
      'CSS',
      'Node.js',
      'MongoDB',
      'REST API',
    ],
    icon: '🩸',
    gradient: 'linear-gradient(135deg, #9BD8DB 0%, #3C949E 100%)',
    github: 'https://github.com/Varshinineelakandan/hemolink',
    demo: 'https://codered-hemolink.netlify.app/',
  },

  {
    id: 2,
    title: 'Smart Navigation for Visually Impaired',
    subtitle: 'Accessibility & Navigation System',
    desc: 'An intelligent navigation application designed to assist visually impaired users with safe indoor and outdoor navigation using voice guidance and real-time tracking.',
    longDesc:
      'This project combines BLE indoor positioning and GPS outdoor tracking to provide accurate navigation support for visually impaired individuals. The system delivers real-time voice instructions and vibration feedback, helping users move independently and safely. The application was developed with accessibility and user comfort as the primary focus.',
    tech: [
      'React.js',
      'JavaScript',
      'HTML',
      'CSS',
      'BLE',
      'GPS API',
      'Web Speech API',
    ],
    icon: '♿',
    gradient: 'linear-gradient(135deg, #3C949E 0%, #D5F2F8 100%)',
    github: 'https://github.com/Varshinineelakandan/guidesense',
    demo:'https://guidesense.vercel.app/',
  },

  {
    id: 3,
    title: 'Restaurant App',
    subtitle: 'Food Ordering & Preferences',
    desc: 'A modern restaurant application that recommends dishes according to user preferences and provides an engaging food ordering experience.',
    longDesc:
      'This restaurant app was designed with a user-friendly interface that allows customers to browse menus, explore personalized food recommendations, and place orders easily. Features include category filtering, responsive layouts, attractive food cards, and preference-based suggestions to enhance the dining experience.',
    tech: [
      'React.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
    ],
    icon: '🍽️',
    gradient: 'linear-gradient(135deg, #024F55 0%, #9BD8DB 100%)',
    github: 'https://github.com/Varshinineelakandan',
    demo: '',
  },

  {
    id: 4,
    title: 'Personal Portfolio Design',
    subtitle: 'Creative Developer Portfolio',
    desc: 'A stylish and responsive personal portfolio website showcasing projects, skills, achievements, and contact information with modern UI design.',
    longDesc:
      'This portfolio website was created to present personal projects, technical skills, and achievements in a visually appealing and professional way. It includes smooth animations, responsive layouts, interactive project cards, and a clean modern aesthetic designed using React and CSS animations.',
    tech: [
      'React.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
      'CSS Animations',
    ],
    icon: '💻',
    gradient: 'linear-gradient(135deg, #0F2027 0%, #3C949E 100%)',
    github: 'https://github.com/Varshinineelakandan',
    demo: '#',
  },
];

const ProjectModal = ({ project, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-card glass-card" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div className="modal-header" style={{ background: project.gradient }}>
        <span className="modal-icon">{project.icon}</span>
        <h2>{project.title}</h2>
        <p>{project.subtitle}</p>
      </div>
      <div className="modal-body">
        <p className="modal-desc">{project.longDesc}</p>
        <div className="modal-tech">
          {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
        </div>
        <div className="modal-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary">
            <span>Live Demo</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [modal, setModal] = useState(null);

  return (
    <div className="page-wrapper projects-wrapper">
      <div className="blob blob-1" />
      <div className="blob blob-3" />

      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">Portfolio</span>
          <h1 className="section-title">Featured <span>Projects</span></h1>
          <p className="sections-subtitle">A collection of work that reflects my skills, creativity, and passion for impactful technology.</p>
        </div>

        <div className="projects-grid">
  {projects.map((p, i) => (
    <div
      key={p.id}
      className="project-card glass-card"
      onClick={() => setModal(p)}
      style={{ animationDelay: `${i * 0.12}s` }}
    >
      <div className="pc-thumb" style={{ background: p.gradient }}>
        <span className="pc-thumb-icon">{p.icon}</span>
      </div>

      <div className="pc-body">
        <h3 className="pc-title">{p.title}</h3>

        <p className="pc-sub">{p.subtitle}</p>

        <p className="pc-desc-sm">{p.desc}</p>

        <div className="pc-tech">
          {p.tech.slice(0, 3).map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}

          {p.tech.length > 3 && (
            <span className="tech-badge">
              +{p.tech.length - 3}
            </span>
          )}
        </div>

        <div className="pc-links">
          <a
            href={p.github}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            GitHub
          </a>

          <button
            className="link-btn details-btn"
            onClick={(e) => {
              e.stopPropagation();
              setModal(p);
            }}
          >
            Details →
          </button>
        </div>
      </div>

      <div className="pc-hover-glow" />
    </div>
  ))}
</div>
      </div>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </div>
  );
};

export default Projects;
