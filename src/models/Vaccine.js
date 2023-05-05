//Lucas Macedo Bernardino

import { DataTypes, Model } from "sequelize";

class Vaccine extends Model {
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
            dosage_interval_days: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: { msg: "O intervalor de dosagem não pode ser nulo!" },
                    notEmpty: { msg: "O intervalor de dosagem não pode ser vazio!" },
                    min: { msg: "O intervalor de dosagem não pode ser negativo!", args: [0] }
                }
            }
        }, { sequelize, modelName: "vaccine", tableName: "vaccines" });
    }
    static associate(models) {
        this.belongsToMany(models.breed, { as: 'breeds', through: 'vaccine_breed', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

    }
}

export { Vaccine };