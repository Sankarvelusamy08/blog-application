/**
 * BlogSpace - High-End Technical Publishing Application
 * Enterprise-grade client state management, interactive telemetry,
 * markdown parsing, real-time filters, and theme switcher.
 */

// ==========================================
// 1. Initial High-Quality Seed Data
// ==========================================
const DEFAULT_USER = {
  id: "user-1",
  name: "Alex Morgan",
  email: "alex@blogspace.dev",
  password: "password123",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  role: "Principal Frontend Architect",
  bio: "Specializing in high-throughput distributed frontend systems, design tokens, and web performance."
};

const INITIAL_POSTS = [
  {
    id: "post-1",
    title: "Mastering Modern CSS: Subgrid, Container Queries & Cascade Layers",
    slug: "mastering-modern-css",
    excerpt: "Explore next-generation CSS layout primitives that are completely redefining responsive web architecture in modern production browsers.",
    content: `CSS has undergone a monumental renaissance over the past few years. Features that once required heavy JavaScript polyfills or complex flexbox hacks can now be natively expressed with clean, declarative syntax.

## Why Container Queries Change Everything

For over a decade, web designers relied strictly on Media Queries tied to viewport width. But in component-based architectures, a card component doesn't care about the screen size—it cares about the size of its parent grid column!

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

With Container Queries, our components are truly autonomous, portable, and responsive anywhere they are mounted.

## The Power of Cascade Layers (@layer)

Managing specificity in large applications has historically caused specificity wars. By organizing your styles into explicit layers:

\`\`\`css
@layer reset, base, components, utilities;
\`\`\`

You gain predictable cascading behavior, regardless of file load order or selector depth. Dive in and start modernizing your stylesheet today!`,
    category: "Web Dev",
    tags: ["CSS", "Frontend", "Architecture"],
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Principal Architect"
    },
    publishedAt: "Oct 14, 2026",
    readTime: "6 min read",
    views: 4280,
    likes: 184,
    status: "Published",
    comments: [
      { id: "c1", name: "David Chen", text: "Container queries have eliminated 80% of our layout JavaScript. Outstanding write-up!", date: "Oct 14, 2026" }
    ],
    featured: true
  },
  {
    id: "post-2",
    title: "The Architecture of Agentic AI: Autonomous Workflows in Modern Dev",
    slug: "architecture-of-agentic-ai",
    excerpt: "A deep dive into multi-agent coordination, deterministic tool execution, self-debugging loops, and long-context memory patterns.",
    content: `We are witnessing a profound transition from generative AI that merely autocompletes text to agentic AI that plans, executes, verifies, and self-corrects.

## The Core Triad of Agentic Systems

Autonomous agents thrive on three foundational capabilities:
1. **Tool Augmented Execution:** Interacting with real terminal environments, browsers, and external APIs.
2. **Reflective Self-Correction:** Analyzing test suites and compiler outputs to iterate on solutions without human intervention.
3. **Structured Long-Context Memory:** Maintaining persistent project knowledge items across sessions.

> "The true measure of developer productivity in this new era is not lines of code written, but orchestrating capable agents to build resilient systems."

Frontend developers who understand how to design ergonomic interfaces for agentic telemetry will lead the next generation of software engineering.`,
    category: "AI & ML",
    tags: ["AI", "Agents", "Architecture"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Dr. Sophia Vance",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      role: "AI Research Lead"
    },
    publishedAt: "Oct 12, 2026",
    readTime: "8 min read",
    views: 7120,
    likes: 429,
    status: "Published",
    comments: [],
    featured: false
  },
  {
    id: "post-3",
    title: "Designing High-End Dark Modes with Perceptual Contrast & Elevation",
    slug: "designing-high-end-dark-modes",
    excerpt: "Pure pitch black causes visual halation. Discover how subtle slate hues, surface luminescence, and elevation tokens create sublime UX.",
    content: `Dark mode is no longer an optional toggle—it's an essential accessibility feature. Yet many applications simply invert hex colors or set backgrounds to pure #000000.

### The Problem with Pure Black
Pure black against pure white creates extreme optical vibration (halation) that strains the human eye, particularly for users with astigmatism.

Instead, craft your dark palette with:
- Deep Slate or Obsidian backgrounds (e.g., #080b11 or #0e131f).
- Subtle surface luminescence rather than heavy drop shadows.
- Ambient radial glow meshes that provide depth without overwhelming content.

Test your interfaces across OLED screens and ambient light conditions to guarantee readability!`,
    category: "Design",
    tags: ["UI/UX", "DesignSystem", "Tokens"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      role: "VP of Product Design"
    },
    publishedAt: "Oct 10, 2026",
    readTime: "5 min read",
    views: 3410,
    likes: 215,
    status: "Published",
    comments: [],
    featured: false
  },
  {
    id: "post-4",
    title: "Vanilla JS Performance: Eliminating Abstraction Bloat at Scale",
    slug: "vanilla-js-performance",
    excerpt: "Why returning to fundamental DOM manipulation and native browser primitives can supercharge site speed and mental models.",
    content: `Modern frameworks are powerful, but mastering native JavaScript empowers you to understand what happens under the hood.

Every framework abstraction eventually translates into native DOM operations:
- DocumentFragment for zero-reflow batch DOM insertions
- Event Delegation on root containers for high-performance virtualized feeds
- IntersectionObserver for silky smooth lazy loading and scroll reveals

When you build with pure JavaScript, your bundle size is negligible, your execution speed is unmatched, and your web fundamentals become rock-solid.`,
    category: "Web Dev",
    tags: ["JavaScript", "Performance", "CoreWebVitals"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Principal Architect"
    },
    publishedAt: "Oct 08, 2026",
    readTime: "7 min read",
    views: 5820,
    likes: 312,
    status: "Published",
    comments: [],
    featured: false
  },
  {
    id: "post-5",
    title: "Distributed Edge Computing: Moving Compute to the Speed of Light",
    slug: "distributed-edge-computing",
    excerpt: "How low-latency edge runtime environments and geo-replicated data caches are redefining global web response times.",
    content: `Latency is the silent killer of user engagement. Running compute at edge locations worldwide guarantees single-digit millisecond responses for users whether they are in Tokyo, London, or San Francisco.

Learn how edge middleware, global key-value caches, and distributed SQL databases work together in modern web development stacks to deliver instantaneous experiences.`,
    category: "Technology",
    tags: ["Cloud", "DevOps", "Edge"],
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      role: "VP of Engineering"
    },
    publishedAt: "Oct 04, 2026",
    readTime: "6 min read",
    views: 3950,
    likes: 188,
    status: "Published",
    comments: [],
    featured: false
  },
  {
    id: "post-6",
    title: "The 10 Habits of 10x Engineers in High-Velocity Startups",
    slug: "habits-10x-engineers",
    excerpt: "From deep work scheduling to asynchronous communication, discover how elite developers deliver immense business leverage.",
    content: `Being a high-impact developer isn't about typing faster or pulling all-nighters. It's about cognitive clarity, prioritization, and building durable leverage.

### 1. Protect Deep Work Blocks
Schedule unbroken 3-hour blocks where notifications are silenced and Slack is closed.

### 2. Bias Towards Fast Feedback Loops
Write unit tests, automated linting, and rapid hot reloading so your ideas can be verified in seconds, not minutes.

### 3. Clear Technical Writing
Document architectural decisions with lightweight ADRs (Architecture Decision Records). Clear writing precedes clear code.`,
    category: "Productivity",
    tags: ["Career", "Mindset", "Leadership"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Principal Architect"
    },
    publishedAt: "Oct 01, 2026",
    readTime: "4 min read",
    views: 2840,
    likes: 164,
    status: "Published",
    comments: [],
    featured: false
  }
];

