import sequelize from "../../dataBase/db.js";
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import Product from "./Product-Model.js";
import Stock from "./Stock-Model.js";

class ProductStockAvailability extends Model<InferAttributes<ProductStockAvailability>, InferCreationAttributes<ProductStockAvailability>>{
    declare id: CreationOptional<number>;
    declare productId: ForeignKey<Product["id"]>;
    declare stockId: ForeignKey<Stock["id"]>;
    declare quantity: number;

}

ProductStockAvailability.init(
    {
        id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        productId:{ type: DataTypes.INTEGER, references: { model: Product, key: "id" } },
        stockId:{ type: DataTypes.INTEGER, references: { model: Stock, key: "id" } },
        quantity:{ type: DataTypes.NUMBER, allowNull: false },
    },
    {sequelize, modelName: "ProductStockAvailability", paranoid: true, deletedAt: "destroyTime"}
);

export default ProductStockAvailability;