import { TypeOfOccurrenceService } from "../services/TypeOfOccurrenceService.js";
/**
 * @author Jefferson Abreu
 */
class TypeOfOccurrenceController {

  static async findAll(req, res, next) {
    TypeOfOccurrence.findAll()
      .then(objs => res.json(objs))
      .catch(next);
  }

  static async findByPk(req, res, next) {
    TypeOfOccurrence.findByPk(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

  static async create(req, res, next) {
    TypeOfOccurrence.create(req)
      .then(obj => res.json(obj,201))
      .catch(next);
  }

  static async update(req, res, next) {
    TypeOfOccurrence.update(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

  static async delete(req, res, next) {
    TypeOfOccurrence.delete(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

}

export { TypeOfOccurrenceController };