import { NextFunction, Request, Response } from "express";
import ProductService from "../service/ProductService.js";
import { IProductRequest } from "../interface/product-interface.js";

class ProductController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const product: IProductRequest = req.body;
            const apiResponse = await ProductService.create
            return res.json(apiResponse);
        } catch (error) {
            next(error);
        }
    }
}

export default new ProductController();