import { BreedService } from "../services/BreedService.js";
/**
 * @author Lucas Macedo Bernardino
 */
class BreedController {

    static async findAll(req, res, next) {
        BreedService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        BreedService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        BreedService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        BreedService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        BreedService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findAllBreedWithVaccineRestriction(req, res, next){
        BreedService.findAllBreedWithVaccineRestriction(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findByPkBreedWithVaccineRestriction(req, res, next){
        BreedService.findByPkBreedWithVaccineRestriction(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { BreedController };