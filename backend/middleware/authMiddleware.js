const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
const db = require("../storage/db");

// Verify JWT token and attach user to req.user (Required auth)
function protect(req, res, next) {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. Authentication token required."
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = db.users.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "The user belonging to this token no longer exists."
      });
    }

    const { password, ...sanitizedUser } = user;
    req.user = sanitizedUser;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token.",
      error: err.message
    });
  }
}

// Optional Auth (Attaches req.user if token is valid, otherwise continues)
function optionalAuth(req, res, next) {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = db.users.findById(decoded.id);
      if (user) {
        const { password, ...sanitizedUser } = user;
        req.user = sanitizedUser;
      }
    } catch (err) {
      // Ignored for optional auth
    }
  }

  next();
}

module.exports = {
  protect,
  optionalAuth
};
