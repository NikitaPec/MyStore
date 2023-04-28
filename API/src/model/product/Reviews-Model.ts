import sequelize from "../../dataBase/db.js";
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import Product from "./Product-Model.js";

class Reviews extends Model<InferAttributes<Reviews>, InferCreationAttributes<Reviews>>{
    declare id: CreationOptional<number>;
    declare productId: ForeignKey<Product["id"]>;
    declare creatorName: number;
    declare rating: number;
    declare termOfUse: string;
    declare dignity: string;
    declare flaws: string;
    declare comment: string;
    declare like: number;
    declare dislike: number;
}

Reviews.init(
    {
        id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        productId:{ type: DataTypes.INTEGER, references: { model: Product, key: "id" } },
        creatorName:{ type: DataTypes.STRING, allowNull: false },
        rating:{ type: DataTypes.INTEGER, allowNull: false },
        termOfUse:{ type: DataTypes.STRING, allowNull: false },
        dignity:{ type: DataTypes.STRING, allowNull: false },
        flaws:{ type: DataTypes.STRING, allowNull: false },
        comment:{ type: DataTypes.STRING, allowNull: false },
        like:{ type: DataTypes.INTEGER, allowNull: false },
        dislike:{ type: DataTypes.INTEGER, allowNull: false },
    },
    {sequelize, modelName: "Reviews", paranoid: true, deletedAt: "destroyTime"}
);

export default Reviews;