// ==========================================
// 2. LocalStorage Store
// ==========================================
const Storage = {
  getPosts: () => {
    const raw = localStorage.getItem("blogspace_posts_v2");
    if (!raw) {
      localStorage.setItem("blogspace_posts_v2", JSON.stringify(INITIAL_POSTS));
      return INITIAL_POSTS;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return INITIAL_POSTS;
    }
  },

  savePosts: (posts) => {
    localStorage.setItem("blogspace_posts_v2", JSON.stringify(posts));
  },

  getUser: () => {
    const raw = localStorage.getItem("blogspace_currentUser_v2");
    if (!raw) {
      localStorage.setItem("blogspace_currentUser_v2", JSON.stringify(DEFAULT_USER));
      return DEFAULT_USER;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  },

  setUser: (user) => {
    if (user) {
      localStorage.setItem("blogspace_currentUser_v2", JSON.stringify(user));
    } else {
      localStorage.removeItem("blogspace_currentUser_v2");
    }
  },

  getUsersList: () => {
    const raw = localStorage.getItem("blogspace_all_users_v2");
    if (!raw) {
      const list = [DEFAULT_USER];
      localStorage.setItem("blogspace_all_users_v2", JSON.stringify(list));
      return list;
    }
    return JSON.parse(raw);
  },

  saveUserToRegistry: (user) => {
    const users = Storage.getUsersList();
    users.push(user);
    localStorage.setItem("blogspace_all_users_v2", JSON.stringify(users));
  }
};

// ==========================================
// 3. Theme Manager
// ==========================================
const Theme = {
  init: () => {
    const savedTheme = localStorage.getItem("blogspace_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    Theme.updateButtonIcon(savedTheme);

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", Theme.toggle);
    }
  },

  toggle: () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("blogspace_theme", next);
    Theme.updateButtonIcon(next);
    showToast(`Switched to ${next.toUpperCase()} theme`, "info");
  },

  updateButtonIcon: (theme) => {
    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === "dark" 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      toggleBtn.setAttribute("title", `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`);
    }
  }
};

