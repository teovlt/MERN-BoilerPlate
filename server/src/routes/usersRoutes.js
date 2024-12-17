import express from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/userController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

//GET all users
router.get("/list", verifyToken({ role: "admin" }), getUsers);

//Get a single user
router.get("/:id", verifyToken({ role: "admin" }), getUser);

//Create a new user
router.post("/new", verifyToken({ role: "admin" }), createUser);

//Update a user
router.put("/:id", verifyToken({ role: "admin" }), updateUser);

//Delete a user
router.delete("/:id", verifyToken({ role: "admin" }), deleteUser);

export default router;
