import { Router } from "express";
import UserController from "../controller/UserController.js";
import authMiddleWare from "../middleWare/authMiddleWare.js";
const userRouter = Router();

userRouter.post("/registration", UserController.registration);
userRouter.post("/recovery", UserController.recovery);
userRouter.post("/login", UserController.login);
userRouter.post("/logout", UserController.logout);
userRouter.post("/edit", UserController.edit);
userRouter.get("/get-key-password-recovery", UserController.getKeyRecoveryPass);
userRouter.get("/check-auth", authMiddleWare, UserController.checkAuth);
//userRouter.get("/activate/:link", UserController.activate);
userRouter.get("/refresh", UserController.refresh);
export default userRouter;
