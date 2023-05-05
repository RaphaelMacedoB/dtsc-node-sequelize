//Lucas Macedo Bernardino

import { DataTypes, Model } from "sequelize";
class DogSize extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O nome não pode ser nulo!" },
                    notEmpty: { msg: "O nome não pode ser vazio!" }
                }
            },
            occupied_size: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: { msg: "O espaço requerido não pode ser nulo!" },
                    notEmpty: { msg: "O espaço requerido não pode ser vazio!" },
                    min: { msg: "O espaço requerido não pode ser negativo!", args: [0] }
                }
            }
        }, { sequelize, modelName: "dogSize", tableName: "dogSizes" });
    }
    static associate(models) {}
}

export { DogSize };