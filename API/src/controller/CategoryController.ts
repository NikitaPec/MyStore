import { NextFunction, Request, Response } from "express";
import CategoryService from "../service/CategoryService.js";

class CategoryController {

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, parentCategoryId, description } = req.body;
            const apiResponse = await CategoryService.create(name, parentCategoryId, description)
            return res.json(apiResponse);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const apiResponse = await CategoryService.getAll()
            return res.json(apiResponse);
        } catch (error) {
            next(error);
        }
    }
}

export default new CategoryController();