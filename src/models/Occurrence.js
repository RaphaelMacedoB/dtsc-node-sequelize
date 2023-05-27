import { DataTypes, Model } from "sequelize";
/**
 * @author Jefferson Abreu
 */
class Occurrence extends Model {
    static init(sequelize) {
        super.init({
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    notNull: { msg: "A data não pode ser nulo!" },
                    notEmpty: { msg: "A data não pode ser vazio!" }
                }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O descrição não pode ser nula!" },
                    notEmpty: { msg: "O descrição não pode ser vazia!" }
                }
            },
            dog_health_state: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O estado de saúde do cachorro não pode ser nulo!" },
                    notEmpty: { msg: "O estado de saúde do cachorro não pode ser vazio!" }
                }
            },
        }, { sequelize, modelName: "occurrence", tableName: "occurrences" });
    }
    static associate(models) {
        this.belongsTo(models.dog, { as: 'dog', foreignKey: { name: 'dogId', allowNull: false, validate: { notNull: { msg: 'O cão deve ser previamente cadastrado!' } } } });
        this.belongsTo(models.employee, { as: 'employee', foreignKey: { name: 'employeeId', allowNull: false, validate: { notNull: { msg: 'O funcionário deve ser previamente cadastrado!' } } } });
        this.belongsTo(models.veterinarian, { as: 'veterinarian', foreignKey: { name: 'veterinarianId', allowNull: false, validate: { notNull: { msg: 'O veterinário deve ser previamente cadastrado!' } } } });
        this.belongsTo(models.typeOfOccurrence, { as: 'typeOfOccurrence', foreignKey: { name: 'typeOfOccurrenceId', allowNull: false, validate: { notNull: { msg: 'O tipo de ocorrência deve ser previamente cadastrado!' } } } });
    }
}

export { Occurrence };