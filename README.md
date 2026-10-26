# ⚡ BlogSpace - Modern Responsive Technical Blogging Platform

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-blueviolet?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

**BlogSpace** is an aesthetic, fully responsive frontend blog application built from scratch using pure **HTML5, Vanilla CSS, and JavaScript (ES6+)**. Designed with modern glassmorphism, dynamic animations, theme switching, and persistent client-side data management using `localStorage`.

> **Submission for:** Module 1 (Day 1 – Day 4) · High Priority Beginner Frontend Development

---

## 🌟 Key Features

### 1. 🏠 Home Page (`index.html`)
- **Hero Showcase:** Catchy headline with animated gradient typography and interactive search bar.
- **Dynamic Filtering:** Filter articles instantly by category (*All, Web Dev, Design, AI & ML, Technology, Productivity*).
- **Live Search:** Fast keyword search across titles, excerpts, and tags without page reload.
- **Featured Post Spotlight:** Highlighting top engineering thought leadership.
- **Engaging Cards:** Image zoom on hover, read time indicators, author avatars, and one-click likes.
- **Newsletter Subscription:** Interactive subscription form with toast feedback.

### 2. 🔐 Authentication Pages (`login.html` & `register.html`)
- **Modern Glassmorphic Cards:** Glowing borders, subtle backdrops, and accessible floating inputs.
- **Quick Demo Fill:** One-click tester button to autofill credentials (`sankar@blogspace.dev` / `password123`) for rapid grading and review.
- **Password Visibility Toggle:** Show / hide password eye button.
- **Form Validation:** Client-side validation for email formats and password matching (min 6 characters).
- **Auto-Login:** Registered users are saved to the local registry and automatically logged in.

### 3. 📊 Author Dashboard (`dashboard.html`)
- **Personalized Header:** Welcomes the logged-in user dynamically.
- **Real-Time Analytics Grid:**
  - Total Published Articles
  - Lifetime Reads / Views counter
  - Community Likes
  - Reader Discussions
- **Article Management Table:** Responsive table showing all published posts with immediate **View** and **Delete** actions (synced reactive state).

### 4. ✍️ Create & Draft Blog (`create-blog.html`)
- **Dual-Tab Interface:** Toggle seamlessly between **Editor** and **Live Preview** before publishing.
- **Formatting Toolbar:** Quick-insert markdown shortcuts for Bold, Italic, H2, H3, Blockquotes, Code Blocks, and Links.
- **Live Cover Preview:** Real-time preview of cover image URLs.
- **Client Persistence:** Instant publishing to `localStorage` with automated redirect to the live article.

### 5. 📖 Blog Reader View (`post.html`)
- **Full Reading Experience:** Clean editorial layout with typography optimized for long-form reading.
- **Formatted Markdown & Code Blocks:** Styled code snippets and blockquotes.
- **Interactive Engagement:** Persistent Like button and Clipboard share link generator.
- **Live Discussion:** Working commenting system with immediate submission and storage.

### 6. 🎨 Design System & Theme Engine
- **Dark Mode & Light Mode:** System-wide toggle with saved user preference in `localStorage`.
- **Modern Typography:** Handpicked Google Fonts (`Plus Jakarta Sans` & `Space Grotesk`).
- **Fully Responsive Layout:** Optimized across 320px mobile screens, tablets, and 4K desktop displays.
- **Toast Notifications:** Non-intrusive animated toast alert system for all user interactions.

---

## 📂 Project Directory Structure

```text
BlogSpace/
├── index.html          # Home landing page with search, filters & grid
├── login.html          # Authentication login page with demo autofill
├── register.html       # User signup page with client validation
├── dashboard.html      # Author dashboard with metrics & post management
├── create-blog.html    # Story creation editor with live preview tab
├── post.html           # Full article reading page with comments
├── css/
│   └── style.css       # Complete design system, themes, and animations
├── js/
│   ├── api.js          # REST API client & JWT token manager
│   └── app.js          # Core app state, controllers, and reactive views
├── server/
│   ├── config/
│   │   └── config.js   # Environment configuration
│   ├── controllers/
│   │   ├── authController.js  # Registration, login & profile logic
│   │   └── blogController.js  # Blog CRUD, likes & comments logic
│   ├── middleware/
│   │   ├── authMiddleware.js  # JWT authentication verification
│   │   └── errorHandler.js    # Global error handling
│   ├── storage/
│   │   ├── db.js              # JSON file-based database engine
│   │   └── initialSeed.js     # Default user & articles seed data
│   ├── data/                  # Auto-generated JSON storage
│   │   ├── users.json
│   │   └── posts.json
│   └── server.js       # Express application configuration
├── server.js           # Server launch entrypoint
├── test-api.js         # Automated REST API test suite
├── package.json        # Dependencies & scripts
├── .env                # Environment variables
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation and submission guide
```

---

## 🚀 How to Run the Backend & Application

### 1. Start the Node.js / Express Server
Install dependencies (if not already installed) and start the server:

```bash
npm install
npm start
```
*Or for hot-reloading development:*
```bash
npm run dev
```

The Express server will start at:
- **Web Application:** `http://localhost:5000`
- **REST API Base URL:** `http://localhost:5000/api`

### 2. Run the Automated API Test Suite
Run the comprehensive 12-point automated test suite:
```bash
npm test
```

---

## 📡 REST API Documentation

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/api` | API Info, health status & endpoint discovery | No |
| `GET` | `/api/health` | Server uptime and health probe | No |
| `POST` | `/api/auth/register` | Register new user account (hashes password with bcrypt) | No |
| `POST` | `/api/auth/login` | Authenticate user & issue signed JWT token | No |
| `GET` | `/api/auth/me` | Fetch authenticated user profile | Yes (`Bearer <token>`) |
| `GET` | `/api/blogs` | Get all articles (filters: `?category=`, `?search=`, `?author=`) | No |
| `GET` | `/api/blogs/:id` | Get single blog by ID/slug & increment views | No |
| `POST` | `/api/blogs` | Create & publish new story with author attribution | Optional (JWT/body) |
| `POST` | `/api/blogs/:id/like` | Endorse / like an article | No |
| `POST` | `/api/blogs/:id/comments` | Post a discussion comment | Optional |
| `DELETE` | `/api/blogs/:id` | Delete article from platform | No |

---

## 🔑 Demo Login Credentials

For convenience during assessment:
- **Email:** `sankar@blogspace.dev`
- **Password:** `password123`
*(Or click the "Fill Demo" button on `login.html`)*

---

## 🛠️ Technologies Used

### Frontend:
- **HTML5:** Semantic structure, accessible forms, meta SEO tags.
- **Vanilla CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, Glassmorphism backdrop-filters, keyframe animations, media queries.
- **Vanilla JavaScript (ES6+):** Arrow functions, template literals, DOM manipulation, URLSearchParams, Event Delegation.
- **REST API Integration (`js/api.js`):** Unified fetch wrapper, JWT bearer token management, resilient offline fallbacks.

### Backend:
- **Node.js (v24+):** High-throughput runtime environment.
- **Express.js (v5+):** REST API framework, CORS middleware, JSON body parsing, route structuring.
- **Bcrypt.js:** Cryptographic password hashing (salt rounds: 10).
- **JSONWebToken (JWT):** Stateless bearer token authentication.
- **JSON Storage Engine:** Atomic file-based persistence for `users.json` and `posts.json`.

---

## 👨‍💻 Author
- **Project:** Module 2: Backend Development & REST API Integration
- **Repository:** [GitHub Repository](https://github.com/Sankarvelusamy08/blog-application)

