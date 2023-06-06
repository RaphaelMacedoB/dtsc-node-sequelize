import { DistrictService } from "../services/DistrictService.js";

class DistrictController {

    static async findAll(req, res, next) {
        DistrictService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        DistrictService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        DistrictService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        DistrictService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        DistrictService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { DistrictController };