import { DataTypes, Model } from "sequelize";
class District extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O nome não pode ser nulo!" },
                    notEmpty: { msg: "O nome não pode ser vazio!" }
                }
            }
        }, { sequelize, modelName: "district", tableName: "districts" });
    }
}