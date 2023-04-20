import express from "express";
import messageController from "../Controllers/messageController.js";


const router = express.Router();

router.get("/", messageController.getMessages);
router.get("/:id", messageController.getMessage)
router.post("/", messageController.createMessage)
router.delete("/:id", messageController.deleteMessage)

export default router