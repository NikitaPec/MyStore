
interface IProductRequest {
    id: number
    parentCategoryId: number | null
    description: string
    name: string
}

export { IProductRequest };