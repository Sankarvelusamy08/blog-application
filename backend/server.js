const express = require("express");
const cors = require("cors");
const path = require("path");
const config = require("./config/config");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");

const app = express();

// ==========================================
// 1. Core Middleware
// ==========================================
// Enable Cross-Origin Resource Sharing (CORS) for all origins
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Body Parsing Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Request Logger Middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// ==========================================
// 2. Static Frontend Serving
// ==========================================
// Serve the frontend static files from the frontend directory
const publicDirectory = path.join(__dirname, "..", "frontend");
app.use(express.static(publicDirectory));

// ==========================================
// 3. API Routes
// ==========================================
// API Root & Health Check
app.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    name: "⚡ BlogSpace REST API",
    version: "1.0.0",
    status: "online",
    endpoints: {
      auth: {
        register: "POST /api/auth/register",
        login: "POST /api/auth/login",
        me: "GET /api/auth/me"
      },
      blogs: {
        list: "GET /api/blogs (queries: ?category=&search=&author=&featured=)",
        getOne: "GET /api/blogs/:id",
        create: "POST /api/blogs",
        like: "POST /api/blogs/:id/like",
        comment: "POST /api/blogs/:id/comments",
        delete: "DELETE /api/blogs/:id"
      },
      system: {
        health: "GET /api/health"
      }
    }
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString()
  });
});

// Mount Resource Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// ==========================================
// 4. Fallback Handling
// ==========================================
// Catch-all for API 404s
app.use("/api", notFoundHandler);

// Centralized Error Handler
app.use(errorHandler);

// ==========================================
// 5. Server Listener
// ==========================================
const PORT = config.PORT;

if (require.main === module || process.env.RUN_SERVER === "true") {
  app.listen(PORT, () => {
    console.log("\n========================================================");
    console.log(`🚀 BlogSpace Backend Server is running on port ${PORT}!`);
    console.log(`🌐 Local Application URL: http://localhost:${PORT}`);
    console.log(`📡 REST API Base URL:    http://localhost:${PORT}/api`);
    console.log(`🔐 Auth Endpoints:       http://localhost:${PORT}/api/auth`);
    console.log(`✍️  Blog Endpoints:       http://localhost:${PORT}/api/blogs`);
    console.log("========================================================\n");
  });
}

module.exports = app;
