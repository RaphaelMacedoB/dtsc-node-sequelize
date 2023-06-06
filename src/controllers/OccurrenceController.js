import { OccurrenceService } from "../services/OccurrenceService.js";
/**
 * @author Jefferson Abreu
 */

class OccurrenceController {
  static async findAllOccurrenceByDogAndOwner(req, res, next) {
    if (typeof req.params.tutorId === 'undefined' && typeof req.params.dogId === 'undefined') {
      OccurrenceService.listAllOccurrenceByDogAndOwner()
        .then(objs => res.json(objs))
        .catch(next);
    } else {
      OccurrenceService.findAllOccurrenceByDogAndOwner(req)
        .then(objs => res.json(objs))
        .catch(next);
    }
  }

  static async findAllOccurrenceThatDayByVet(req, res, next) {
    if (typeof req.params.date === 'undefined') {
      OccurrenceService.listAllOccurrenceThatDayByVet()
        .then(objs => res.json(objs))
        .catch(next);
    } else {
      OccurrenceService.findAllOccurrenceThatDayByVet(req)
        .then(objs => res.json(objs))
        .catch(next);
    }
  }

  static async findAll(req, res, next) {
    OccurrenceService.findAll()
      .then(objs => res.json(objs))
      .catch(next);
  }

  static async findByPk(req, res, next) {
    OccurrenceService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

  static async create(req, res, next) {
    OccurrenceService.create(req)
      .then(obj => res.json(obj,201))
      .catch(next);
  }

  static async update(req, res, next) {
    OccurrenceService.update(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

  static async delete(req, res, next) {
    OccurrenceService.delete(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

}

export { OccurrenceController };