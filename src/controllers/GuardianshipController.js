import { GuardianshipService } from "../services/GuardianshipService.js";
/**
 * @author Raphael Macedo Bernardino
 */
class GuardianshipController {

    static async findAll(req, res, next) {
        GuardianshipService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        GuardianshipService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        GuardianshipService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        GuardianshipService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        GuardianshipService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { GuardianshipController };