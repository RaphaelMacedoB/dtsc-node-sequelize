//Raphael Macedo Bernardino
import { DataTypes, Model } from "sequelize";
class Employee extends Model {
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
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O email não pode ser nulo!" },
                    notEmpty: { msg: "O email não pode ser vazio!" },
                    isEmail: { args: [true], msg: "Digite um email válido!" }
                },
            },
            login: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O login não pode ser nulo!" },
                    notEmpty: { msg: "O login não pode ser vazio!" }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O password não pode ser nulo!" },
                    notEmpty: { msg: "O password não pode ser vazio!" }
                }
            },
        }, { sequelize, modelName: "employee", tableName: "employee" });
    }
    static associate(models) {}
}

export { Employee };