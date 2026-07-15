import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'HTML5',      pct: 92, icon: '🌐', color: '#E34F26', cat: 'Markup' },
  { name: 'CSS3',       pct: 88, icon: '🎨', color: '#1572B6', cat: 'Styling' },
  { name: 'JavaScript', pct: 80, icon: '⚡', color: '#F7DF1E', cat: 'Language' },
  { name: 'React.js',   pct: 82, icon: '⚛️', color: '#61DAFB', cat: 'Framework' },
  { name: 'Java',      pct: 74, icon: '🔗', color: '#5A29E4', cat: 'HTTP Client' },
  { name: 'Express.js', pct: 88, icon: '📱', color: '#3C949E', cat: 'Backend' },
  { name: 'Node.js',    pct: 76, icon: '🔀', color: '#68A063', cat: 'Runtime' },
  { name: 'MongoDB',    pct: 85, icon: '🖥️', color: '#024F55', cat: 'Database' },
];

const CircleProgress = ({ pct, color, animate }) => {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const offset = circ - (animate ? pct / 100 : 0) * circ;

  return (
    <svg width="130" height="130" viewBox="0 0 130 130" className="circle-svg">
      <circle cx="65" cy="65" r={r} fill="none" stroke="rgba(156,216,219,0.2)" strokeWidth="8" />
      <circle
        cx="65" cy="65" r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 65 65)"
        style={{ transition: animate ? 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)' : 'none', filter: `drop-shadow(0 0 6px ${color}66)` }}
      />
      <text x="65" y="70" textAnchor="middle" fill="var(--accent-dark)" fontSize="20" fontWeight="800" fontFamily="Outfit,sans-serif">
        {animate ? pct : 0}%
      </text>
    </svg>
  );
};

const SkillCard = ({ skill }) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-card glass-card" ref={ref}>
      <div className="skill-card-inner">
        <div className="skill-icon-wrap" style={{ background: `${skill.color}15`, boxShadow: `0 0 20px ${skill.color}30` }}>
          <span className="skill-icon">{skill.icon}</span>
        </div>
        <CircleProgress pct={skill.pct} color={skill.color} animate={animate} />
        <h3 className="skill-name">{skill.name}</h3>
        <span className="skill-cat">{skill.cat}</span>
      </div>
      <div className="skill-glow" style={{ background: skill.color }} />
    </div>
  );
};

const Skills = () => (
  <div className="page-wrapper skills-wrapper">
    <div className="blob blob-1" />
    <div className="blob blob-2" />

    <div className="skills-container">
      <div className="skills-header">
        <span className="section-tag">Expertise</span>
        <h1 className="section-title">My <span>Technical Skills</span></h1>
        <p className="section-subtitle">Technologies I've honed through hands-on projects and continuous learning.</p>
      </div>

      <div className="skills-grid">
        {skills.map((s, i) => <SkillCard key={s.name} skill={s} />)}
      </div>

      
    </div>
  </div>
);

export default Skills;
