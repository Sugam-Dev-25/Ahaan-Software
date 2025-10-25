const Blog = require('../models/blog');

exports.createBlog = async (req, res) => {
    try {
        const { title, content, image, user } = req.body; 

        const newBlog = new Blog({
            title,
            content,   
            image,
            date: new Date(),
            likecount: 0, 
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('title', 'title');
        res.status(200).json({ blogs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('title', 'title');
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { title, content, image } = req.body;  
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;  
        blog.image = image || blog.image;
       

        await blog.save();
        res.status(200).json({ message: "Blog updated successfully", blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
// Controller method for updating like count
exports.updateLikecount = async (req, res) => {
    try {
      const { likecount } = req.body;
      const blog = await Blog.findById(req.params.id);
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      // Update the like count
      blog.likecount = likecount;
  
      // Save the blog instance with updated like count
      await blog.save();
  
      res.status(200).json({ message: 'Like count updated successfully', blog });
    } catch (error) {
      console.error('Error updating like count:', error);
      res.status(500).json({ message: 'Error updating like count', error });
    }
  };

exports.getTotalBlogs = async (req, res) => {
    try {
        const totalBlogs = await Blog.countDocuments();  // Counts all blog documents
        res.status(200).json({ totalBlogs });
    } catch (error) {
        console.error('Error fetching total blog count:', error);
        res.status(500).json({ message: "Error fetching data" });
    }
};

  