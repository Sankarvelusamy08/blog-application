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
- **Quick Demo Fill:** One-click tester button to autofill credentials (`alex@blogspace.dev` / `password123`) for rapid grading and review.
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
│   └── app.js          # Core app state, storage, auth, and controllers
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation and submission guide
```

---

## 🚀 How to Run Locally

Because this project is built using native web technologies (HTML, CSS, JS), no build steps or package installations are required!

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using VS Code Live Server
1. Open this repository folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. The application will launch at `http://127.0.0.1:5500/index.html`.

### Option 3: Python Built-in Server
Open your terminal in the project directory and run:
```bash
python -m http.server 8080
```
Then visit: `http://localhost:8080`

---

## 🔑 Demo Login Credentials

For convenience during assessment:
- **Email:** `alex@blogspace.dev`
- **Password:** `password123`
*(Or click the "Fill Demo" button on `login.html`)*

---

## 🛠️ Technologies Used
- **HTML5:** Semantic structure, accessible forms, meta SEO tags.
- **Vanilla CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, Glassmorphism backdrop-filters, keyframe animations, media queries.
- **Vanilla JavaScript (ES6+):** Arrow functions, template literals, DOM manipulation, URLSearchParams, Event Delegation, LocalStorage API.

---

## 👨‍💻 Author
- **Project:** Module 1: Frontend Development Submission
- **Repository:** [GitHub Repository](https://github.com/)
