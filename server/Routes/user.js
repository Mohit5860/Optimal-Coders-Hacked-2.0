import express from "express";
import { getUsr, login, register } from "../Controller/user.js";
const router = express.Router();

router.post("/signin", login);
router.post("/register", register);
router.post("/data", getUsr);

export default router;
