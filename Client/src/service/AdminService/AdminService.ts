import { AdminResponse } from "@/interfaces/AdminResponse.interface";
import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api'

export default class AdminService {
    static async getAllCategory(): Promise<AxiosResponse<AdminResponse>> {
        const { data } = await axios.get<AxiosResponse>('/category')
        return data
    }
    static async createCategory(name: string, parentCategoryId: number | null, description: string): Promise<AxiosResponse<AdminResponse>> {
        const { data } = await axios.post<AxiosResponse>('/category/create', { name, parentCategoryId, description })
        return data
    }

}
