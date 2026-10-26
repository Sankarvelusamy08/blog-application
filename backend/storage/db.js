/**
 * JSON File-based persistent storage for BlogSpace
 * Handles atomicity, directory initialization, and CRUD operations for users and blogs.
 */

const fs = require("fs");
const path = require("path");
const { SEED_USERS, SEED_POSTS } = require("./initialSeed");

const DATA_DIR = path.join(__dirname, "..", "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const POSTS_FILE = path.join(DATA_DIR, "posts.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to safely read JSON file
function readJsonFile(filePath, fallbackData) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(fallbackData, null, 2), "utf8");
      return fallbackData;
    }
    const raw = fs.readFileSync(filePath, "utf8");
    if (!raw.trim()) {
      fs.writeFileSync(filePath, JSON.stringify(fallbackData, null, 2), "utf8");
      return fallbackData;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
    return fallbackData;
  }
}

// Helper to safely write JSON file
function writeJsonFile(filePath, data) {
  try {
    const tempPath = `${filePath}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), "utf8");
    fs.renameSync(tempPath, filePath);
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err.message);
    return false;
  }
}

// Initialize seed data if files are not present
readJsonFile(USERS_FILE, SEED_USERS);
readJsonFile(POSTS_FILE, SEED_POSTS);

const db = {
  // Users Operations
  users: {
    getAll: () => readJsonFile(USERS_FILE, SEED_USERS),
    
    findByEmail: (email) => {
      if (!email) return null;
      const users = db.users.getAll();
      return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
    },

    findById: (id) => {
      if (!id) return null;
      const users = db.users.getAll();
      return users.find((u) => u.id === id) || null;
    },

    create: (userData) => {
      const users = db.users.getAll();
      const newUser = {
        id: userData.id || `user-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        name: userData.name,
        email: userData.email.toLowerCase(),
        password: userData.password, // already hashed
        avatar: userData.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        role: userData.role || "Software Engineer",
        bio: userData.bio || "Writing technical deep-dives on BlogSpace.",
        createdAt: new Date().toISOString()
      };
      users.push(newUser);
      writeJsonFile(USERS_FILE, users);
      return newUser;
    }
  },

  // Posts Operations
  posts: {
    getAll: (filter = {}) => {
      let posts = readJsonFile(POSTS_FILE, SEED_POSTS);

      if (filter.category && filter.category.toLowerCase() !== "all") {
        posts = posts.filter(
          (p) => p.category && p.category.toLowerCase() === filter.category.toLowerCase()
        );
      }

      if (filter.search) {
        const q = filter.search.toLowerCase().trim();
        posts = posts.filter(
          (p) =>
            (p.title && p.title.toLowerCase().includes(q)) ||
            (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
            (p.category && p.category.toLowerCase().includes(q)) ||
            (Array.isArray(p.tags) && p.tags.some((t) => t.toLowerCase().includes(q))) ||
            (p.author && p.author.name && p.author.name.toLowerCase().includes(q))
        );
      }

      if (filter.author) {
        const a = filter.author.toLowerCase().trim();
        posts = posts.filter((p) => p.author && p.author.name && p.author.name.toLowerCase().includes(a));
      }

      return posts;
    },

    findById: (idOrSlug) => {
      if (!idOrSlug) return null;
      const posts = db.posts.getAll();
      return posts.find((p) => p.id === idOrSlug || p.slug === idOrSlug) || null;
    },

    create: (postData) => {
      const posts = readJsonFile(POSTS_FILE, SEED_POSTS);
      const newPost = {
        id: postData.id || `post-${Date.now()}`,
        title: postData.title,
        slug:
          postData.slug ||
          postData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),
        excerpt:
          postData.excerpt ||
          (postData.content
            ? postData.content.substring(0, 160).replace(/[#*`]/g, "").trim() + "..."
            : ""),
        content: postData.content,
        category: postData.category || "General",
        tags: Array.isArray(postData.tags)
          ? postData.tags
          : postData.tags
          ? postData.tags.split(",").map((t) => t.trim().replace(/^#/, ""))
          : [postData.category || "Technology"],
        coverImage:
          postData.coverImage ||
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        author: {
          id: postData.author?.id || "user-anon",
          name: postData.author?.name || "BlogSpace Writer",
          avatar:
            postData.author?.avatar ||
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          role: postData.author?.role || "Author"
        },
        publishedAt:
          postData.publishedAt ||
          new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        readTime:
          postData.readTime ||
          `${Math.max(1, Math.ceil((postData.content ? postData.content.split(/\s+/).length : 200) / 200))} min read`,
        views: typeof postData.views === "number" ? postData.views : 1,
        likes: typeof postData.likes === "number" ? postData.likes : 0,
        status: postData.status || "Published",
        comments: postData.comments || [],
        featured: Boolean(postData.featured),
        createdAt: new Date().toISOString()
      };

      posts.unshift(newPost);
      writeJsonFile(POSTS_FILE, posts);
      return newPost;
    },

    update: (id, updates) => {
      const posts = readJsonFile(POSTS_FILE, SEED_POSTS);
      const index = posts.findIndex((p) => p.id === id);
      if (index === -1) return null;

      posts[index] = { ...posts[index], ...updates, updatedAt: new Date().toISOString() };
      writeJsonFile(POSTS_FILE, posts);
      return posts[index];
    },

    incrementViews: (id) => {
      const posts = readJsonFile(POSTS_FILE, SEED_POSTS);
      const post = posts.find((p) => p.id === id || p.slug === id);
      if (!post) return null;
      post.views = (post.views || 0) + 1;
      writeJsonFile(POSTS_FILE, posts);
      return post;
    },

    incrementLikes: (id) => {
      const posts = readJsonFile(POSTS_FILE, SEED_POSTS);
      const post = posts.find((p) => p.id === id || p.slug === id);
      if (!post) return null;
      post.likes = (post.likes || 0) + 1;
      writeJsonFile(POSTS_FILE, posts);
      return post;
    },

    addComment: (id, commentData) => {
      const posts = readJsonFile(POSTS_FILE, SEED_POSTS);
      const post = posts.find((p) => p.id === id || p.slug === id);
      if (!post) return null;
      if (!Array.isArray(post.comments)) post.comments = [];

      const newComment = {
        id: `c-${Date.now()}`,
        name: commentData.name || "Anonymous Reader",
        text: commentData.text,
        date:
          commentData.date ||
          new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      };
      post.comments.push(newComment);
      writeJsonFile(POSTS_FILE, posts);
      return newComment;
    },

    delete: (id) => {
      const posts = readJsonFile(POSTS_FILE, SEED_POSTS);
      const index = posts.findIndex((p) => p.id === id);
      if (index === -1) return false;

      posts.splice(index, 1);
      writeJsonFile(POSTS_FILE, posts);
      return true;
    }
  }
};

module.exports = db;
