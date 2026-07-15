import React from 'react';
import '../styles/About.css';

const stats = [
  { value: '2+', label: 'Years Learning' },
  { value: '4', label: 'Projects Built' },
  { value: '3', label: 'Certifications' },
  { value: '7+', label: 'Skills Mastered' },
];

const About = () => (
  <div className="page-wrapper about-wrapper">
    <div className="blob blob-1" style={{ background: '#9BD8DB', top: '-60px', right: '-60px', width: 320, height: 320 }} />
    <div className="blob blob-2" style={{ background: '#D5F2F8', bottom: '10%', left: '-60px', width: 250, height: 250 }} />

    <div className="about-container">
      {/* Header */}
      <div className="about-header">
        <span className="section-tag">Who I Am</span>
        <h1 className="section-title">Crafting Digital <span>Experiences</span></h1>
      </div>

      {/* Split Layout */}
      <div className="about-split">
        {/* LEFT — Story */}
        <div className="about-story">
          <div className="glass-card story-card">
            <div className="story-avatar">
              <img src="Abt-Img.jpg" alt="Varshini N" className="abt-img" />
              <div className="avatar-ring" />
            </div>
            <h2>Varshini N</h2>
            <p className="story-role">Full Stack Developer in the Making</p>
            <p className="story-bio">
              I'm a motivated Computer Science Engineering student at Panimalar Engineering College, driven by a passion for building clean, responsive web applications that solve real-world problems.
            </p>
            <p className="story-bio">
              Proficient in modern frontend technologies — HTML, CSS, JavaScript, and React — I bring ideas to life with a focus on usability, accessibility, and elegant design. I believe great software is equal parts logic and artistry.
            </p>
            <div className="story-tags">
              {['Problem Solver','Detail Oriented','Fast Learner','Team Player'].map(t => (
                <span key={t} className="story-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Details */}
        <div className="about-details">
          {/* Objective */}
          <div className="glass-card detail-card objective-card">
            <div className="detail-icon">🎯</div>
            <h3>Career Objective</h3>
            <p>To leverage my skills in web development and computer science to contribute to innovative projects, while continuously growing as a full-stack developer within a dynamic and forward-thinking team.</p>
          </div>

          {/* Location & Contact */}
          <div className="glass-card detail-card contact-card">
            <div className="detail-icon">📍</div>
            <h3>Contact Info</h3>
            <div className="contact-items">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Thoraipakkam, Chennai
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                neelakandanvarshini@gmail.com
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 7.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +91 8925785752
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {stats.map(({ value, label }, i) => (
          <div className="glass-card stat-card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
            <div className="stat-value">{value}</div>
            <div className="stat-label">{label}</div>
            <div className="stat-glow" />
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="about-timeline-section">
        <span className="section-tag">Journey</span>
        <h2 className="section-title">My <span>Timeline</span></h2>

        <div className="timeline">
          {[
            { year: '2021', title: 'Higher Secondary', desc: 'Completed HSC at Bharath Dass Matriculation Higher Secondary School, building my foundation in science and mathematics.', icon: '🎓' },
            { year: '2023', title: 'Engineering Begins', desc: 'Enrolled in Bachelor of Engineering (CSE) at Panimalar Engineering College. Began my web development journey.', icon: '💻' },
            { year: '2024', title: 'First Projects', desc: 'Built a Blood Management System and an Assistive Navigation App — applying real-world React and JavaScript skills.', icon: '🚀' },
            { year: '2025', title: 'Certifications & Growth', desc: 'Earned certifications in Full Stack Development, HTML Projects (Coursera), and Data Acquisition (NASSCOM).', icon: '🏆' },
            { year: '2026', title: 'Second Project', desc: 'Restaurant App According to the customer preferences with AI recommendations — applying real-world React and JavaScript skills.', icon: '🚀' },
            { year: '2027', title: 'Expected Graduation', desc: 'Completing my Bachelor of Engineering, ready to contribute as a full-stack developer in the industry.', icon: '🎓' },
          ].map((item, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="timeline-node">
                <span className="node-icon">{item.icon}</span>
              </div>
              <div className="glass-card timeline-card">
                <div className="tl-year">{item.year}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </div>
  </div>
);

export default About;
