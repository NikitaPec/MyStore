import sequelize from "../../dataBase/db.js";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

class CharacteristicCategory extends Model<InferAttributes<CharacteristicCategory>, InferCreationAttributes<CharacteristicCategory>>{
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: string;
}

CharacteristicCategory.init(
    {
        id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name:{ type: DataTypes.STRING, allowNull: false },
        description:{ type: DataTypes.STRING, allowNull: false },
    },
    {sequelize, modelName: "CharacteristicCategory", paranoid: true, deletedAt: "destroyTime"}
);

export default CharacteristicCategory;