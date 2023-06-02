import { Occurrence } from "../models/Occurrence.js";

import sequelize from '../config/database-connections.js';
import { QueryTypes } from 'sequelize';
/**
 * @author Jefferson Abreu
 */
class OccurrenceService {

  static async findAll() {
    const objs = await Occurrence.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Occurrence.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { date, description, dog_health_state, dog, employee, veterinarian, typeOfOccurrence } = req.body;
    if (dog == null) throw 'O cachorro deve ser preenchido!';
    if (employee == null) throw 'O funcionário deve ser preenchido!';
    if (veterinarian == null) throw 'O veterinário deve ser preenchido!';
    if (typeOfOccurrence == null) throw 'O tipo de ocorrência deve ser preenchido!';
    const obj = await Occurrence.create({ date, description, dog_health_state, dogId: dog.id, employeeId: employee.id, veterinarianId: veterinarian.id, typeOfOccurrenceId: typeOfOccurrence.id });
    return await Occurrence.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { date, description, dog_health_state, dog, employee, veterinarian, typeOfOccurrence } = req.body;
    if (dog == null) throw 'O cachorro deve ser preenchido!';
    if (employee == null) throw 'O funcionário deve ser preenchido!';
    if (veterinarian == null) throw 'O veterinário deve ser preenchido!';
    if (typeOfOccurrence == null) throw 'O tipo de ocorrência deve ser preenchido!';
    const obj = await Occurrence.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Ocorrencia não encontrada!';
    Object.assign(obj, { date, description, dog_health_state, dogId: dog.id, employeeId: employee.id, veterinarianId: veterinarian.id, typeOfOccurrenceId: typeOfOccurrence.id });
    await obj.save();
    return await Occurrence.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Occurrence.findByPk(id);
    if (obj == null) throw 'Ocorrencia não encontrada!';
    await obj.destroy();
    return obj;
  }
}

export { OccurrenceService };