import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"
import loginRoute from "./loginRoute.js"
import commentRoute from "./commentRoute.js"
// import messageRoute from "./messageRoute.js"


const app =express()

const router = express.Router()

router.use("/blogs",blogRoute)
router.use("/signup",signupRoute)
router.use("/login", loginRoute)
router.use("/comments", commentRoute)
// router.use("/messages", messageRoute)


export default router