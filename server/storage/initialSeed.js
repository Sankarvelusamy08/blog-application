/**
 * Seed data for BlogSpace
 * Contains the initial verified demo user and high-quality technical posts.
 */

const bcrypt = require("bcryptjs");

const DEFAULT_PASSWORD = "password123";
const DEFAULT_PASSWORD_HASH = bcrypt.hashSync(DEFAULT_PASSWORD, 10);

const SEED_USERS = [
  {
    id: "user-1",
    name: "Sankar Velusamy",
    email: "sankar@blogspace.dev",
    password: DEFAULT_PASSWORD_HASH,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    role: "Principal Frontend Architect",
    bio: "Specializing in high-throughput distributed frontend systems, design tokens, and web performance.",
    createdAt: new Date("2026-09-01T08:00:00Z").toISOString()
  }
];

const SEED_POSTS = [
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
      id: "user-1",
      name: "Sankar Velusamy",
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
    featured: true,
    createdAt: new Date("2026-10-14T10:00:00Z").toISOString()
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
    featured: false,
    createdAt: new Date("2026-10-12T09:30:00Z").toISOString()
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
    featured: false,
    createdAt: new Date("2026-10-10T14:15:00Z").toISOString()
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
      id: "user-1",
      name: "Sankar Velusamy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Principal Architect"
    },
    publishedAt: "Oct 08, 2026",
    readTime: "7 min read",
    views: 5820,
    likes: 312,
    status: "Published",
    comments: [],
    featured: false,
    createdAt: new Date("2026-10-08T11:00:00Z").toISOString()
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
    featured: false,
    createdAt: new Date("2026-10-04T16:45:00Z").toISOString()
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
      id: "user-1",
      name: "Sankar Velusamy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Principal Architect"
    },
    publishedAt: "Oct 01, 2026",
    readTime: "4 min read",
    views: 2840,
    likes: 164,
    status: "Published",
    comments: [],
    featured: false,
    createdAt: new Date("2026-10-01T12:00:00Z").toISOString()
  }
];

module.exports = {
  SEED_USERS,
  SEED_POSTS
};
