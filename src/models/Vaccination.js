//Lucas Macedo Bernardino
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
    static associate(models) {
        this.belongsTo(models.vaccine, { as: 'vaccine', foreignKey: { name: 'vaccineId', allowNull: false, validate: { notNull: { msg: 'A Vacina deve ser previamente cadastrada!' } } } });
        this.belongsTo(models.dog, { as: 'dog', foreignKey: { name: 'dogId', allowNull: false, validate: { notNull: { msg: 'O cão deve ser previamente cadastrado!' } } } });
        this.belongsTo(models.employee, { as: 'employee', foreignKey: { name: 'employeeId', allowNull: false, validate: { notNull: { msg: 'O funcionário deve ser previamente cadastrado!' } } } });
        this.belongsTo(models.veterinarian, { as: 'veterinarian', foreignKey: { name: 'veterinarianId', allowNull: false, validate: { notNull: { msg: 'O veterinário deve ser previamente cadastrado!' } } } });
    }
}

export { Vaccination };