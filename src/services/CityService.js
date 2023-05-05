import { City } from "../models/City.js";

class CityService {

    static async findAll() {
        const objs = await City.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await City.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async findByUf(req) {
        const { id } = req.params;
        const objs = await City.findAll({ where: { ufId: id }, include: { all: true, nested: true } });
        return objs;
    }

    static async create(req) {
        const { name, uf } = req.body;
        if (uf == null) throw 'A Uf da Cidade deve ser preenchida!';
        const obj = await City.create({ name, ufId: uf.id });
        return await City.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { name, uf } = req.body;
        if (uf == null) throw 'A Uf da Cidade deve ser preenchida!';
        const obj = await City.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Cidade não encontrada!';
        Object.assign(obj, { name, ufId: uf.id });
        await obj.save();
        return await City.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await City.findByPk(id);
        if (obj == null)
            throw 'Cidade não encontrada!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }

}

export { CityService };