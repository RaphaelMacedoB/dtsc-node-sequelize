import { District } from "../models/District.js";

class DistrictService {

    static async findAll() {
        const objs = await District.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await District.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async findByCity(req) {
        const { id } = req.params;
        const objs = await District.findAll({ where: { ufId: id }, include: { all: true, nested: true } });
        return objs;
    }

    static async create(req) {
        const { name, city } = req.body;
        if (city == null) throw 'O Bairro da Cidade deve ser preenchido!';
        const obj = await District.create({ name, cityId: city.id });
        return await District.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { name, city } = req.body;
        if (uf == null) throw 'O Bairro da Cidade deve ser preenchido!';
        const obj = await District.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Bairro não encontrado!';
        Object.assign(obj, { name, cityId: city .id });
        await obj.save();
        return await District.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await District.findByPk(id);
        if (obj == null)
            throw 'Bairro não encontrado!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }

}

export { DistrictService };