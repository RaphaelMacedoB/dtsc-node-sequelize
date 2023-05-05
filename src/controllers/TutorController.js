import { TutorService } from "../services/TutorService.js";

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
    static async findByUf(req, res, next) {
        TutorService.findByUf(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        TutorService.create(req)
            .then(obj => res.json(obj))
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

}

export { TutorController };