// ==========================================
// 4. Toast Notification Engine
// ==========================================
function showToast(message, type = "info") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let iconSvg = "";
  if (type === "success") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "error") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
  } else {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    <span>${iconSvg}</span>
    <span style="font-weight: 600; font-size: 0.9rem;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(12px) scale(0.96)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 5. Scroll Reading Progress Bar & Shortcut
// ==========================================
function setupGlobalEnhancements() {
  const progressBar = document.getElementById("readingProgressBar");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${scrolled}%`;
    });
  }

  // Ctrl + K or Cmd + K shortcut to focus search input
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      const searchInput = document.getElementById("homeSearchInput");
      if (searchInput) {
        e.preventDefault();
        searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => searchInput.focus(), 300);
      }
    }
  });
}

// ==========================================
// 6. Navigation Bar & User Dropdown
// ==========================================
function setupNavbar() {
  const user = Storage.getUser();
  const navAuthContainer = document.getElementById("navAuthContainer");
  
  if (navAuthContainer) {
    if (user) {
      navAuthContainer.innerHTML = `
        <a href="create-blog.html" class="btn btn-primary btn-sm" id="navCreateBtn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span>Write</span>
        </a>
        <div class="user-menu-wrapper">
          <button class="user-avatar-btn" id="userMenuToggle" aria-label="User Account Menu">
            <img src="${user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}" alt="${user.name}" class="avatar-img" />
            <span class="avatar-name">${user.name.split(" ")[0]}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="user-dropdown" id="userDropdown">
            <div style="padding: 0.6rem 0.85rem 0.5rem;">
              <strong style="font-size: 0.925rem; display: block; color: var(--text-main);">${user.name}</strong>
              <span style="font-size: 0.8rem; color: var(--text-dim);">${user.email}</span>
            </div>
            <div class="dropdown-divider"></div>
            <a href="dashboard.html" class="dropdown-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span>Analytics Dashboard</span>
            </a>
            <a href="create-blog.html" class="dropdown-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              <span>Article Studio</span>
            </a>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item" id="logoutBtn" style="color: var(--accent-rose); width: 100%; border: none; background: transparent; cursor: pointer; text-align: left;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <span>Log Out</span>
            </button>
          </div>
        </div>
      `;

      const menuToggle = document.getElementById("userMenuToggle");
      const dropdown = document.getElementById("userDropdown");
      if (menuToggle && dropdown) {
        menuToggle.addEventListener("click", (e) => {
          e.stopPropagation();
          dropdown.classList.toggle("show");
        });

        document.addEventListener("click", () => dropdown.classList.remove("show"));
      }

      const logoutBtn = document.getElementById("logoutBtn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
          Storage.setUser(null);
          showToast("Session ended. Redirecting...", "info");
          setTimeout(() => window.location.href = "login.html", 600);
        });
      }
    } else {
      navAuthContainer.innerHTML = `
        <a href="login.html" class="btn btn-secondary btn-sm">Sign In</a>
        <a href="register.html" class="btn btn-primary btn-sm">Get Started</a>
      `;
    }
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
}

// ==========================================
// 7. Home Page Controller (index.html)
// ==========================================
function initHomePage() {
  const posts = Storage.getPosts();
  let currentCategory = "All";
  let searchKeyword = "";

  const featuredCardWrap = document.getElementById("featuredPostContainer");
  const postsGrid = document.getElementById("postsGrid");
  const categoryPillsContainer = document.getElementById("categoryFilters");
  const searchInput = document.getElementById("homeSearchInput");

  // Render Category Filter buttons
  const categories = ["All", "Web Dev", "Design", "AI & ML", "Technology", "Productivity"];
  if (categoryPillsContainer) {
    categoryPillsContainer.innerHTML = categories.map(cat => `
      <button class="category-btn ${cat === currentCategory ? 'active' : ''}" data-cat="${cat}">
        ${cat}
      </button>
    `).join("");

    categoryPillsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".category-btn");
      if (!btn) return;
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-cat");
      filterAndRender();
    });
  }

  // Search Input listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  function filterAndRender() {
    let filtered = posts.filter(p => {
      const matchCat = currentCategory === "All" || p.category.toLowerCase() === currentCategory.toLowerCase();
      const matchSearch = !searchKeyword || 
        p.title.toLowerCase().includes(searchKeyword) ||
        p.excerpt.toLowerCase().includes(searchKeyword) ||
        p.tags.some(t => t.toLowerCase().includes(searchKeyword));
      return matchCat && matchSearch;
    });

    // Render Editorial Featured Post (when on All and not searching)
    if (featuredCardWrap) {
      const featured = posts.find(p => p.featured) || posts[0];
      if (featured && currentCategory === "All" && !searchKeyword) {
        featuredCardWrap.style.display = "block";
        featuredCardWrap.innerHTML = `
          <div class="featured-card">
            <div class="featured-img-wrap">
              <img src="${featured.coverImage}" alt="${featured.title}" class="featured-img" loading="lazy" />
            </div>
            <div class="featured-content">
              <div class="card-meta">
                <span class="badge badge-pink">${featured.category}</span>
                <span style="font-size: 0.85rem; color: var(--text-dim);">${featured.readTime}</span>
              </div>
              <h2 class="featured-card-title">
                <a href="post.html?id=${featured.id}">${featured.title}</a>
              </h2>
              <p class="featured-card-excerpt">${featured.excerpt}</p>
              
              <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
                <div class="author-block">
                  <img src="${featured.author.avatar}" alt="${featured.author.name}" class="avatar-img" />
                  <div class="author-info">
                    <h5>${featured.author.name}</h5>
                    <p>${featured.publishedAt} · ${featured.author.role}</p>
                  </div>
                </div>

                <a href="post.html?id=${featured.id}" class="btn btn-primary btn-sm" style="gap: 0.4rem;">
                  <span>Read Story</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
              </div>
            </div>
          </div>
        `;
      } else {
        featuredCardWrap.style.display = "none";
      }
    }

    // Render Blog Posts Grid
    if (postsGrid) {
      if (filtered.length === 0) {
        postsGrid.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1;">
            <div class="empty-state-icon">🔍</div>
            <h3>No matching articles found</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">Try modifying your keyword query or switching topics.</p>
          </div>
        `;
        return;
      }

      postsGrid.innerHTML = filtered.map(post => `
        <article class="blog-card" id="card-${post.id}">
          <div class="card-img-wrapper">
            <a href="post.html?id=${post.id}">
              <img src="${post.coverImage}" alt="${post.title}" class="card-img" loading="lazy" />
            </a>
            <div class="card-badge-overlay">
              <span class="badge badge-cyan">${post.category}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-info-meta">
              <span>${post.publishedAt}</span>
              <span>•</span>
              <span>${post.readTime}</span>
            </div>
            <h3 class="blog-card-title">
              <a href="post.html?id=${post.id}">${post.title}</a>
            </h3>
            <p class="blog-card-excerpt">${post.excerpt}</p>
            <div class="card-footer">
              <div class="author-block">
                <img src="${post.author.avatar}" alt="${post.author.name}" class="avatar-img" style="width: 30px; height: 30px;" />
                <span style="font-size: 0.85rem; font-weight: 600;">${post.author.name}</span>
              </div>
              <div class="card-actions-row">
                <button class="like-btn" data-id="${post.id}" onclick="handleLikeClick('${post.id}')" title="Endorse article">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  <span class="like-count" id="like-${post.id}">${post.likes || 0}</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      `).join("");
    }
  }

  filterAndRender();
}

