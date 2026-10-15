/**
 * BlogSpace - Core JavaScript Application
 * Handles authentication, post storage, category filtering, search,
 * theme management, and interactive UI logic.
 */

// ==========================================
// 1. Initial Seed Data
// ==========================================
const DEFAULT_USER = {
  id: "user-1",
  name: "Alex Morgan",
  email: "alex@blogspace.dev",
  password: "password123",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  bio: "Lead Frontend Architect & Tech Writer exploring the future of web design."
};

const INITIAL_POSTS = [
  {
    id: "post-1",
    title: "Mastering Modern CSS: Subgrid, Container Queries & Cascade Layers",
    slug: "mastering-modern-css",
    excerpt: "Explore next-generation CSS layout primitives that are completely redefining responsive web architecture in modern browsers.",
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
    tags: ["CSS", "Frontend", "WebDesign"],
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Lead Architect"
    },
    publishedAt: "Oct 12, 2026",
    readTime: "6 min read",
    views: 1420,
    likes: 84,
    comments: [
      { id: "c1", name: "David Chen", text: "Container queries are finally stable everywhere! Great write-up.", date: "Oct 13, 2026" }
    ],
    featured: true
  },
  {
    id: "post-2",
    title: "The Rise of Agentic AI: How Autonomous Workflows Are Shifting Coding",
    slug: "rise-of-agentic-ai",
    excerpt: "A deep dive into how multi-agent reasoning, self-debugging loops, and tool calling are transforming software engineering.",
    content: `We are witnessing a profound transition from generative AI that merely autocompletes text to agentic AI that plans, executes, verifies, and adapts.

## The Triad of Agentic Systems

Autonomous agents thrive on three foundational capabilities:
1. **Tool Augmented Execution:** Interacting with real terminal environments, browsers, and APIs.
2. **Reflective Self-Correction:** Analyzing test suites and lint outputs to iterate on solutions without human intervention.
3. **Structured Long-Context Memory:** Maintaining persistent project knowledge items across sessions.

> "The true measure of developer productivity in this new era is not lines of code written, but orchestrating capable agents to build reliable systems."

As frontend developers, understanding how to construct interactive interfaces that harness agentic outputs will be a paramount skill.`,
    category: "AI & ML",
    tags: ["AI", "MachineLearning", "Future"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    author: {
      name: "Sophia Martinez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      role: "AI Researcher"
    },
    publishedAt: "Oct 10, 2026",
    readTime: "8 min read",
    views: 2890,
    likes: 215,
    comments: [],
    featured: false
  },
  {
    id: "post-3",
    title: "Designing Frictionless Dark Modes with Human-Centric Contrast",
    slug: "designing-dark-modes",
    excerpt: "Pure pitch black isn't always best for eyes. Discover how subtle slate hues, elevations, and luminescence create sublime user experiences.",
    content: `Dark mode is no longer an optional toggle—it's an essential accessibility feature. Yet many developers simply invert hex colors or set backgrounds to pure #000000.

### The Problem with Pure Black
Pure black against pure white creates extreme optical vibration (halation) that strains the human eye, particularly for users with astigmatism.

Instead, craft your dark palette with:
- Deep Slate or Obsidian backgrounds (e.g., #0b0f19 or #101522).
- Muted secondary typography (e.g., #94a3b8) instead of harsh white.
- Elevation through subtle surface luminescence rather than traditional drop shadows.

Test your interfaces across different displays and ambient light conditions to guarantee readability!`,
    category: "Design",
    tags: ["UI/UX", "DesignSystem", "Accessibility"],
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
    author: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      role: "UI/UX Director"
    },
    publishedAt: "Oct 08, 2026",
    readTime: "5 min read",
    views: 1845,
    likes: 122,
    comments: [],
    featured: false
  },
  {
    id: "post-4",
    title: "Zero to Hero: Building High-Performance Web Applications in Vanilla JS",
    slug: "vanilla-js-performance",
    excerpt: "Why returning to fundamental DOM manipulation and native browser primitives can supercharge your mental models and site speed.",
    content: `Frameworks are incredible, but mastering native JavaScript empowers you to understand what happens under the hood.

Every framework abstraction eventually translates into native DOM calls:
- DocumentFragment for bulk batch insertions
- Event Delegation for high efficiency on large lists
- IntersectionObserver for silky smooth lazy loading and scroll reveals

When you build with pure JavaScript, your bundle size is negligible, your execution speed is unmatched, and your web fundamentals become rock-solid.`,
    category: "Web Dev",
    tags: ["JavaScript", "Performance", "Frontend"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Lead Architect"
    },
    publishedAt: "Oct 05, 2026",
    readTime: "7 min read",
    views: 3120,
    likes: 194,
    comments: [],
    featured: false
  },
  {
    id: "post-5",
    title: "10 Proven Daily Habits of 10x Engineers in High-Growth Startups",
    slug: "daily-habits-10x-engineers",
    excerpt: "From deep work scheduling to asynchronous communication, discover how elite developers deliver immense business value.",
    content: `Being a high-impact developer isn't about typing faster or pulling all-nighters. It's about cognitive clarity, prioritization, and building durable leverage.

### 1. Protect Deep Work Blocks
Schedule unbroken 3-hour blocks where notifications are silenced and Slack is closed.

### 2. Bias Towards Fast Feedback Loops
Write unit tests, automated linting, and rapid hot reloading so your ideas can be verified in seconds, not minutes.

### 3. Clear Technical Communication
Document architectural decisions with lightweight ADRs (Architecture Decision Records). Clear writing precedes clear code.`,
    category: "Productivity",
    tags: ["Career", "Productivity", "Mindset"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    author: {
      name: "Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      role: "VP of Engineering"
    },
    publishedAt: "Oct 02, 2026",
    readTime: "4 min read",
    views: 940,
    likes: 67,
    comments: [],
    featured: false
  },
  {
    id: "post-6",
    title: "Next-Gen Cloud Native Architecture: Edge Computing & Serverless",
    slug: "edge-computing-serverless",
    excerpt: "Deploying code right next to your end-users. How low-latency distributed compute is changing the global web.",
    content: `Latency is the silent killer of user engagement. Running compute at edge locations worldwide guarantees single-digit millisecond responses for users whether they are in Tokyo, London, or San Francisco.

Learn how edge middleware, global key-value caches, and distributed SQL databases work together in modern web development stacks.`,
    category: "Technology",
    tags: ["Cloud", "DevOps", "Edge"],
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Lead Architect"
    },
    publishedAt: "Sep 28, 2026",
    readTime: "6 min read",
    views: 2150,
    likes: 153,
    comments: [],
    featured: false
  }
];

