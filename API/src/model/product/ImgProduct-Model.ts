import sequelize from "../../dataBase/db.js";
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import Product from "./Product-Model.js";

class ImgProduct extends Model<InferAttributes<ImgProduct>, InferCreationAttributes<ImgProduct>>{
    declare id: CreationOptional<number>;
    declare productId: ForeignKey<Product["id"]>;
    declare path: string;
}

ImgProduct.init(
    {
        id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        productId:{ type: DataTypes.INTEGER, references: { model: Product, key: "id" } },
        path:{ type: DataTypes.STRING, allowNull: false },
    },
    {sequelize, modelName: "ImgProduct", paranoid: true, deletedAt: "destroyTime"}
);

export default ImgProduct;