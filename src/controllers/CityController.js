import { CityService } from "../services/CityService.js";

class CityController {

    static async findAll(req, res, next) {
        CityService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        CityService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        CityService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        CityService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        CityService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { CityController };