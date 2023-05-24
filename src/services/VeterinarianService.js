import { Veterinarian } from "../models/Veterinarian.js";
/**
 * @author Lucas Macedo Bernardino
 */
class VeterinarianService {

    static async findAll() {
        const objs = await Veterinarian.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Veterinarian.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { name } = req.body;
        const obj = await Veterinarian.create({ name });
        return await Veterinarian.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { name } = req.body;
        const obj = await Veterinarian.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Veterinario não encontrado!';
        Object.assign(obj, { name });
        return await obj.save();
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Veterinarian.findByPk(id);
        if (obj == null) throw 'Veterinario não encontrado!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }
}

export { VeterinarianService };