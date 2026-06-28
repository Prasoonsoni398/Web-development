import express from "express";
import {
  LoginUser,
  LogoutUser,
  RegisterUser,
} from "../controllers/auth.controller.js";
import { sampleMiddleware,sampleMiddleware2 } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login",sampleMiddleware2 , LoginUser);
router.post("/register",sampleMiddleware, sampleMiddleware2, RegisterUser);
router.get("/logout",sampleMiddleware ,LogoutUser);

export default router;
