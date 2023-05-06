import { Breed } from "../models/Breed.js";
/**
 * @author Lucas Macedo Bernardino
 */
class BreedService {

    static async findAll() {
        const objs = await Breed.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Breed.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { name, dogSize } = req.body;
        if (dogSize == null) throw 'O porte do Cão deve ser preenchido!';
        const obj = await Breed.create({ name, dogSizeId: dogSize.id });
        return await Breed.findByPk(obj.id, { include: { all: true, nested: true } });
    }
    static async update(req) {
        const { id } = req.params;
        const { name, dogSize } = req.body;
        if (dogSize == null) throw 'O porte do Cão deve ser preenchido!';
        const obj = await Breed.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Porte não encontrado!';
        Object.assign(obj, { name, dogSizeId: dogSize.id });
        await obj.save();
        return await Breed.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Breed.findByPk(id);
        if (obj == null)
            throw 'Porte não encontrado!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }
}

export { BreedService };