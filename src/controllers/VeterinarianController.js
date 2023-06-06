import { VeterinarianService } from "../services/VeterinarianService.js";
/**
 * @author Jefferson Abreu
 */
class VeterinarianController {

    static async findAll(req, res, next) {
        VeterinarianService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        VeterinarianService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        VeterinarianService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        VeterinarianService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        VeterinarianService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { VeterinarianController };