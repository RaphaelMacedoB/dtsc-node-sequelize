import { VaccinationService } from "../services/VaccinationService.js";
/**
 * @author Lucas Macedo Bernardino
 */
class VaccinationController {

    static async findAll(req, res, next) {
        VaccinationService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        VaccinationService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        VaccinationService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        VaccinationService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        VaccinationService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { VaccinationController };