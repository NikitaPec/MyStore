import sequelize from "../../dataBase/db.js";
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";

class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>>{
    declare id: CreationOptional<number>;
    declare parentCategoryId: ForeignKey<Category["id"]> | null;
    declare name: string;
    declare description: string;
}

Category.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        parentCategoryId: { type: DataTypes.INTEGER, defaultValue: null, references: { model: Category, key: "id" } },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize, modelName: "Category", paranoid: true, deletedAt: "destroyTime" }
);

export default Category;