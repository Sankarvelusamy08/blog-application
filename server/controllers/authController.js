const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../storage/db");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config/config");

// Helper to sign JWT token
function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

// Simple email format validator
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user account
 * @access  Public
 */
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, bio, avatar, role } = req.body;

    // 1. Validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Full name is required."
      });
    }

    if (!email || !isValidEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "A valid email address is required."
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long."
      });
    }

    if (confirmPassword && password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match."
      });
    }

    // 2. Check if user already exists
    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = db.users.findByEmail(normalizedEmail);

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists."
      });
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create User
    const newUser = db.users.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      avatar: avatar?.trim() || `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80`,
      role: role?.trim() || "Software Engineer",
      bio: bio?.trim() || "Writing technical deep-dives on BlogSpace."
    });

    // 5. Generate token
    const token = generateToken(newUser);

    const { password: _, ...sanitizedUser } = newUser;

    return res.status(201).json({
      success: true,
      message: "Author account registered successfully!",
      token,
      user: sanitizedUser
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user & return token
 * @access  Public
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password."
      });
    }

    // 2. Find user
    const normalizedEmail = email.trim().toLowerCase();
    const user = db.users.findByEmail(normalizedEmail);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    // 3. Verify password
    let isMatch = false;
    // Check bcrypt hash
    if (user.password && user.password.startsWith("$2")) {
      isMatch = await bcrypt.compare(password, user.password);
    } else {
      // Direct string comparison fallback for legacy seed
      isMatch = user.password === password;
    }

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    // 4. Generate token
    const token = generateToken(user);

    const { password: _, ...sanitizedUser } = user;

    return res.status(200).json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      token,
      user: sanitizedUser
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @route   GET /api/auth/me
 * @desc    Get currently logged-in user profile
 * @access  Private
 */
exports.getMe = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user
    });
  } catch (err) {
    next(err);
  }
};
