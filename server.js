/**
 * BlogSpace Backend Server Entrypoint
 */

const app = require("./server/server");
const config = require("./server/config/config");

const PORT = config.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("\n========================================================");
  console.log(`🚀 BlogSpace Backend Server is running on port ${PORT}!`);
  console.log(`🌐 Local Application URL: http://localhost:${PORT}`);
  console.log(`📡 REST API Base URL:    http://localhost:${PORT}/api`);
  console.log(`🔐 Auth Endpoints:       http://localhost:${PORT}/api/auth`);
  console.log(`✍️  Blog Endpoints:       http://localhost:${PORT}/api/blogs`);
  console.log("========================================================\n");
});

// Handle graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated.");
  });
});

module.exports = server;
