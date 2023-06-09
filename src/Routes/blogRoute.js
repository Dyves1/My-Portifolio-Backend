import express from "express";
import blogController from "../Controllers/blogController.js";

const router = express.Router();

router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getBlog)
router.post("/",  blogController.createBlog)
router.put("/:id", blogController.updateBlog)
router.delete("/:id", blogController.deleteBlog)


export default router