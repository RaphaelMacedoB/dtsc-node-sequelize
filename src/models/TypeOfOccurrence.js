//Raphael Macedo Bernardino
import { DataTypes, Model } from "sequelize";
class TypeOfOccurrence extends Model {
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
            severity: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    notNull: { msg: "O número de agressividade não pode ser nulo!" },
                    notEmpty: { msg: "O número de agressividade não pode ser vazio!" },
                    min: { args: [0], msg: "Digite um número positivo!" }
                }
            },
            aggressor: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                validate: {
                    notNull: { msg: "O CEP não pode ser nulo!" },
                    notEmpty: { msg: "O CEP não pode ser vazio!" },
                },
            }
        }, { sequelize, modelName: "typeOfOccurrence", tableName: "typeOfOccurrences" });
    }
    static associate(models) {}
}

export { Tutor };