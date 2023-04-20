import express from "express";
import commentsController from "../Controllers/commentsController.js";


const router = express.Router();

router.get("/", commentsController.getComments);
router.get("/:id", commentsController.getComment)
router.post("/", commentsController.createComment)
router.delete("/:id", commentsController.deleteComment)

export default router