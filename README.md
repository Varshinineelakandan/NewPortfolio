# 🌊 Varshini N — Developer Portfolio

A premium, futuristic multi-page developer portfolio built with **React.js**, **Plain CSS**, and **Express.js**.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary BG | `#F1F9FB` |
| Secondary BG | `#D5F2F8` |
| Light Accent | `#9BD8DB` |
| Main Accent | `#3C949E` |
| Dark Accent | `#024F55` |

**Fonts:** Poppins · Outfit · Inter  
**Style:** Glassmorphism · Aqua Gradients · Futuristic Premium

---

## 📁 Project Structure

```
portfolio/
├── frontend/                   # React.js app
│   ├── public/
│   │   └── index.html
│   │   └── resume.pdf          ← Add your resume here
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Certifications.jsx
│   │   │   └── Contact.jsx
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   ├── Navbar.css
│   │   │   ├── Home.css
│   │   │   ├── About.css
│   │   │   ├── Skills.css
│   │   │   ├── Projects.css
│   │   │   ├── Education.css
│   │   │   ├── Certifications.css
│   │   │   └── Contact.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── backend/                    # Express.js server
    ├── server.js
    ├── .env.example
    └── package.json
```

---

## 🚀 Quick Setup

### 1. Frontend

```bash
cd frontend
npm install
npm start
```

Runs at `http://localhost:3000`

---

### 2. Backend (for Contact Form)

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
```

> **Gmail App Password:** Go to Google Account → Security → 2-Step Verification → App Passwords → Generate one for "Mail".

```bash
npm run dev
```

Runs at `http://localhost:5000`

---

## 📄 Add Your Resume

Place your resume PDF at:

```
frontend/public/resume.pdf
```

The "Download Resume" button on the Home page links to this file.

---

## 📱 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero with typing effect, profile, floating cards |
| About | `/about` | Split layout, timeline, stats |
| Skills | `/skills` | Circular progress bars, tech bars |
| Projects | `/projects` | Bento grid, modal popups |
| Education | `/education` | Animated vertical timeline |
| Certifications | `/certifications` | Shimmer cards gallery |
| Contact | `/contact` | Glassmorphism form + Express backend |

---

## ✨ Features

- ⚛️ React Router DOM multi-page navigation
- 🎨 Premium glassmorphism UI throughout
- 💫 CSS keyframe animations on every page
- 🌊 Floating aqua blobs and glow effects
- ✍️ Typing text effect on Home hero
- 📊 IntersectionObserver-animated skill progress circles
- 🔲 Bento-grid project layout with modal popups
- 📱 Fully responsive — mobile, tablet, desktop
- 🔒 Backend form validation with Nodemailer
- 🎠 Smooth page transitions

---

## 🛠 Customization Tips

1. **Profile Photo:** Replace the SVG placeholder in `Home.jsx` with an `<img>` tag pointing to your photo in `public/`
2. **Project GitHub Links:** Update the `github` URL in each project object inside `Projects.jsx`
3. **Live Demo Links:** Update `demo` URLs in `Projects.jsx`
4. **Social Links:** Update all `href` values in `Home.jsx`, `Contact.jsx`, `Certifications.jsx`
5. **Color Tweaks:** Edit CSS variables in `src/styles/global.css`

---

## 📦 Dependencies

### Frontend
- react `^18`
- react-dom `^18`
- react-router-dom `^6`

### Backend
- express
- nodemailer
- cors
- dotenv
