import sequelize from "../../dataBase/db.js";
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import Category from "../category/Category-Model.js";

class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>>{
    declare id: CreationOptional<number>;
    declare categoryId: ForeignKey<Category["id"]>;
    declare name: string;
    declare description: string;
    declare price: number;
    declare discount: number;
}

Product.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        categoryId: { type: DataTypes.INTEGER, references: { model: Category, key: "id" } },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.INTEGER, defaultValue: 0 },
        discount: { type: DataTypes.INTEGER, defaultValue: 0 }
    },
    { sequelize, modelName: "Product", paranoid: true, deletedAt: "destroyTime" }
);

export default Product;