import { TypeOfOccurrence } from "../models/TypeOfOccurrence.js";
/**
 * @author Jefferson Abreu
 */
class TypeOfOccurrenceService {

    static async findAll() {
        const objs = await TypeOfOccurrence.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await TypeOfOccurrence.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { name, severity, aggressor } = req.body;
        const obj = await TypeOfOccurrence.create({ name, severity, aggressor });
        return await TypeOfOccurrence.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { name, severity, aggressor } = req.body;
        const obj = await TypeOfOccurrence.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Tipo de ocorrencia não encontrada!';
        Object.assign(obj, { name, severity, aggressor });
        await obj.save();
        return await TypeOfOccurrence.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await TypeOfOccurrence.findByPk(id);
        if (obj == null)
            throw 'Tipo de ocorrencia não encontrada!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }
}

export { TypeOfOccurrenceService };