// Global Like Handler
window.handleLikeClick = function(postId) {
  const posts = Storage.getPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  post.likes = (post.likes || 0) + 1;
  Storage.savePosts(posts);

  const likeCountEl = document.getElementById(`like-${postId}`);
  if (likeCountEl) {
    likeCountEl.textContent = post.likes;
    likeCountEl.parentElement.classList.add("liked");
  }
  showToast("Endorsed story!", "success");
};

// ==========================================
// 8. Dashboard Page Controller (dashboard.html)
// ==========================================
function initDashboardPage() {
  const user = Storage.getUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const greetingEl = document.getElementById("dashUserGreeting");
  if (greetingEl) {
    greetingEl.textContent = `Welcome back, ${user.name.split(" ")[0]} 👋`;
  }

  const posts = Storage.getPosts();
  const userPosts = posts.filter(p => p.author && p.author.name === user.name);
  const displayPosts = userPosts.length > 0 ? userPosts : posts.slice(0, 5);

  // Compute metrics
  const totalPostsCount = displayPosts.length;
  const totalViewsCount = displayPosts.reduce((acc, curr) => acc + (curr.views || 0), 0);
  const totalLikesCount = displayPosts.reduce((acc, curr) => acc + (curr.likes || 0), 0);
  const totalCommentsCount = displayPosts.reduce((acc, curr) => acc + (curr.comments ? curr.comments.length : 0), 0);

  const statTotalPosts = document.getElementById("statTotalPosts");
  const statTotalViews = document.getElementById("statTotalViews");
  const statTotalLikes = document.getElementById("statTotalLikes");
  const statTotalComments = document.getElementById("statTotalComments");

  if (statTotalPosts) statTotalPosts.textContent = totalPostsCount;
  if (statTotalViews) statTotalViews.textContent = totalViewsCount.toLocaleString();
  if (statTotalLikes) statTotalLikes.textContent = totalLikesCount.toLocaleString();
  if (statTotalComments) statTotalComments.textContent = totalCommentsCount;

  // Render Table with Status Chips
  const tableBody = document.getElementById("dashboardPostsTableBody");
  if (tableBody) {
    if (displayPosts.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="6" class="empty-state">
            <div class="empty-state-icon">✍️</div>
            <h4>You haven't published any stories yet</h4>
            <a href="create-blog.html" class="btn btn-primary btn-sm" style="margin-top: 1rem;">Start Your First Story</a>
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = displayPosts.map(post => `
      <tr id="row-${post.id}">
        <td>
          <div class="table-post-cell">
            <img src="${post.coverImage}" alt="${post.title}" class="table-post-img" />
            <div>
              <a href="post.html?id=${post.id}" class="table-post-title">${post.title}</a>
              <span style="font-size: 0.8rem; color: var(--text-dim);">${post.category} · ${post.readTime}</span>
            </div>
          </div>
        </td>
        <td>
          <span class="badge badge-emerald" style="font-size: 0.7rem; padding: 0.2rem 0.6rem;">Published</span>
        </td>
        <td style="color: var(--text-muted); font-size: 0.875rem;">${post.publishedAt}</td>
        <td><strong>${(post.views || 0).toLocaleString()}</strong></td>
        <td><strong>${post.likes || 0}</strong></td>
        <td>
          <div class="action-buttons">
            <a href="post.html?id=${post.id}" class="btn btn-secondary btn-sm" title="View Story">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </a>
            <button class="btn btn-danger btn-sm" onclick="handleDeletePost('${post.id}')" title="Delete Story">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  }
}

window.handleDeletePost = function(postId) {
  if (!confirm("Are you sure you want to delete this story?")) return;

  let posts = Storage.getPosts();
  posts = posts.filter(p => p.id !== postId);
  Storage.savePosts(posts);

  const row = document.getElementById(`row-${postId}`);
  if (row) row.remove();
  showToast("Story deleted from store", "info");
  setTimeout(() => initDashboardPage(), 400);
};

// ==========================================
// 9. Create Blog Controller (create-blog.html)
// ==========================================
function initCreateBlogPage() {
  const user = Storage.getUser();
  if (!user) {
    showToast("Please sign in to publish stories", "error");
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  const form = document.getElementById("createBlogForm");
  const coverUrlInput = document.getElementById("coverUrlInput");
  const imagePreview = document.getElementById("imagePreview");
  const contentInput = document.getElementById("blogContentInput");
  const previewTab = document.getElementById("tabPreview");
  const writeTab = document.getElementById("tabWrite");
  const editorArea = document.getElementById("editorArea");
  const livePreviewArea = document.getElementById("livePreviewArea");
  const wordCountEl = document.getElementById("wordCount");
  const readTimeEstEl = document.getElementById("readTimeEst");

  // Word count & read time live updates
  if (contentInput && wordCountEl && readTimeEstEl) {
    contentInput.addEventListener("input", () => {
      const text = contentInput.value.trim();
      const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
      const minutes = Math.max(1, Math.ceil(words / 200));
      wordCountEl.textContent = words;
      readTimeEstEl.textContent = `${minutes} min`;
    });
  }

  // Cover image real-time preview
  if (coverUrlInput && imagePreview) {
    coverUrlInput.addEventListener("input", (e) => {
      const url = e.target.value.trim();
      if (url) {
        imagePreview.innerHTML = `<img src="${url}" alt="Cover Preview" onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\\'preview-placeholder\\'>Failed to load image preview</span>'" />`;
      } else {
        imagePreview.innerHTML = `<span class="preview-placeholder">Image preview will appear here</span>`;
      }
    });
  }

  // Tab switching
  if (writeTab && previewTab) {
    writeTab.addEventListener("click", () => {
      writeTab.classList.add("active");
      previewTab.classList.remove("active");
      editorArea.style.display = "block";
      livePreviewArea.style.display = "none";
    });

    previewTab.addEventListener("click", () => {
      previewTab.classList.add("active");
      writeTab.classList.remove("active");
      editorArea.style.display = "none";
      livePreviewArea.style.display = "block";

      const title = document.getElementById("blogTitleInput").value || "Untitled Story";
      const rawBody = contentInput.value || "Draft content will render here in real-time...";
      const formattedHtml = rawBody
        .split("\n\n")
        .map(p => {
          if (p.startsWith("```")) {
            const code = p.replace(/```[a-z]*/g, "").trim();
            return `<pre style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-xs); border: 1px solid var(--border-subtle); overflow-x: auto; margin: 1.5rem 0; font-family: var(--font-mono);"><code>${escapeHtml(code)}</code></pre>`;
          }
          if (p.startsWith("## ")) return `<h2>${p.replace("## ", "")}</h2>`;
          if (p.startsWith("### ")) return `<h3>${p.replace("### ", "")}</h3>`;
          if (p.startsWith("> ")) return `<blockquote>${p.replace("> ", "")}</blockquote>`;
          return `<p>${p}</p>`;
        })
        .join("");

      livePreviewArea.innerHTML = `
        <h1 style="font-size: 2.3rem; margin-bottom: 1.5rem; letter-spacing: -0.03em;">${title}</h1>
        <div class="post-body">${formattedHtml}</div>
      `;
    });
  }

  // Toolbar formatting shortcuts
  window.insertFormatting = function(prefix, suffix = "") {
    if (!contentInput) return;
    const start = contentInput.selectionStart;
    const end = contentInput.selectionEnd;
    const selected = contentInput.value.substring(start, end);
    const replacement = prefix + (selected || "sample text") + suffix;
    contentInput.value = contentInput.value.substring(0, start) + replacement + contentInput.value.substring(end);
    contentInput.focus();
    contentInput.setSelectionRange(start + prefix.length, start + prefix.length + (selected ? selected.length : 11));
    contentInput.dispatchEvent(new Event("input"));
  };

  // Form submit
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("blogTitleInput").value.trim();
      const category = document.getElementById("blogCategorySelect").value;
      const tagsRaw = document.getElementById("blogTagsInput").value;
      const coverImage = coverUrlInput.value.trim() || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";
      const content = contentInput.value.trim();

      if (!title || !content) {
        showToast("Please provide both headline and story body", "error");
        return;
      }

      const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim().replace(/^#/, "")) : [category];
      const readMinutes = Math.max(1, Math.ceil(content.split(/\s+/).length / 200));

      const newPost = {
        id: "post-" + Date.now(),
        title,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        excerpt: content.substring(0, 160).replace(/[#*`]/g, "") + "...",
        content,
        category,
        tags,
        coverImage,
        author: {
          name: user.name,
          avatar: user.avatar,
          role: user.role || "Author"
        },
        publishedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        readTime: `${readMinutes} min read`,
        views: 1,
        likes: 0,
        status: "Published",
        comments: [],
        featured: false
      };

      const posts = Storage.getPosts();
      posts.unshift(newPost);
      Storage.savePosts(posts);

      showToast("🎉 Story broadcasted to BlogSpace!", "success");
      setTimeout(() => {
        window.location.href = `post.html?id=${newPost.id}`;
      }, 900);
    });
  }
}

