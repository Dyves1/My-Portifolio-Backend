import express from 'express';
import commentsController from "../Controllers/commentsController.js";

const router = express.Router();


router.get('/:id', commentsController.getCommentsByBlog);
router.post('/blogs/:id', commentsController.createComment);
router.post('/:id/reply', commentsController.replyComment);

export default router;
