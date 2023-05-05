import { Dog } from "../models/Dog.js";
/**
 * @author Jefferson Abreu
 */
class DogService {

    static async findAll() {
        const objs = await Dog.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Dog.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async findByDog(req) {
        const { id } = req.params;
        const objs = await Dog.findAll({ where: { dogId: id }, include: { all: true, nested: true } });
        return objs;
    }

    static async create(req) {
        const { name, weight, date_of_birth, breed } = req.body;
        if (breed == null) throw 'O Cão deve ter a Raça preenchida!';
        const obj = await Dog.create({ name, weight, date_of_birth, breedId: breed.id });
        return await Dog.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { name, weight, date_of_birth, breed } = req.body;
        if (breed == null) throw 'O Cão deve ter a Raça preenchida!';
        const obj = await Dog.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Cão não encontrado!';
        Object.assign(obj, { name, weight, date_of_birth, breedId: breed.id });
        await obj.save();
        return await Dog.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Dog.findByPk(id);
        if (obj == null)
            throw 'Cão não encontrado!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }

}

export { DogService };