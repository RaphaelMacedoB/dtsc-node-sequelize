import { DogSize } from "../models/DogSize.js";
/**
 * @author Lucas Macedo Bernardino
 */
class DogSizeService {

    static async findAll() {
        const objs = await DogSize.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await DogSize.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { occupied_size, name } = req.body;
        const obj = await DogSize.create({ occupied_size, name });
        return await DogSize.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { occupied_size, name } = req.body;
        const obj = await DogSize.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Porte não encontrado!';
        Object.assign(obj, { occupied_size, name });
        return await obj.save();
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await DogSize.findByPk(id);
        if (obj == null) throw 'Porte não encontrado!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }

}

export { DogSizeService };