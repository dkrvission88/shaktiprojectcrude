import express from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";
import { replyToMessage, sendMessageBetweenTwoUsers, sendMessages } from "../controllers/allMessagescont.js";

const router=express.Router()
// router.route("/send/:id").post(isAuthenticated,sendMessage)
// router.route("/:id").get(isAuthenticated,getmessage)
router.route("/send").post(sendMessages)
router.route("/view/:userId1/:userId2").get(sendMessageBetweenTwoUsers)
router.route("/reply/:messageId").post(replyToMessage)




export default router

