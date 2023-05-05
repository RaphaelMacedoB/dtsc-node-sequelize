import { Breed } from "../services/BreedService.js";
/**
 * @author Lucas Macedo Bernardino
 */
class BreedController {

    static async findAll(req, res, next) {
        Breed.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        Breed.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        Breed.create(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async update(req, res, next) {
        Breed.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        Breed.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { BreedController };