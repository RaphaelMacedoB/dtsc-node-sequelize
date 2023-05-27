import { Occurrence } from "../models/Occurrence.js";

import sequelize from '../config/database-connections.js'
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
    if (date == null) throw 'A data deve estar preenchida!';
    if (description == null) throw 'A descrição deve estar preenchida!';
    if (dog_health_state == null) throw 'A situação de saúde do cachorro deve estar preenchida!';
    if (dog == null) throw 'O cachorro deve estar preenchido!';
    if (employee == null) throw 'O funcionário deve estar preenchido!';
    if (veterinarian == null) throw 'O veterinário deve estar preenchido!';
    if (typeOfOccurrence == null) throw 'O tipo de ocorrência deve estar preenchido!';
    const obj = await Occurrence.create({ date, description, dog_health_state, dogId: dog.id, employeeId: employee.id, veterinarianId: veterinarian.id, typeOfOccurrenceId: typeOfOccurrence.id  });
    return await Occurrence.findByPk(obj.id, { include: { all: true, nested: true } });
  }
  static async update(req) {
    const { id } = req.params;
    const { date, description, dog_health_state, dog, employee, veterinarian, typeOfOccurrence } = req.body;
    if (date == null) throw 'A data deve estar preenchida!';
    if (description == null) throw 'A descrição deve estar preenchida!';
    if (dog_health_state == null) throw 'A situação de saúde do cachorro deve estar preenchida!';
    if (dog == null) throw 'O cachorro deve estar preenchido!';
    if (employee == null) throw 'O funcionário deve estar preenchido!';
    if (veterinarian == null) throw 'O veterinário deve estar preenchido!';
    if (typeOfOccurrence == null) throw 'O tipo de ocorrência deve estar preenchido!';
    const obj = await Occurrence.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Ocorrência não encontrada!';
    Object.assign(obj, { date, description, dog_health_state, dogId: dog.id, employeeId: employee.id, veterinarianId: veterinarian.id, typeOfOccurrenceId: typeOfOccurrence.id  });
    await obj.save();
    return await Occurrence.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Occurrence.findByPk(id);
    if (obj == null) throw 'Ocorrência não encontrada!';
    await obj.destroy();
    return obj;
  }
}

export { OccurrenceService };