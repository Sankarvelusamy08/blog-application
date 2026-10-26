const db = require("../storage/db");

/**
 * @route   GET /api/blogs
 * @desc    Get all blog posts with optional filters (category, search, author)
 * @access  Public
 */
exports.getAllBlogs = async (req, res, next) => {
  try {
    const { category, search, author, featured } = req.query;

    let posts = db.posts.getAll({ category, search, author });

    if (featured === "true") {
      posts = posts.filter((p) => p.featured);
    }

    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @route   GET /api/blogs/:id
 * @desc    Get a single blog post by ID or slug (increments view count)
 * @access  Public
 */
exports.getBlogById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Increment view count on read
    let post = db.posts.incrementViews(id);

    if (!post) {
      post = db.posts.findById(id);
    }

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Blog story not found with identifier '${id}'.`
      });
    }

    return res.status(200).json({
      success: true,
      data: post
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @route   POST /api/blogs
 * @desc    Create and publish a new blog post
 * @access  Public (Optional JWT for author identification)
 */
exports.createBlog = async (req, res, next) => {
  try {
    const { title, content, category, tags, coverImage, excerpt } = req.body;

    // 1. Validation
    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Article headline/title is required."
      });
    }

    if (!content || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: "Article body content is required."
      });
    }

    if (title.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: "Title must be at least 3 characters long."
      });
    }

    // 2. Author Resolution (from verified JWT req.user or request body or fallback)
    let authorData = {
      name: "Sankar Velusamy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Principal Frontend Architect"
    };

    if (req.user) {
      authorData = {
        id: req.user.id,
        name: req.user.name,
        avatar: req.user.avatar || authorData.avatar,
        role: req.user.role || authorData.role
      };
    } else if (req.body.author && req.body.author.name) {
      authorData = {
        name: req.body.author.name,
        avatar: req.body.author.avatar || authorData.avatar,
        role: req.body.author.role || authorData.role
      };
    }

    // 3. Process Tags
    let processedTags = ["Technology"];
    if (Array.isArray(tags)) {
      processedTags = tags.filter(Boolean);
    } else if (typeof tags === "string" && tags.trim()) {
      processedTags = tags.split(",").map((t) => t.trim().replace(/^#/, "")).filter(Boolean);
    } else if (category) {
      processedTags = [category];
    }

    // 4. Create post in database
    const newPost = db.posts.create({
      title: title.trim(),
      content: content.trim(),
      category: category?.trim() || "Web Dev",
      tags: processedTags,
      coverImage:
        coverImage?.trim() ||
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      excerpt: excerpt?.trim(),
      author: authorData
    });

    return res.status(201).json({
      success: true,
      message: "🎉 Story successfully published to BlogSpace!",
      data: newPost
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @route   POST /api/blogs/:id/like
 * @desc    Increment likes for a blog post
 * @access  Public
 */
exports.likeBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = db.posts.incrementLikes(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found."
      });
    }

    return res.status(200).json({
      success: true,
      message: "Story endorsed!",
      likes: post.likes
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @route   POST /api/blogs/:id/comments
 * @desc    Add a reader comment to a blog post
 * @access  Public
 */
exports.addComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text, name } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Comment text cannot be empty."
      });
    }

    const commenterName =
      (req.user && req.user.name) ||
      (name && name.trim()) ||
      "Guest Engineer";

    const comment = db.posts.addComment(id, {
      name: commenterName,
      text: text.trim(),
      date: "Just now"
    });

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found."
      });
    }

    return res.status(201).json({
      success: true,
      message: "Comment added to discussion!",
      data: comment
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @route   DELETE /api/blogs/:id
 * @desc    Delete a blog post
 * @access  Public
 */
exports.deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = db.posts.delete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: `Blog post with ID '${id}' not found.`
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog post deleted successfully."
    });
  } catch (err) {
    next(err);
  }
};
