import React from 'react';
import '../styles/Education.css';

const education = [
  {
    degree: 'Bachelor of Engineering (CSE)',
    institution: 'Panimalar Engineering College',
    period: '2023 – 2027',
    status: 'Ongoing',
    desc: 'Pursuing Computer Science and Engineering with strong foundational knowledge in programming, algorithms, web development, data structures, and software engineering principles.',
    icon: '🎓',
    highlights: ['Web Development', 'Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'],
    color: '#024F55',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Bharath Dass Matriculation Higher Secondary School',
    period: '2021 – 2023',
    status: 'Completed',
    desc: 'Completed Higher Secondary education with a focus on Mathematics, Physics, Chemistry and Computer Science — building analytical and logical thinking skills.',
    icon: '📚',
    highlights: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    color: '#3C949E',
  },
];

const Education = () => (
  <div className="page-wrapper edu-wrapper">
    <div className="blob blob-1" />
    <div className="blob blob-2" />

    <div className="edu-container">
      <div className="edu-header">
        <span className="section-tag">Academic Background</span>
        <h1 className="section-title">My <span>Education</span></h1>
        <p className="section-subtitle">The academic foundation that shapes my technical and problem-solving mindset.</p>
      </div>

      {/* Timeline */}
      <div className="edu-timeline">
        <div className="edu-timeline-line" />

        {education.map((item, i) => (
          <div key={i} className="edu-item" style={{ animationDelay: `${i * 0.2}s` }}>
            <div className="edu-node" style={{ background: `linear-gradient(135deg, ${item.color}33, ${item.color}55)`, borderColor: item.color }}>
              <span>{item.icon}</span>
            </div>

            <div className="glass-card edu-card">
              <div className="edu-card-top" style={{ '--c': item.color }}>
                <div className="edu-period-badge">{item.period}</div>
                <span className={`edu-status ${item.status === 'Ongoing' ? 'ongoing' : 'done'}`}>
                  {item.status === 'Ongoing' ? '🟢' : '✅'} {item.status}
                </span>
              </div>

              <div className="edu-card-body">
                <h2 className="edu-degree">{item.degree}</h2>
                <h3 className="edu-inst">{item.institution}</h3>
                <p className="edu-desc">{item.desc}</p>

                <div className="edu-highlights">
                  {item.highlights.map(h => (
                    <span key={h} className="edu-chip">{h}</span>
                  ))}
                </div>
              </div>

              <div className="edu-card-accent" style={{ background: `linear-gradient(135deg, ${item.color}20, transparent)` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Future goal */}
      <div className="glass-card future-card">
        <div className="future-icon">🚀</div>
        <div className="future-text">
          <h3>Next: Full Stack Developer</h3>
          <p>Graduating in 2027, aiming to contribute to innovative tech teams and build impactful web applications that make a difference.</p>
        </div>
        <div className="future-badge">2027</div>
      </div>
    </div>
  </div>
);

export default Education;
