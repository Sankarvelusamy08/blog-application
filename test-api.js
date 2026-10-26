/**
 * Automated Test Suite for BlogSpace Backend REST APIs
 * Runs through user registration, login, blog creation, retrieval, likes, and comments.
 */

const http = require("http");
const app = require("./server/server");

const PORT = 5099; // Test port
let server;

function request(options, postData) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port: PORT,
        ...options
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            const parsed = body ? JSON.parse(body) : null;
            resolve({ status: res.statusCode, headers: res.headers, body: parsed });
          } catch (e) {
            resolve({ status: res.statusCode, headers: res.headers, raw: body });
          }
        });
      }
    );

    req.on("error", reject);

    if (postData) {
      req.write(typeof postData === "string" ? postData : JSON.stringify(postData));
    }
    req.end();
  });
}

async function runTests() {
  console.log("==========================================");
  console.log("🧪 Starting BlogSpace REST API Test Suite");
  console.log("==========================================\n");

  server = app.listen(PORT);

  let passed = 0;
  let failed = 0;

  function assert(condition, testName, detail = "") {
    if (condition) {
      console.log(`✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${testName} - ${detail}`);
      failed++;
    }
  }

  try {
    // Test 1: API Health Check
    const resHealth = await request({ path: "/api", method: "GET" });
    assert(resHealth.status === 200 && resHealth.body?.status === "online", "GET /api - Health & API Info", JSON.stringify(resHealth.body));

    // Test 2: User Registration
    const testEmail = `test_${Date.now()}@test.com`;
    const regPayload = {
      name: "Alex Dev",
      email: testEmail,
      password: "securePassword123",
      confirmPassword: "securePassword123",
      role: "Full Stack Engineer"
    };

    const resReg = await request(
      {
        path: "/api/auth/register",
        method: "POST",
        headers: { "Content-Type": "application/json" }
      },
      regPayload
    );
    assert(resReg.status === 201 && resReg.body?.success === true && resReg.body?.token, "POST /api/auth/register - Register New User", JSON.stringify(resReg.body));

    const authToken = resReg.body?.token;

    // Test 3: Duplicate Registration Validation (Should fail with 409)
    const resDup = await request(
      {
        path: "/api/auth/register",
        method: "POST",
        headers: { "Content-Type": "application/json" }
      },
      regPayload
    );
    assert(resDup.status === 409 && resDup.body?.success === false, "POST /api/auth/register - Duplicate Email Check", JSON.stringify(resDup.body));

    // Test 4: User Login with newly created user
    const loginPayload = {
      email: testEmail,
      password: "securePassword123"
    };
    const resLogin = await request(
      {
        path: "/api/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/json" }
      },
      loginPayload
    );
    assert(resLogin.status === 200 && resLogin.body?.success === true && resLogin.body?.user?.email === testEmail, "POST /api/auth/login - Login with Credentials", JSON.stringify(resLogin.body));

    // Test 5: Default Evaluator Login
    const resDefaultLogin = await request(
      {
        path: "/api/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/json" }
      },
      { email: "sankar@blogspace.dev", password: "password123" }
    );
    assert(resDefaultLogin.status === 200 && resDefaultLogin.body?.success === true, "POST /api/auth/login - Evaluator Default Account Login", JSON.stringify(resDefaultLogin.body));

    // Test 6: Verify Auth Profile with Token (GET /api/auth/me)
    const resMe = await request({
      path: "/api/auth/me",
      method: "GET",
      headers: { Authorization: `Bearer ${authToken}` }
    });
    assert(resMe.status === 200 && resMe.body?.user?.name === "Alex Dev", "GET /api/auth/me - Verify JWT Protected Route", JSON.stringify(resMe.body));

    // Test 7: Get All Blogs
    const resBlogs = await request({ path: "/api/blogs", method: "GET" });
    assert(resBlogs.status === 200 && Array.isArray(resBlogs.body?.data) && resBlogs.body?.data.length > 0, "GET /api/blogs - Retrieve Blog Feed", `Found ${resBlogs.body?.count} blogs`);

    // Test 8: Create Blog Post
    const newBlogPayload = {
      title: "Building Resilient REST APIs with Node.js and Express",
      category: "Web Dev",
      tags: ["NodeJS", "Express", "REST"],
      content: `In modern full-stack development, designing modular RESTful APIs is foundational.

## Key Principles
1. Resource-based URI hierarchy
2. Appropriate HTTP status codes (200, 201, 400, 401, 404, 500)
3. Robust input validation and centralized error handling
4. Stateless authentication with JWT

This article demonstrates how to bridge high-performance Express backends with modern frontend UI systems.`,
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
    };

    const resCreateBlog = await request(
      {
        path: "/api/blogs",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        }
      },
      newBlogPayload
    );
    assert(resCreateBlog.status === 201 && resCreateBlog.body?.success === true && resCreateBlog.body?.data?.title === newBlogPayload.title, "POST /api/blogs - Create and Publish Story", JSON.stringify(resCreateBlog.body));

    const createdPostId = resCreateBlog.body?.data?.id;

    // Test 9: Get Single Blog by ID
    const resSingleBlog = await request({ path: `/api/blogs/${createdPostId}`, method: "GET" });
    assert(resSingleBlog.status === 200 && resSingleBlog.body?.data?.id === createdPostId, "GET /api/blogs/:id - Retrieve Story & Increment Views", JSON.stringify(resSingleBlog.body));

    // Test 10: Like Blog Post
    const resLike = await request({
      path: `/api/blogs/${createdPostId}/like`,
      method: "POST"
    });
    assert(resLike.status === 200 && resLike.body?.success === true && resLike.body?.likes >= 1, "POST /api/blogs/:id/like - Like Article", JSON.stringify(resLike.body));

    // Test 11: Add Comment to Blog Post
    const resComment = await request(
      {
        path: `/api/blogs/${createdPostId}/comments`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        }
      },
      { text: "Fantastic architecture overview! Loving the clean code structure." }
    );
    assert(resComment.status === 201 && resComment.body?.success === true, "POST /api/blogs/:id/comments - Add Reader Comment", JSON.stringify(resComment.body));

    // Test 12: Delete Blog Post
    const resDelete = await request({
      path: `/api/blogs/${createdPostId}`,
      method: "DELETE"
    });
    assert(resDelete.status === 200 && resDelete.body?.success === true, "DELETE /api/blogs/:id - Delete Story", JSON.stringify(resDelete.body));

    console.log("\n==========================================");
    console.log(`📊 Test Results: ${passed} Passed, ${failed} Failed`);
    console.log("==========================================\n");

    if (failed > 0) {
      process.exitCode = 1;
    }
  } catch (err) {
    console.error("Test Suite Execution Error:", err);
    process.exitCode = 1;
  } finally {
    server.close();
  }
}

runTests();
