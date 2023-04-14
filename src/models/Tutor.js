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
            zip_code: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                notNull: { msg: "O CEP não pode ser nulo!" },
                notEmpty: { msg: "O CEP não pode ser vazio!" },
                len: { args: [0, 8], msg: "Digite apenas oito números!" }
            },
            email: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "O CEP não pode ser nulo!" },
                notEmpty: { msg: "O CEP não pode ser vazio!" },
                isEmail: { args: [true], msg: "Digite um email válido!" }
            },
            phone: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "O número de telefone não pode ser nulo!" },
                notEmpty: { msg: "O número de telefone não pode ser vazio!" },
            },
            public_place: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "O termo não pode ser nulo!" },
                notEmpty: { msg: "O termo de telefone não pode ser vazio!" },
            },
            date_of_birth: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: { msg: "O termo não pode ser nulo!" },
                notEmpty: { msg: "O termo de telefone não pode ser vazio!" },
            },
            space_size: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: "O valor do espaço disponível não pode ser nulo!" },
                notEmpty: { msg: "O valor do espaço disponível não pode ser vazio!" },
                len: { args: [0, Infinity], msg: "Não existe espaço negativo! Digite um valor positivo." }
            }
        }, { sequelize, modelName: "tutor", tableName: "tutors" });
    }
    static associate(models) {
        this.belongsTo(models.district, { as: 'district', foreignKey: { name: 'districtId', allowNull: false, validate: { notNull: { msg: 'O bairro da Cidade deve ser preenchida!' } } } });
    }
}

export { Tutor };