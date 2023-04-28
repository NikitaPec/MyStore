import sequelize from "../../dataBase/db.js";
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import CharacteristicCategory from "./CharacteristicCategory-Model.js";

class characteristic extends Model<InferAttributes<characteristic>, InferCreationAttributes<characteristic>>{
    declare id: CreationOptional<number>;
    declare name: string;
    declare characteristicCategoryId: ForeignKey<CharacteristicCategory["id"]>;
    declare description: string;
}

characteristic.init(
    {
        id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name:{ type: DataTypes.STRING, allowNull: false },
        characteristicCategoryId:{ type: DataTypes.INTEGER, references: { model: CharacteristicCategory, key: "id" } },
        description:{ type: DataTypes.STRING, allowNull: false },
    },
    {sequelize, modelName: "characteristic", paranoid: true, deletedAt: "destroyTime"}
);

export default characteristic;