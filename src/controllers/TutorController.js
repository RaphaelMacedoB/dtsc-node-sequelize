import { TutorService } from "../services/TutorService.js";
/**
 * @author Raphael Macedo Bernardino
 */
class TutorController {

    static async findAll(req, res, next) {
        TutorService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        TutorService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        TutorService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        TutorService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        TutorService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findAllTutorsByCityWithAmountDogs(req, res, next){
        TutorService.findAllTutorsByCityWithAmountDogs(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findByPkCityTutorsByCityWithAmountDogs(req, res, next){
        TutorService.findByPkCityTutorsByCityWithAmountDogs(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { TutorController };