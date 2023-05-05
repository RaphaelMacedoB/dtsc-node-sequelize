import { Employee } from "../models/Employee.js";
/**
 * @author Raphael Macedo Bernardino
 */
class EmployeeService {

    static async findAll() {
        const objs = await Employee.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Employee.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { name, email, login, password } = req.body;
        const obj = await Employee.create({ name, email, login, password });
        return await Employee.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { name, email, login, password } = req.body;
        const obj = await Employee.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Funcionário não encontrado!';
        Object.assign(obj, { name, email, login, password });
        return await obj.save();
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Employee.findByPk(id);
        if (obj == null) throw 'Funcionárido não encontrado!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }

}

export { EmployeeService };