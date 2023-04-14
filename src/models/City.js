import { DataTypes, Model } from "sequelize";
class City extends Model {
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
        }, { sequelize, modelName: "city", tableName: "cities" });
    }
    static associate(models) {
        this.belongsTo(models.uf, { as: 'uf', foreignKey: { name: 'ufId', allowNull: false, validate: { notNull: { msg: 'Uf da Cidade deve ser preenchida!' } } } });
    }
}

export { City };