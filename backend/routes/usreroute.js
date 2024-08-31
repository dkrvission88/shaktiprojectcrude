import express, { request } from "express";
import { deleteUser, getAllUsers, getOtherUsers, login, logout, register, single, update } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router=express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route('/update/:id').put(update)
router.route('/del/:_id').delete(deleteUser)
router.route('/show').get(getAllUsers)
router.route('/singledata/:id').get(single)

router.route("/").get(isAuthenticated,getOtherUsers)

export default router
