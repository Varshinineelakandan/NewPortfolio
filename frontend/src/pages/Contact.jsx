import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [focused, setFocused] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: '👤' },
    { name: 'email', label: 'Email Address', type: 'email', icon: '📧' },
    { name: 'subject', label: 'Subject', type: 'text', icon: '✏️' },
  ];

  return (
    <div className="page-wrapper contact-wrapper">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">Get In Touch</span>
          <h1 className="section-title">Let's <span>Connect</span></h1>
          <p className="section-subtitle">I'm open to internship opportunities, collaborations, and interesting conversations.</p>
        </div>

        <div className="contact-layout">
          {/* LEFT — Info */}
          <div className="contact-info">
            <div className="glass-card info-card">
              <h2>Let's Work Together</h2>
              <p>Whether you have an opportunity to share, a project idea, or just want to say hello — I'd love to hear from you!</p>

              <div className="info-items">
                {[
                  { icon: '📍', label: 'Location', val: 'Thoraipakkam, Chennai' },
                  { icon: '📧', label: 'Email', val: 'neelakandanvarshini@gmail.com' },
                  { icon: '📞', label: 'Phone', val: '+91 8925785752' },
                ].map(item => (
                  <div key={item.label} className="info-row">
                    <div className="info-icon-box">{item.icon}</div>
                    <div>
                      <div className="info-label">{item.label}</div>
                      <div className="info-val">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-socials">
                <a href="https://github.com/Varshinineelakandan" target="_blank" rel="noreferrer" className="info-social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/varshinineelakandan-19044329a/" target="_blank" rel="noreferrer" className="info-social-btn linkedin">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="contact-form-wrap">
            <div className="glass-card form-card">
              <h3 className="form-title">Send a Message</h3>

              {status === 'success' && (
                <div className="status-msg success-msg">
                  🎉 Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="status-msg error-msg">
                  ⚠️ Something went wrong. Please try again or email directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                {fields.map(f => (
                  <div key={f.name} className={`field-group ${focused === f.name || form[f.name] ? 'active' : ''}`}>
                    <label className="field-label" htmlFor={f.name}>
                      <span className="field-icon">{f.icon}</span> {f.label}
                    </label>
                    <input
                      id={f.name}
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(f.name)}
                      onBlur={() => setFocused('')}
                      required
                      autoComplete="off"
                      className="field-input"
                    />
                    <div className="field-border" />
                  </div>
                ))}

                <div className={`field-group ${focused === 'message' || form.message ? 'active' : ''}`}>
                  <label className="field-label" htmlFor="message">
                    <span className="field-icon">💬</span> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                    rows={5}
                    className="field-input field-textarea"
                  />
                  <div className="field-border" />
                </div>

                <button type="submit" className="btn-primary submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <><span className="spinner" /> Sending...</>
                  ) : (
                    <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
