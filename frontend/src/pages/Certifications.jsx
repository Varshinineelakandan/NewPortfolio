import React,{useState} from 'react';
import '../styles/Certifications.css';


const certs = [
  {
    title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
    org: 'Oracle University',
    certificate: '/Certificates/oracleCertificate.pdf',
    year: '2024',
    type: 'Professional Certification',
    desc: 'Oracle-recognized professional certification validating expertise in Generative AI concepts, large language models, and AI services on Oracle Cloud Infrastructure.',
    icon: '🤖',
    skills: ['Generative AI', 'Oracle Cloud', 'LLMs', 'AI Services'],
    color: '#9BD8DB',
    badge: '🏆',
  },
  {
    title: 'Software Programmer - Java (Gold)',
    org: 'NASSCOM FutureSkills Prime',
    certificate: '/Certificates/software programmer-java.pdf',
    year: '2026',
    type: 'Industry Certification',
    desc: 'Government-approved NASSCOM Gold-category assessment (86%) certifying proficiency in Java programming aligned to IT-ITeS industry competency standards.',
    icon: '☕',
    skills: ['Java', 'OOP', 'Programming', 'Software Development'],
    color: '#024F55',
    badge: '🥇',
  },
  {
    title: 'Full Stack Development with MERN',
    org: 'NASSCOM Foundation / thingQbator',
    certificate: '/Certificates/nasscom-fsd.pdf',
    year: '2025',
    type: 'Certificate of Excellence',
    desc: "Certificate of Excellence for completing Full Stack Development with MERN stack — MongoDB, Express, React, and Node.js — under Cisco's CSR-backed thingQbator program.",
    icon: '🌐',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    color: '#9BD8DB',
    badge: '🏅',
  },
  {
    title: 'Introduction to Generative AI',
    org: 'Google Cloud / Coursera',
    certificate: '/Certificates/gen AI.pdf',
    year: '2025',
    type: 'Course Certificate',
    desc: 'Google Cloud-authorized course covering the fundamentals of Generative AI, including how large language models work and their real-world applications.',
    icon: '🧠',
    skills: ['Generative AI', 'LLMs', 'Google Cloud', 'AI Concepts'],
    color: '#024F55',
    badge: '🎓',
  },
  {
    title: 'Acquiring Data (Gold)',
    org: 'NASSCOM FutureSkills Prime',
    certificate: '/Certificates/acquiring data.pdf',
    year: '2024',
    type: 'Industry Certification',
    desc: 'Government-approved NASSCOM Gold-category assessment (73%) covering data acquisition techniques, tools, and best practices for modern data-driven applications.',
    icon: '📊',
    skills: ['Data Acquisition', 'Analytics', 'Tools', 'Industry Practices'],
    color: '#9BD8DB',
    badge: '🏅',
  },
  {
    title: 'Full Stack Development',
    org: 'Internship Program',
    certificate: '/Certificates/Intern Certificate-varshini.pdf',
    year: '2024',
    type: 'Internship',
    desc: 'Comprehensive hands-on training in full stack web development covering frontend, backend, database management, and deployment practices.',
    icon: '💻',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    color: '#024F55',
    badge: '⭐',
  },
  {
    title: 'Learn Bootstrap',
    org: 'Scrimba / Coursera',
    certificate: '/Certificates/bootstrap.pdf',
    year: '2025',
    type: 'Course Certificate',
    desc: 'Completed hands-on Bootstrap training covering responsive grid systems, UI components, and building mobile-first web layouts efficiently.',
    icon: '🎨',
    skills: ['Bootstrap', 'Responsive Design', 'CSS Framework', 'UI Components'],
    color: '#9BD8DB',
    badge: '🎓',
  },
  {
    title: 'HTML & CSS Crash Course',
    org: 'Scrimba / Coursera',
    certificate: '/Certificates/nasscom html & css.pdf',
    year: '2025',
    type: 'Course Certificate',
    desc: 'Completed an intensive HTML & CSS course covering semantic markup, styling, layouts, and building structured web pages from scratch.',
    icon: '🖥️',
    skills: ['HTML5', 'CSS3', 'Web Design', 'Layouts'],
    color: '#024F55',
    badge: '🎓',
  },
];

const Certifications = () => {

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return(

  <div className="page-wrapper cert-wrapper">
    <div className="blob blob-1" />
    <div className="blob blob-2" />
    <div className="blob blob-3" />

    <div className="cert-container">
      <div className="cert-header">
        <span className="section-tag">Achievements</span>
        <h1 className="section-title">My <span>Certifications</span></h1>
        <p className="section-subtitle">Credentials that validate my continuous learning and professional development.</p>
      </div>

      {/* Count banner */}
      <div className="cert-banner glass-card">
        <div className="cb-item">
          <span className="cb-num">8</span>
          <span className="cb-label">Certifications</span>
        </div>
        <div className="cb-divider" />
        <div className="cb-item">
          <span className="cb-num">2024–26</span>
          <span className="cb-label">Years Earned</span>
        </div>
        <div className="cb-divider" />
        <div className="cb-item">
          <span className="cb-num">5+</span>
          <span className="cb-label">Orgs & Platforms</span>
        </div>
      </div>

      {/* Cert grid */}
      <div className="cert-grid">
        {certs.map((cert, i) => (
          <div key={i} className="glass-card cert-card" style={{ animationDelay: `${i * 0.15}s` }}>
            {/* Top Stripe */}
            <div className="cert-stripe" style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}88)` }}>
              <span className="cert-stripe-icon">{cert.icon}</span>
              <div className="cert-badge-pill">{cert.type}</div>
            </div>

            <div className="cert-body">
              <div className="cert-org-row">
                <span className="cert-org">{cert.org}</span>
                <span className="cert-year">{cert.year}</span>
              </div>
              <h2 className="cert-title">{cert.title}</h2>
              <p className="cert-desc">{cert.desc}</p>

              <div className="cert-skills">
                {cert.skills.map(s => <span key={s} className="cert-skill-tag">{s}</span>)}
              </div>

              <div className="cert-footer">
                <span className="cert-award">{cert.badge} Verified</span>
                <button
                  className="cert-shimmer-btn"
                  onClick={() => setSelectedCertificate(cert.certificate)}
                >
                  View Certificate
                </button>
              </div>
            </div>

            <div className="cert-hover-overlay" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cert-cta glass-card">
        <div>
          <h3>Always Learning</h3>
          <p>Committed to continuous upskilling through industry certifications, online courses, and hands-on projects.</p>
        </div>
        <a href="https://www.linkedin.com/in/varshinineelakandan-19044329a/" target="_blank" rel="noreferrer" className="btn-primary">
          View LinkedIn Profile →
        </a>
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
            >
              ✕
            </button>

            {selectedCertificate.endsWith(".pdf") ? (
              <iframe
                src={selectedCertificate}
                title="Certificate"
                className="certificate-frame"
              />
            ) : (
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="certificate-image"
              />
            )}
          </div>
        </div>
      )}
    </div>
  </div>
);
};
export default Certifications;