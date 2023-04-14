import { DataTypes, Model } from "sequelize";
class District extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O nome não pode ser nulo!" },
                    notEmpty: { msg: "O nome não pode ser vazio!" }
                }
            }
        }, { sequelize, modelName: "district", tableName: "districts" });
    }

    static associate(models) {
        this.belongsTo(models.city, { as: 'city', foreignKey: { name: 'cityId', allowNull: false, validate: { notNull: { msg: 'A Cidade do Bairro deve ser preenchida!' } } } });
    }
}

export { District }