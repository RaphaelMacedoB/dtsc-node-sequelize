import { EmployeeService } from "../services/EmployeeService.js";
/**
 * @author Raphael Macedo Bernardino
 */
class EmployeeController {

    static async findAll(req, res, next) {
        EmployeeService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        EmployeeService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        EmployeeService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        EmployeeService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        EmployeeService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { EmployeeController };