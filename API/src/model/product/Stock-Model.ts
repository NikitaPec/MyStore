import sequelize from "../../dataBase/db.js";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

class Stock extends Model<InferAttributes<Stock>, InferCreationAttributes<Stock>>{
    declare id: CreationOptional<number>;
    declare name: string;
    declare city: string;
    declare address: string;
    declare phone: string;
    declare workingHours: string;
}

Stock.init(
    {
        id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name:{ type: DataTypes.STRING, allowNull: false },
        city:{ type: DataTypes.STRING, allowNull: false },
        address:{ type: DataTypes.STRING, allowNull: false },
        phone:{ type: DataTypes.STRING, allowNull: false },
        workingHours:{ type: DataTypes.STRING, allowNull: false },
    },
    {sequelize, modelName: "Stock", paranoid: true, deletedAt: "destroyTime"}
);

export default Stock;