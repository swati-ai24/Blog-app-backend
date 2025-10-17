const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const auth = require("../middleware/authMiddleware");

// Public
router.get("/", blogController.getBlogs);

// Protected
router.post("/create", auth, blogController.createBlog);
router.put("/update/:id", auth, blogController.updateBlog);
router.delete("/delete/:id", auth, blogController.deleteBlog);

module.exports = router;
