import Blog from "../Models/blog.js";
import Comment from "../Models/comment.js";


class commentsController {
  // ...existing methods for getting, creating, updating, and deleting blogs...

  // create comment for a blog
  static async createComment(req, res) {
    const { id } = req.params;
    const { text } = req.body;

    try {
      // check if the blog exists
      const blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      }

      // create new comment
      const comment = new Comment({
        blogId: id,
        text
      });
      await comment.save();

      return res.status(201).json({
        message: "New comment created successfully",
        data: comment,blog,
        ok:true
      });

    } catch (error) {
      return res.status(500).json({
        message: "Error creating comment",
        error: error.message
      });
    }
  }

 
 // get all comments on specific blog
static async getCommentsByBlog(req, res) {
    const { id } = req.params;
    try {
      const comments = await Comment.findById(id);
      res.status(200).json({
        data: comments
      });
    } catch (error) {
      res.status(500).json({
        message: "Error getting comments",
        error: error.message
      });
    }
  }
   


  // reply to a comment for a blog
  static async replyComment(req, res) {
    const { id } = req.params;
    const { text } = req.body;

    try {
      // check if the comment exists
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).json({
          message: `Comment with id: ${id} was not found`
        });
      }

      // create new comment as a reply
      const reply = new Comment({
        blogId: comment.blogId,
        text,
        parent: id
      });
      await reply.save();

      return res.status(201).json({
        message: "Reply created successfully",
        data: reply,
        ok:true
      });

    } catch (error) {
      return res.status(500).json({
        message: "Error replying to comment",
        error: error.message
      });
    }
  }
}

export default commentsController
