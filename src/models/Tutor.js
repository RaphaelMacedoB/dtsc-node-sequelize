//Raphael Macedo Bernardino
import { DataTypes, Model } from "sequelize";
class Tutor extends Model {
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
            house_number: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: { msg: "O número não pode ser nulo!" },
                    notEmpty: { msg: "O número não pode ser vazio!" },
                    min: { args: [0], msg: "Digite um número positivo!" }
                }
            },
            zip_code: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O CEP não pode ser nulo!" },
                    notEmpty: { msg: "O CEP não pode ser vazio!" },
                    is: {
                        args: ["^\\d{2}\\.\\d{3}-\\d{3}$"],
                        msg: "O CEP deve estar no formato \"NN.NNN-NNN\""
                    }
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O CEP não pode ser nulo!" },
                    notEmpty: { msg: "O CEP não pode ser vazio!" },
                    isEmail: { args: [true], msg: "Digite um email válido!" }
                },
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O número de telefone não pode ser nulo!" },
                    notEmpty: { msg: "O número de telefone não pode ser vazio!" },
                    is: { args: ["^\\(\\d{2}\\)\\d{5}-\\d{4}$"], msg: "Telefone deve seguir o padrão (NN)NNNNN-NNNN" }
                },
            },
            public_place: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O termo não pode ser nulo!" },
                    notEmpty: { msg: "O termo de telefone não pode ser vazio!" },
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
            },
            space_size: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: { msg: "O valor do espaço disponível não pode ser nulo!" },
                    notEmpty: { msg: "O valor do espaço disponível não pode ser vazio!" },
                    len: { args: [0, 10000], msg: "Não existe espaço negativo! Digite um valor positivo." }
                }
            }
        }, { sequelize, modelName: "tutor", tableName: "tutors" });
    }
    static associate(models) {
        this.belongsTo(models.district, { as: 'district', foreignKey: { name: 'districtId', allowNull: false, validate: { notNull: { msg: 'O bairro do Tutor deve ser preenchido!' } } } });
    }
}

export { Tutor };