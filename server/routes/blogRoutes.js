const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const { optionalAuth, protect } = require("../middleware/authMiddleware");

// Blog API Routes
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.post("/", optionalAuth, blogController.createBlog);
router.post("/:id/like", blogController.likeBlog);
router.post("/:id/comments", optionalAuth, blogController.addComment);
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
