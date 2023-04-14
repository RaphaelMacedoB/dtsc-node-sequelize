//Lucas Macedo

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
                type: DataTypes.DATE,
                validate: {
                    dosageIntervalValidator(value) {
                        if (new Date(value) < new Date(3)) {
                            throw new Error("invalid date");
                        }
                    },
                },
            }
        }, { sequelize, modelName: "vaccine", tableName: "vaccines" });
    }
    static associate(models) {
        this.belongsToMany(models.breed, { as: 'breeds', through: 'vaccine_breed', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

    }
}

export { Breed };