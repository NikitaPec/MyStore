export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    discount: number
    category: {
        id: number
        depth: number
        parentCategoryId: number
        name: string
        description: string
    }
    characteristics:Array<string>
    availability: Array<{
        stock: {
            id: number
            name: string
            city: string
            address: string
            phone: string
            workingHours: string
        }
        quantity: number
    }>
    img: Array<string>
    reviews: Array<string>
}


