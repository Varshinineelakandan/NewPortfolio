import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const TITLES = ['Full Stack Developer', 'Frontend Developer', 'Java Developer', 'Software Engineer'];

const Particle = ({ style }) => <div className="particle" style={style} />;

const Home = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIdx];
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 55);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIdx]);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    width: `${4 + Math.random() * 8}px`,
    height: `${4 + Math.random() * 8}px`,
    animationDuration: `${6 + Math.random() * 10}s`,
    animationDelay: `${Math.random() * 8}s`,
    opacity: 0.3 + Math.random() * 0.4,
    background: ['#9BD8DB', '#3C949E', '#D5F2F8', '#024F55'][Math.floor(Math.random() * 4)],
    borderRadius: Math.random() > 0.5 ? '50%' : '4px',
  }));

  return (
    <div className="home-wrapper">
      {/* Particles */}
      <div className="particles-field">
        {particles.map((s, i) => <Particle key={i} style={s} />)}
      </div>

      {/* Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Glow rings */}
      <div className="glow-ring" style={{ width: 300, height: 300, top: '10%', right: '8%' }} />
      <div className="glow-ring" style={{ width: 180, height: 180, bottom: '20%', left: '5%', animationDelay: '1.5s' }} />

      <div className="home-container">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="name-highlight">Varshini N</span>
          </h1>

          <div className="hero-title-row">
            <span className="hero-title-static">I'm a </span>
            <span className="hero-typing">{displayed}<span className="cursor" /></span>
          </div>

          <p className="hero-bio">
            A motivated Computer Science student at Panimalar Engineering College, passionate about crafting responsive, user-centric web experiences. Proficient in HTML, CSS, JavaScript, and React — building the future one component at a time.
          </p>

          <div className="hero-ctas">
            <a href="/resume.pdf" download className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download Resume
            </a>
            <Link to="/contact" className="btn-secondary">
              <span>Let's Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Varshinineelakandan" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/varshinineelakandan-19044329a/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="mailto:neelakandanvarshini@gmail.com" className="social-btn" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="profile-orbit">
            <div className="orbit-ring ring-1" />
            <div className="orbit-ring ring-2" />
            <div className="orbit-ring ring-3" />

            <div className="profile-frame">
              <img src="/profile-image.png" alt="Varshini N" className="profile-pic" />
              <div className="profile-glow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
};

export default Home;