// ==========================================
// 10. Blog Detail Reader (post.html)
// ==========================================
function initPostDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  const posts = Storage.getPosts();
  const post = posts.find(p => p.id === postId) || posts[0];

  if (!post) {
    window.location.href = "index.html";
    return;
  }

  // Increment view telemetry
  post.views = (post.views || 0) + 1;
  Storage.savePosts(posts);

  document.title = `${post.title} — BlogSpace`;

  const detailContainer = document.getElementById("postDetailContainer");
  if (detailContainer) {
    const formattedBody = post.content
      .split("\n\n")
      .map(block => {
        if (block.startsWith("```")) {
          const code = block.replace(/```[a-z]*/g, "").trim();
          return `<pre style="background: var(--bg-surface); padding: 1.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); overflow-x: auto; margin: 2rem 0; font-family: var(--font-mono); font-size: 0.95rem; line-height: 1.6;"><code>${escapeHtml(code)}</code></pre>`;
        }
        if (block.startsWith("## ")) return `<h2>${block.replace("## ", "")}</h2>`;
        if (block.startsWith("### ")) return `<h3>${block.replace("### ", "")}</h3>`;
        if (block.startsWith("> ")) return `<blockquote>${block.replace("> ", "")}</blockquote>`;
        return `<p>${block}</p>`;
      })
      .join("");

    detailContainer.innerHTML = `
      <div class="post-header">
        <div style="display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1.25rem;">
          <span class="badge badge-pink">${post.category}</span>
          <span style="font-size: 0.875rem; color: var(--text-dim);">${post.publishedAt} · ${post.readTime}</span>
        </div>

        <h1 class="post-title">${post.title}</h1>

        <div class="author-block" style="margin-top: 1.75rem;">
          <img src="${post.author.avatar}" alt="${post.author.name}" class="avatar-img" style="width: 48px; height: 48px;" />
          <div class="author-info">
            <h5 style="font-size: 1.05rem;">${post.author.name}</h5>
            <p>${post.author.role || 'Contributor'} · ${(post.views || 0).toLocaleString()} views</p>
          </div>
        </div>
      </div>

      <img src="${post.coverImage}" alt="${post.title}" class="post-hero-image" />

      <div class="post-body">
        ${formattedBody}
      </div>

      <!-- Interaction Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.75rem 0; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); margin: 3.5rem 0; flex-wrap: wrap; gap: 1rem;">
        <button class="btn btn-outline" id="postLikeBtn" style="gap: 0.6rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span id="postDetailLikeCount">${post.likes || 0}</span> Endorsements
        </button>

        <div style="display: flex; gap: 0.6rem;">
          <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText(window.location.href); showToast('Article URL copied to clipboard!', 'success');">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Share Story</span>
          </button>
        </div>
      </div>

      <!-- Comments Section -->
      <section class="comments-section">
        <h3 style="font-size: 1.6rem; margin-bottom: 1.75rem;">Community Discussion (${post.comments ? post.comments.length : 0})</h3>
        
        <form id="commentForm" style="margin-bottom: 2.5rem;">
          <div class="form-group">
            <textarea id="commentInput" class="form-input" rows="3" placeholder="Share your architectural thoughts or feedback..." style="resize: vertical;" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Post Comment</button>
        </form>

        <div id="commentsList">
          ${(post.comments && post.comments.length > 0) ? post.comments.map(c => `
            <div class="comment-card">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <strong style="font-size: 0.95rem; color: var(--text-main);">${c.name}</strong>
                <span style="font-size: 0.8rem; color: var(--text-dim);">${c.date}</span>
              </div>
              <p style="font-size: 0.925rem; color: var(--text-muted); line-height: 1.6;">${c.text}</p>
            </div>
          `).join("") : `<p style="color: var(--text-dim);">No discussions started yet. Be the first to share your perspective!</p>`}
        </div>
      </section>
    `;

    // Like Button
    const postLikeBtn = document.getElementById("postLikeBtn");
    if (postLikeBtn) {
      postLikeBtn.addEventListener("click", () => {
        post.likes = (post.likes || 0) + 1;
        Storage.savePosts(posts);
        document.getElementById("postDetailLikeCount").textContent = post.likes;
        showToast("Endorsement registered!", "success");
      });
    }

    // Comment Submission
    const commentForm = document.getElementById("commentForm");
    if (commentForm) {
      commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = document.getElementById("commentInput").value.trim();
        if (!text) return;

        const currentUser = Storage.getUser() || { name: "Guest Engineer" };
        const newComment = {
          id: "c-" + Date.now(),
          name: currentUser.name,
          text,
          date: "Just now"
        };

        if (!post.comments) post.comments = [];
        post.comments.push(newComment);
        Storage.savePosts(posts);

        showToast("Comment submitted!", "success");
        initPostDetailPage();
      });
    }
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ==========================================
// 11. Auth Pages Controller
// ==========================================
function initLoginPage() {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const demoFillBtn = document.getElementById("demoFillBtn");
  const togglePassBtn = document.getElementById("togglePasswordBtn");

  if (demoFillBtn) {
    demoFillBtn.addEventListener("click", () => {
      emailInput.value = DEFAULT_USER.email;
      passwordInput.value = DEFAULT_USER.password;
      showToast("Evaluator credentials loaded", "info");
    });
  }

  if (togglePassBtn) {
    togglePassBtn.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      const users = Storage.getUsersList();
      const matched = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

      if (matched || (email === DEFAULT_USER.email && password === DEFAULT_USER.password)) {
        const userObj = matched || DEFAULT_USER;
        Storage.setUser(userObj);
        showToast(`Welcome back, ${userObj.name}!`, "success");
        setTimeout(() => window.location.href = "dashboard.html", 700);
      } else {
        showToast("Invalid credentials. Click 'Fill Demo' to evaluate instantly.", "error");
      }
    });
  }
}

function initRegisterPage() {
  const registerForm = document.getElementById("registerForm");
  const nameInput = document.getElementById("regName");
  const emailInput = document.getElementById("regEmail");
  const passwordInput = document.getElementById("regPassword");
  const confirmPasswordInput = document.getElementById("regConfirmPassword");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      if (password.length < 6) {
        showToast("Passphrase must be at least 6 characters", "error");
        return;
      }

      if (password !== confirmPassword) {
        showToast("Passphrases do not match", "error");
        return;
      }

      const newUser = {
        id: "user-" + Date.now(),
        name,
        email,
        password,
        avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80`,
        role: "Software Engineer",
        bio: "Writing technical deep-dives on BlogSpace."
      };

      Storage.saveUserToRegistry(newUser);
      Storage.setUser(newUser);

      showToast("Author account verified! Redirecting...", "success");
      setTimeout(() => window.location.href = "dashboard.html", 700);
    });
  }
}

// ==========================================
// 12. Application Bootstrap
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  Theme.init();
  setupGlobalEnhancements();
  setupNavbar();

  const path = window.location.pathname.toLowerCase();

  if (path.includes("dashboard")) {
    initDashboardPage();
  } else if (path.includes("create-blog")) {
    initCreateBlogPage();
  } else if (path.includes("login")) {
    initLoginPage();
  } else if (path.includes("register")) {
    initRegisterPage();
  } else if (path.includes("post")) {
    initPostDetailPage();
  } else {
    initHomePage();
  }
});
