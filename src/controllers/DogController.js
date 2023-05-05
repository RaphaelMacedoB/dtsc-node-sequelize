import { DogService } from "../services/DogService.js";

class DogController {

    static async findAll(req, res, next) {
        DogService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        DogService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
    static async findByUf(req, res, next) {
        DogService.findByDog(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        DogService.create(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async update(req, res, next) {
        DogService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        DogService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { DogController };