const Blog = require("../models/Blog");

exports.getBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
};

exports.createBlog = async (req, res) => {
    const { title, description } = req.body || {};
    const newBlog = new Blog({ title, description });
    await newBlog.save();
    res.json({ message: "Blog created", blog: newBlog });
};

exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body || {};
    const updated = await Blog.findByIdAndUpdate(id, { title, description }, { new: true });
    res.json({ message: "Blog updated", blog: updated });
};

exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.json({ message: "Blog deleted" });
};
