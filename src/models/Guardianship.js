//Raphael Macedo Bernardino
import { DataTypes, Model } from "sequelize";
class Guardianship extends Model {
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
        }, { sequelize, modelName: "guardianship", tableName: "guardianships" });
    }
    static associate(models) {
        this.belongsTo(models.dog, { as: 'dog', foreignKey: { name: 'dogId', allowNull: false, validate: { notNull: { msg: 'O cão deve ser previamente cadastrado!' } } } });
        this.belongsTo(models.employee, { as: 'employee', foreignKey: { name: 'employeeId', allowNull: false, validate: { notNull: { msg: 'O funcionário deve ser previamente cadastrado!' } } } });
        this.belongsTo(models.tutor, { as: 'tutor', foreignKey: { name: 'tutorId', allowNull: false, validate: { notNull: { msg: 'O tutor deve ser previamente cadastrado!' } } } });

    }
}

export { Guardianship };