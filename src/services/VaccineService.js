
import { Vaccine } from "../models/Vaccine.js"
import { Breed } from "../models/Breed.js"
/**
 * @author Lucas Macedo Bernardino
 */
import sequelize from '../config/database-connections.js';

class VaccineService {

  static async findAll() {
    const objs = await Vaccine.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Vaccine.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }


  static async create(req) {
    const { name, dosage_interval_days, breeds } = req.body;
    const t = await sequelize.transaction();
    const obj = await Vaccine.create({ name, dosage_interval_days }, { transaction: t });
    try {
      await Promise.all(breeds.map(breed => obj.addBreeds(Breed.build(breed), { transaction: t })));
      await t.commit();
      return await Breed.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Uma das raças não foi informada corretamente!";
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { name, dosage_interval_days, breeds } = req.body;
    const obj = await Vaccine.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Raça não encontrada!';
    const t = await sequelize.transaction();
    Object.assign(obj, { name, dosage_interval_days, breeds });
    await obj.save({ transaction: t });
    await sequelize.models.vaccine_breed.destroy({ where: { vaccineId: obj.id }, transaction: t });
    try {
      await Promise.all(breeds.map(breed => obj.addBreeds(Breed.build(breed), { transaction: t })));
      await t.commit();
      return await Breed.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Uma das raças informadas não foi encontrado!";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Vaccine.findByPk(id);
    if (obj == null) throw 'Vacina não encontrada!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover, há dependências!";
    }
  }
}
export { VaccineService };