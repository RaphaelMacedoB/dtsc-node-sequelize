
import { Guardianship } from "../models/Guardianship.js"

/**
 * @author Raphael Macedo Bernardino
 */
import sequelize from '../config/database-connections.js';

class GuardianshipService {

  static async findAll() {
    const objs = await Guardianship.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Guardianship.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }


  static async create(req) {
    const { date, dog, employee, tutor } = req.body;
    if (dog == null) throw 'O Cachorro deve ser preenchido!';
    if (employee == null) throw 'O funcionário deve ser preenchido!';
    if (tutor == null) throw 'O Tutor deve ser preenchido!';
    const obj = await Guardianship.create({ date, dogId: dog.id, 'employeeId':employee.id, 'tutorId': tutor.id });
    return await Guardianship.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { date, dog, employee, tutor } = req.body;
    if (dog == null) throw 'O Cachorro deve ser preenchido!';
    if (employee == null) throw 'O funcionário deve ser preenchido!';
    if (tutor == null) throw 'O Tutor deve ser preenchido!';
    const obj = await Guardianship.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Tutela não encontrada!';
    const t = await sequelize.transaction();
    Object.assign(obj, { date, dogId: dog.id, employeeId: employee.id, tutorId: tutor.id });
    await obj.save();
    return await Guardianship.findByPk(obj.id, { include: { all: true, nested: true}});
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Guardianship.findByPk(id);
    if (obj == null) throw 'Tutela não encontrada!';
    await obj.destroy();
    return obj;
  }
}
export { GuardianshipService };