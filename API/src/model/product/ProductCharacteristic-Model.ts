import sequelize from "../../dataBase/db.js";
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import Product from "./Product-Model.js";
import CharacteristicCategory from "./CharacteristicCategory-Model.js";

class ProductCharacteristic extends Model<InferAttributes<ProductCharacteristic>, InferCreationAttributes<ProductCharacteristic>>{
    declare id: CreationOptional<number>;
    declare categoryId: ForeignKey<Product["id"]>;
    declare characteristicCategoryId: ForeignKey<CharacteristicCategory["id"]>;
    declare description: string;
}

ProductCharacteristic.init(
    {
        id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        categoryId:{type: DataTypes.INTEGER, references: { model: Product, key: "id" }},
        characteristicCategoryId:{type: DataTypes.INTEGER, references: { model: CharacteristicCategory, key: "id" }},
        description:{ type: DataTypes.STRING, allowNull: false },
    },
    {sequelize, modelName: "ProductCharacteristic", paranoid: true, deletedAt: "destroyTime"}
);

export default ProductCharacteristic;