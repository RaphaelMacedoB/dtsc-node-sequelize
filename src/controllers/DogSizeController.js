import { DogSizeService } from "../services/DogSizeService.js";

class DogSizeController {

    static async findAll(req, res, next) {
        DogSizeService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        DogSizeService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        DogSizeService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        DogSizeService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        DogSizeService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { DogSizeController };