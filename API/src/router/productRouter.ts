import { Router } from "express";
import ProductController from "../controller/ProductController.js";

const productRouter = Router();

productRouter.post("/create");
//router.post("/recovery", UserController.recovery);
//router.post("/login", UserController.login);
//router.post("/logout", UserController.logout);
//router.post("/edit", UserController.edit);
//router.get("/get-key-password-recovery", UserController.getKeyRecoveryPass);
//router.get("/check-auth", authMiddleWare, UserController.checkAuth);
//router.get("/activate/:link", UserController.activate);
//router.get("/refresh", UserController.refresh);
export default productRouter;