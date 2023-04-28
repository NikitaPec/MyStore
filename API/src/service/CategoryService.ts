import { raw } from "express";
import ApiResponse from "../dto/ApiResponseDto.js";
import Category from "../model/category/Category-Model.js";

class CategoryService {
    async create(name: string, parentCategoryId: number | null, description: string) {
        console.log(name, parentCategoryId, description)
        const apiResponse = new ApiResponse
        const category = await Category.create({
            name, parentCategoryId, description
        })
        apiResponse.addData([category])
        return apiResponse
    }
    async getAll() {
        const categories = await Category.findAll({ raw: true })
        //apiResponse.setData(categories)
        const apiResponse = new ApiResponse(categories)
        console.log(apiResponse)
        return apiResponse
    }
}

export default new CategoryService;