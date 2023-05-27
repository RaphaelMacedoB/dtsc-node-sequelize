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
    // if (dog == null) throw 'O Cliente da Reserva deve ser preenchido!';
    // if (fita == null) throw 'A Fita da Reserva deve ser preenchida!';
    const obj = await Occurrence.create({ date, description, dog_health_state, dog, employee, veterinarian, typeOfOccurrence });
    return await Occurrence.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { data, status, cliente, fita } = req.body;
    if (cliente == null) throw 'O Cliente da Reserva deve ser preenchido!';
    if (fita == null) throw 'A Fita da Reserva deve ser preenchida!';
    const obj = await Occurrence.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Reserva não encontrada!';
    Object.assign(obj, { data, status, clienteId: cliente.id, fitaId: fita.id });
    await obj.save();
    return await Occurrence.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Occurrence.findByPk(id);
    if (obj == null) throw 'Reserva não encontrada!';
    await obj.destroy();
    return obj;
  }
}

export { OccurrenceService };