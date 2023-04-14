// Jefferson Abreu

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
          notNull: { msg: "O numero não pode ser nulo!" },
          notEmpty: { msg: "O numro não pode ser vazio!" },
          min: { msg: "O numero não pode ser negativo!", args: [0] }
        }
      },
      zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O cep não pode ser nulo!" },
          notEmpty: { msg: "O cep não pode ser vazio!" },
          is: { args: ["[0-9]{2}\.[0-9]{3}\-[0-9]{3}"], msg: "Cep deve seguir o padrão NN.NNN-NNN" }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "O e-mail não pode ser nulo!" },
          notEmpty: { msg: "E-mail deve ser preenchido!" },
          isEmail: { args: [true], msg: "Digite um e-mail válido!" }
        }
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Número do Telefone deve ser preenchido!" },
          is: { args: /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}/, msg: "Telefone deve seguir o padrão (NN) NNNNN-NNNN" }
        }
      },
      public_place: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O espaço publico não pode ser nulo!" },
          notEmpty: { msg: "O espaço público não pode ser vazio!" }
        }
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: { msg: "Nascimento do Tutor deve ser preenchido!" },
          is: { args: ["[0-9]{4}\-[0-9]{2}\-[0-9]{2}"], msg: "Nascimento do Tutor deve seguir o padrão yyyy-MM-dd!" }
        }
      },
      space_size: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "O espaço disponível não pode ser nulo!" },
          notEmpty: { msg: "O espaço disponível não pode ser vazio!" },
          min: { msg: "O espaço disponível não pode ser negativo!", args: [0] }
        }
      }
    }, { sequelize, modelName: "tutor", tableName: "tutors" });
  }

  static associate(models) {
    this.belongsTo(models.district, { as: 'district', foreignKey: { name: 'districtId', allowNull: false, validate: { notNull: { msg: 'O Bairro deve ser preenchido!' } } } });
  }
}

export { Tutor }