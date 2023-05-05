import { Vaccine } from "../services/VaccineService.js";
/**
 * @author Raphael Macedo Bernardino
 */
class VaccineController {

    static async findAll(req, res, next) {
        Vaccine.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        Vaccine.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
    static async findByUf(req, res, next) {
        Vaccine.findByUf(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        Vaccine.create(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async update(req, res, next) {
        Vaccine.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        Vaccine.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { VaccineController };