// ==========================================
// 2. Storage Helpers
// ==========================================
const Storage = {
  getPosts: () => {
    const raw = localStorage.getItem("blogspace_posts");
    if (!raw) {
      localStorage.setItem("blogspace_posts", JSON.stringify(INITIAL_POSTS));
      return INITIAL_POSTS;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return INITIAL_POSTS;
    }
  },

  savePosts: (posts) => {
    localStorage.setItem("blogspace_posts", JSON.stringify(posts));
  },

  getUser: () => {
    const raw = localStorage.getItem("blogspace_currentUser");
    if (!raw) {
      // Default to logged-in demo user for seamless test experience
      localStorage.setItem("blogspace_currentUser", JSON.stringify(DEFAULT_USER));
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
      localStorage.setItem("blogspace_currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("blogspace_currentUser");
    }
  },

  getUsersList: () => {
    const raw = localStorage.getItem("blogspace_all_users");
    if (!raw) {
      const list = [DEFAULT_USER];
      localStorage.setItem("blogspace_all_users", JSON.stringify(list));
      return list;
    }
    return JSON.parse(raw);
  },

  saveUserToRegistry: (user) => {
    const users = Storage.getUsersList();
    users.push(user);
    localStorage.setItem("blogspace_all_users", JSON.stringify(users));
  }
};

// ==========================================
// 3. Theme Controller
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
    showToast(`Switched to ${next} mode`, "info");
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
// 4. Toast Notification System
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
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "error") {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
  } else {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    <span>${iconSvg}</span>
    <span style="font-weight: 500; font-size: 0.9rem;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "all 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 5. Auth Navigation Bar Sync
// ==========================================
function setupNavbar() {
  const user = Storage.getUser();
  const navAuthContainer = document.getElementById("navAuthContainer");
  
  if (navAuthContainer) {
    if (user) {
      navAuthContainer.innerHTML = `
        <a href="create-blog.html" class="btn btn-primary btn-sm" id="navCreateBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span>Write</span>
        </a>
        <div class="user-menu-wrapper">
          <button class="user-avatar-btn" id="userMenuToggle">
            <img src="${user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}" alt="${user.name}" class="avatar-img" />
            <span class="avatar-name">${user.name.split(" ")[0]}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="user-dropdown" id="userDropdown">
            <a href="dashboard.html" class="dropdown-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span>Dashboard</span>
            </a>
            <a href="create-blog.html" class="dropdown-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              <span>Write Story</span>
            </a>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item" id="logoutBtn" style="color: var(--accent-rose); width: 100%; border: none; background: transparent; cursor: pointer; text-align: left;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <span>Sign Out</span>
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
          showToast("Successfully logged out!", "info");
          setTimeout(() => window.location.href = "login.html", 600);
        });
      }
    } else {
      navAuthContainer.innerHTML = `
        <a href="login.html" class="btn btn-secondary btn-sm">Log in</a>
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
// 6. Home Page Controller (index.html)
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

  // Handle Search Input
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

    // Render Featured Post (first post or highlighted)
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
                <span style="font-size: 0.85rem; color: var(--text-muted);">${featured.readTime}</span>
              </div>
              <h2 class="featured-card-title">
                <a href="post.html?id=${featured.id}">${featured.title}</a>
              </h2>
              <p class="featured-card-excerpt">${featured.excerpt}</p>
              <div class="author-block">
                <img src="${featured.author.avatar}" alt="${featured.author.name}" class="avatar-img" />
                <div class="author-info">
                  <h5>${featured.author.name}</h5>
                  <p>${featured.publishedAt} · ${featured.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        featuredCardWrap.style.display = "none";
      }
    }

    // Render Posts Grid
    if (postsGrid) {
      if (filtered.length === 0) {
        postsGrid.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1;">
            <div class="empty-state-icon">🔍</div>
            <h3>No matching articles found</h3>
            <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try adjusting your search query or browsing another category.</p>
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
              <span class="badge">${post.category}</span>
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
                <img src="${post.author.avatar}" alt="${post.author.name}" class="avatar-img" style="width: 28px; height: 28px;" />
                <span style="font-size: 0.825rem; font-weight: 600;">${post.author.name}</span>
              </div>
              <div class="card-actions-row">
                <button class="like-btn" data-id="${post.id}" onclick="handleLikeClick('${post.id}')" title="Like article">
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

// Like Handler for global cards
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
  showToast("Liked article!", "success");
};

// ==========================================
// 7. Dashboard Page Controller (dashboard.html)
// ==========================================
function initDashboardPage() {
  const user = Storage.getUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // Set greeting & user details
  const greetingEl = document.getElementById("dashUserGreeting");
  if (greetingEl) {
    greetingEl.textContent = `Welcome back, ${user.name}! 👋`;
  }

  const posts = Storage.getPosts();
  // Filter user posts (or display all in demo environment if user only has 1)
  const userPosts = posts.filter(p => p.author && p.author.name === user.name);
  const displayPosts = userPosts.length > 0 ? userPosts : posts.slice(0, 4);

  // Compute stats
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

  // Render Table
  const tableBody = document.getElementById("dashboardPostsTableBody");
  if (tableBody) {
    if (displayPosts.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="5" class="empty-state">
            <div class="empty-state-icon">✍️</div>
            <h4>You haven't published any articles yet</h4>
            <a href="create-blog.html" class="btn btn-primary btn-sm" style="margin-top: 1rem;">Create Your First Post</a>
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
              <span style="font-size: 0.8rem; color: var(--text-muted);">${post.category}</span>
            </div>
          </div>
        </td>
        <td>${post.publishedAt}</td>
        <td><strong>${(post.views || 0).toLocaleString()}</strong></td>
        <td><strong>${post.likes || 0}</strong></td>
        <td>
          <div class="action-buttons">
            <a href="post.html?id=${post.id}" class="btn btn-secondary btn-sm" title="View Article">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </a>
            <button class="btn btn-danger btn-sm" onclick="handleDeletePost('${post.id}')" title="Delete Article">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  }
}

window.handleDeletePost = function(postId) {
  if (!confirm("Are you sure you want to permanently delete this article?")) return;

  let posts = Storage.getPosts();
  posts = posts.filter(p => p.id !== postId);
  Storage.savePosts(posts);

  const row = document.getElementById(`row-${postId}`);
  if (row) {
    row.remove();
  }
  showToast("Article deleted successfully", "info");
  setTimeout(() => initDashboardPage(), 400);
};

// ==========================================
// 8. Create Blog Controller (create-blog.html)
// ==========================================
function initCreateBlogPage() {
  const user = Storage.getUser();
  if (!user) {
    showToast("Please log in to publish an article", "error");
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

  // Cover image real-time preview
  if (coverUrlInput && imagePreview) {
    coverUrlInput.addEventListener("input", (e) => {
      const url = e.target.value.trim();
      if (url) {
        imagePreview.innerHTML = `<img src="${url}" alt="Cover Preview" onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\\'preview-placeholder\\'>Failed to load image URL</span>'" />`;
      } else {
        imagePreview.innerHTML = `<span class="preview-placeholder">Image preview will appear here</span>`;
      }
    });
  }

  // Switch Tabs (Write vs Live Preview)
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

      const title = document.getElementById("blogTitleInput").value || "Untitled Article";
      const rawBody = contentInput.value || "No content written yet...";
      const formattedHtml = rawBody
        .split("\n\n")
        .map(p => {
          if (p.startsWith("## ")) return `<h2>${p.replace("## ", "")}</h2>`;
          if (p.startsWith("### ")) return `<h3>${p.replace("### ", "")}</h3>`;
          if (p.startsWith("> ")) return `<blockquote>${p.replace("> ", "")}</blockquote>`;
          return `<p>${p}</p>`;
        })
        .join("");

      livePreviewArea.innerHTML = `
        <h1 style="font-size: 2.2rem; margin-bottom: 1.5rem;">${title}</h1>
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
    const replacement = prefix + (selected || "text") + suffix;
    contentInput.value = contentInput.value.substring(0, start) + replacement + contentInput.value.substring(end);
    contentInput.focus();
    contentInput.setSelectionRange(start + prefix.length, start + prefix.length + (selected ? selected.length : 4));
  };

  // Form Submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("blogTitleInput").value.trim();
      const category = document.getElementById("blogCategorySelect").value;
      const tagsRaw = document.getElementById("blogTagsInput").value;
      const coverImage = coverUrlInput.value.trim() || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80";
      const content = contentInput.value.trim();

      if (!title || !content) {
        showToast("Please provide both title and content", "error");
        return;
      }

      const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim().replace(/^#/, "")) : [category];
      const readMinutes = Math.max(1, Math.ceil(content.split(/\s+/).length / 200));

      const newPost = {
        id: "post-" + Date.now(),
        title,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        excerpt: content.substring(0, 150).replace(/[#*`]/g, "") + "...",
        content,
        category,
        tags,
        coverImage,
        author: {
          name: user.name,
          avatar: user.avatar,
          role: "Author"
        },
        publishedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        readTime: `${readMinutes} min read`,
        views: 1,
        likes: 0,
        comments: [],
        featured: false
      };

      const posts = Storage.getPosts();
      posts.unshift(newPost);
      Storage.savePosts(posts);

      showToast("🎉 Article published successfully!", "success");
      setTimeout(() => {
        window.location.href = `post.html?id=${newPost.id}`;
      }, 900);
    });
  }
}

