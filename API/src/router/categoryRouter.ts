import { Router } from "express";
import CategoryController from "../controller/CategoryController.js";

const categoryRouter = Router();

categoryRouter.get("/", CategoryController.getAll);
categoryRouter.post("/create", CategoryController.create);
//router.post("/recovery", UserController.recovery);
//router.post("/login", UserController.login);
//router.post("/logout", UserController.logout);
//router.post("/edit", UserController.edit);
//router.get("/get-key-password-recovery", UserController.getKeyRecoveryPass);
//router.get("/check-auth", authMiddleWare, UserController.checkAuth);
//router.get("/activate/:link", UserController.activate);
//router.get("/refresh", UserController.refresh);
export default categoryRouter;