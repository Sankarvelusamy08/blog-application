/**
 * BlogSpace REST API Client
 * Seamlessly interfaces frontend pages with the Node.js / Express.js backend.
 * Provides resilient fallbacks and transparent JWT token authorization.
 */

(function () {
  // Determine backend base URL:
  // If running on Express port 5000, use relative '/api'.
  // Otherwise default to 'http://localhost:5000/api' to allow Live Server (5500) and file://
  const isLocalExpress =
    window.location.hostname === "localhost" && window.location.port === "5000";
  const API_BASE = isLocalExpress ? "/api" : "http://localhost:5000/api";

  const TOKEN_KEY = "blogspace_jwt_token";

  const BlogAPI = {
    baseUrl: API_BASE,

    // Token management
    getToken: () => localStorage.getItem(TOKEN_KEY),
    setToken: (token) => {
      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
      } else {
        localStorage.removeItem(TOKEN_KEY);
      }
    },
    removeToken: () => localStorage.removeItem(TOKEN_KEY),

    /**
     * Unified HTTP Request Handler
     */
    async request(endpoint, options = {}) {
      const url = `${API_BASE}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
      const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {})
      };

      const token = BlogAPI.getToken();
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const config = {
        ...options,
        headers
      };

      try {
        const response = await fetch(url, config);
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          return {
            success: false,
            status: response.status,
            message: data.message || `Request failed with status ${response.status}`,
            data
          };
        }

        return {
          success: true,
          status: response.status,
          ...data
        };
      } catch (networkError) {
        console.warn(`[BlogAPI] Network error contacting ${url}:`, networkError.message);
        return {
          success: false,
          offline: true,
          message: "Backend server is currently offline. Ensure 'npm start' is running on port 5000."
        };
      }
    },

    /**
     * Health & Connectivity
     */
    async checkHealth() {
      try {
        const res = await fetch(`${API_BASE}/health`, { method: "GET" });
        if (res.ok) {
          const data = await res.json();
          return { online: true, ...data };
        }
        return { online: false };
      } catch (e) {
        return { online: false, error: e.message };
      }
    },

    /**
     * Authentication Endpoints
     */
    auth: {
      // POST /api/auth/register
      async register(userData) {
        const res = await BlogAPI.request("/auth/register", {
          method: "POST",
          body: JSON.stringify(userData)
        });

        if (res.success && res.token) {
          BlogAPI.setToken(res.token);
          if (res.user) {
            localStorage.setItem("blogspace_currentUser_v2", JSON.stringify(res.user));
          }
        }
        return res;
      },

      // POST /api/auth/login
      async login(credentials) {
        const res = await BlogAPI.request("/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials)
        });

        if (res.success && res.token) {
          BlogAPI.setToken(res.token);
          if (res.user) {
            localStorage.setItem("blogspace_currentUser_v2", JSON.stringify(res.user));
          }
        }
        return res;
      },

      // GET /api/auth/me
      async getMe() {
        return await BlogAPI.request("/auth/me", { method: "GET" });
      },

      // Client Logout
      logout() {
        BlogAPI.removeToken();
        localStorage.removeItem("blogspace_currentUser_v2");
      }
    },

    /**
     * Blog Endpoints
     */
    blogs: {
      // GET /api/blogs
      async getAll(filters = {}) {
        const queryParams = new URLSearchParams();
        if (filters.category && filters.category !== "All") {
          queryParams.append("category", filters.category);
        }
        if (filters.search) {
          queryParams.append("search", filters.search);
        }
        if (filters.author) {
          queryParams.append("author", filters.author);
        }
        if (filters.featured) {
          queryParams.append("featured", "true");
        }

        const qs = queryParams.toString();
        const endpoint = `/blogs${qs ? `?${qs}` : ""}`;
        return await BlogAPI.request(endpoint, { method: "GET" });
      },

      // GET /api/blogs/:id
      async getById(id) {
        return await BlogAPI.request(`/blogs/${encodeURIComponent(id)}`, {
          method: "GET"
        });
      },

      // POST /api/blogs (Create Story)
      async create(blogData) {
        return await BlogAPI.request("/blogs", {
          method: "POST",
          body: JSON.stringify(blogData)
        });
      },

      // POST /api/blogs/:id/like
      async like(id) {
        return await BlogAPI.request(`/blogs/${encodeURIComponent(id)}/like`, {
          method: "POST"
        });
      },

      // POST /api/blogs/:id/comments
      async addComment(id, commentData) {
        return await BlogAPI.request(`/blogs/${encodeURIComponent(id)}/comments`, {
          method: "POST",
          body: JSON.stringify(commentData)
        });
      },

      // DELETE /api/blogs/:id
      async delete(id) {
        return await BlogAPI.request(`/blogs/${encodeURIComponent(id)}`, {
          method: "DELETE"
        });
      }
    }
  };

  // Expose globally to window
  window.BlogAPI = BlogAPI;
})();
