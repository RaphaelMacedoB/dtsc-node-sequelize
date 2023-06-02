import { Occurrence } from "../models/Occurrence.js";

import sequelize from '../config/database-connections.js'
import { QueryTypes } from 'sequelize';
/**
 * @author Jefferson Abreu
 */
class OccurrenceService {

/**
 * @author Jefferson Abreu
 */
  static async findAllOccurrenceByDogAndOwner(req) {
    const { tutorId, dogId } = req.params;
    const objs = await sequelize.query(`
    SELECT  oc.id					        AS "ID OCC",
            t.name								AS "Nome do tutor",
            d.name								AS "Nome do cachorro",
            oc.description				AS "Description",
            oc.date							  AS "Date",
            oc.dog_health_state 	AS "Dog Health State"
    FROM occurrences oc
    INNER JOIN dogs d 					ON oc.dog_id = d.id
    INNER JOIN guardianships g 	ON g.dog_id = d.id
    INNER JOIN tutors t 				ON g.tutor_id = t.id
    WHERE t.id = :tutorId AND d.id = :dogId
    GROUP BY oc.id, oc.description, oc.date, oc.dog_health_state
    ORDER BY oc.id;
    `, { replacements: { tutorId, dogId }, type: QueryTypes.SELECT });
    return objs;
  }

/**
 * @author Jefferson Abreu
 */
  static async listAllOccurrenceByDogAndOwner() {
    const objs = await sequelize.query(`
    SELECT  oc.id					        AS "ID OCC",
            t.name								AS "Nome do tutor",
            d.name								AS "Nome do cachorro",
            oc.description				AS "Description",
            oc.date							  AS "Date",
            oc.dog_health_state 	AS "Dog Health State"
    FROM occurrences oc
    INNER JOIN dogs d 					ON oc.dog_id = d.id
    INNER JOIN guardianships g 	ON g.dog_id = d.id
    INNER JOIN tutors t 				ON g.tutor_id = t.id
    GROUP BY oc.id, oc.description, oc.date, oc.dog_health_state
    ORDER BY oc.id;
    `, { type: QueryTypes.SELECT });
    return objs;
  }

/**
 * @author Jefferson Abreu
 */
  static async findAllOccurrenceThatDayByVet(req, res, next) {
    const { date } = req.params;
    const objs = await sequelize.query(`
    SELECT oc.id 								AS "ID",
          oc.description				AS "Description",
          oc.date							  AS "Date",
          oc.dog_health_state 	AS "Dog Health State"
    FROM occurrences oc
    INNER JOIN veterinarians vet ON oc.veterinarian_id = vet.id
    WHERE oc.date = :date
    GROUP BY oc.id, oc.description, oc.date, oc.dog_health_state
    ORDER BY oc.id;
    `, { replacements: { date }, type: QueryTypes.SELECT });
    return objs;
  }

/**
 * @author Jefferson Abreu
 */
  static async listAllOccurrenceThatDayByVet() {
    const objs = await sequelize.query(`
    SELECT oc.id 								AS "ID",
          oc.description				AS "Description",
          oc.date							  AS "Date",
          oc.dog_health_state 	AS "Dog Health State"
    FROM occurrences oc
    INNER JOIN veterinarians vet ON oc.veterinarian_id = vet.id
    GROUP BY oc.id, oc.description, oc.date, oc.dog_health_state
    ORDER BY oc.id;
    `, { type: QueryTypes.SELECT });
    return objs;
  }

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
    const obj = await Occurrence.create({ date, description, dog_health_state, dogId: dog.id, employeeId: employee.id, veterinarianId: veterinarian.id, typeOfOccurrenceId: typeOfOccurrence.id });
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
    Object.assign(obj, { date, description, dog_health_state, dogId: dog.id, employeeId: employee.id, veterinarianId: veterinarian.id, typeOfOccurrenceId: typeOfOccurrence.id });
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