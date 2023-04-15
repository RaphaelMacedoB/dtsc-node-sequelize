//Raphael Macedo Bernardino
import { DataTypes, Model } from "sequelize";
class Vaccination extends Model {
    static init(sequelize) {
        super.init({
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    notNull: { msg: "A data não pode ser nulo!" },
                    notEmpty: { msg: "A data não pode ser vazio!" }
                }
            }
        }, { sequelize, modelName: "vaccination", tableName: "vaccinations" });
    }
    static associate(models) {}
}

export { Vaccination };