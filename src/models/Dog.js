import { DataTypes, Model } from "sequelize";
/**
 * @author Jefferson Abreu
 */
class Dog extends Model {
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
            weight: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    notNull: { msg: "O peso não pode ser nulo!" },
                    notEmpty: { msg: "O peso não pode ser vazio!" },
                    min: { args: [0], msg: "Digite um número positivo!" }
                }
            },
            date_of_birth: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    notNull: { msg: "A data de nascimento não pode ser nula!" },
                    notEmpty: { msg: "A data de nascimento não pode ser vazio!" },
                    is: { args: ["^\\d{4}-\\d{2}-\\d{2}$"], msg: "Nascimento do Cliente deve seguir o padrão yyyy-MM-dd!" }
                },
            }
        }, { sequelize, modelName: "dog", tableName: "dogs" });
    }
    static associate(models) {
        this.belongsTo(models.breed, { as: 'breed', foreignKey: { name: 'breedId', allowNull: false, validate: { notNull: { msg: 'A raça da Cidade deve ser preenchida!' } } } });
    }


}

export { Dog };