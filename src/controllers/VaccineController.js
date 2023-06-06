import { VaccineService } from "../services/VaccineService.js";
/**
 * @author Raphael Macedo Bernardino
 */
class VaccineController {

    static async findAll(req, res, next) {
        VaccineService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        VaccineService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
    static async create(req, res, next) {
        VaccineService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        VaccineService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        VaccineService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { VaccineController };