// ==========================================
// 9. Blog Detail Controller (post.html)
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

  // Increment view count once per visit
  post.views = (post.views || 0) + 1;
  Storage.savePosts(posts);

  // Set Page Meta
  document.title = `${post.title} - BlogSpace`;

  // Render Post Container
  const detailContainer = document.getElementById("postDetailContainer");
  if (detailContainer) {
    const formattedBody = post.content
      .split("\n\n")
      .map(block => {
        if (block.startsWith("```")) {
          const code = block.replace(/```[a-z]*/g, "").trim();
          return `<pre style="background: var(--bg-input); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); overflow-x: auto; margin: 1.5rem 0; font-family: monospace;"><code>${escapeHtml(code)}</code></pre>`;
        }
        if (block.startsWith("## ")) return `<h2>${block.replace("## ", "")}</h2>`;
        if (block.startsWith("### ")) return `<h3>${block.replace("### ", "")}</h3>`;
        if (block.startsWith("> ")) return `<blockquote>${block.replace("> ", "")}</blockquote>`;
        return `<p>${block}</p>`;
      })
      .join("");

    detailContainer.innerHTML = `
      <div class="post-header">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span class="badge badge-pink">${post.category}</span>
          <span style="font-size: 0.85rem; color: var(--text-muted);">${post.publishedAt} · ${post.readTime}</span>
        </div>
        <h1 class="post-title">${post.title}</h1>
        <div class="author-block" style="margin-top: 1.5rem;">
          <img src="${post.author.avatar}" alt="${post.author.name}" class="avatar-img" style="width: 44px; height: 44px;" />
          <div class="author-info">
            <h5 style="font-size: 1rem;">${post.author.name}</h5>
            <p>${post.author.role || 'Contributor'} · ${(post.views || 0).toLocaleString()} views</p>
          </div>
        </div>
      </div>

      <img src="${post.coverImage}" alt="${post.title}" class="post-hero-image" />

      <div class="post-body">
        ${formattedBody}
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 0; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); margin: 3rem 0;">
        <button class="btn btn-outline" id="postLikeBtn" style="gap: 0.5rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span id="postDetailLikeCount">${post.likes || 0}</span> Likes
        </button>

        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText(window.location.href); showToast('Link copied to clipboard!', 'success');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Share
          </button>
        </div>
      </div>

      <!-- Comments Section -->
      <section class="comments-section">
        <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Discussion (${post.comments ? post.comments.length : 0})</h3>
        
        <form id="commentForm" style="margin-bottom: 2.5rem;">
          <div class="form-group">
            <textarea id="commentInput" class="form-input" rows="3" placeholder="Join the discussion... Share your thoughts!" style="resize: vertical;" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Post Comment</button>
        </form>

        <div id="commentsList">
          ${(post.comments && post.comments.length > 0) ? post.comments.map(c => `
            <div class="comment-card">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <strong style="font-size: 0.95rem;">${c.name}</strong>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${c.date}</span>
              </div>
              <p style="font-size: 0.9rem; color: var(--text-secondary);">${c.text}</p>
            </div>
          `).join("") : `<p style="color: var(--text-muted);">No comments yet. Be the first to start the conversation!</p>`}
        </div>
      </section>
    `;

    // Like Button Event
    const postLikeBtn = document.getElementById("postLikeBtn");
    if (postLikeBtn) {
      postLikeBtn.addEventListener("click", () => {
        post.likes = (post.likes || 0) + 1;
        Storage.savePosts(posts);
        document.getElementById("postDetailLikeCount").textContent = post.likes;
        showToast("Thanks for the like!", "success");
      });
    }

    // Comment Form Event
    const commentForm = document.getElementById("commentForm");
    if (commentForm) {
      commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = document.getElementById("commentInput").value.trim();
        if (!text) return;

        const currentUser = Storage.getUser() || { name: "Guest Reader" };
        const newComment = {
          id: "c-" + Date.now(),
          name: currentUser.name,
          text,
          date: "Just now"
        };

        if (!post.comments) post.comments = [];
        post.comments.push(newComment);
        Storage.savePosts(posts);

        showToast("Comment posted!", "success");
        initPostDetailPage();
      });
    }
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ==========================================
// 10. Auth Controllers (login.html & register.html)
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
      showToast("Demo credentials filled in!", "info");
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
        setTimeout(() => window.location.href = "dashboard.html", 800);
      } else {
        showToast("Invalid email or password. Click 'Fill Demo' to try instantly.", "error");
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
        showToast("Password must be at least 6 characters long", "error");
        return;
      }

      if (password !== confirmPassword) {
        showToast("Passwords do not match", "error");
        return;
      }

      const newUser = {
        id: "user-" + Date.now(),
        name,
        email,
        password,
        avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80`,
        bio: "Passionate writer and reader on BlogSpace."
      };

      Storage.saveUserToRegistry(newUser);
      Storage.setUser(newUser);

      showToast("Account created successfully! Welcome aboard 🚀", "success");
      setTimeout(() => window.location.href = "dashboard.html", 800);
    });
  }
}

// ==========================================
// 11. App Bootstrap
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  Theme.init();
  setupNavbar();

  // Detect which page is running
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
    // Default to Home Page
    initHomePage();
  }
});
