import { Tutor } from "../models/Tutor.js";
/**
 * @author Raphael Macedo Bernardino
 */
class TutorService {

    static async findAll() {
        const objs = await Tutor.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Tutor.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async findByCity(req) {
        const { id } = req.params;
        const objs = await Tutor.findAll({ where: { districtId: id }, include: { all: true, nested: true } });
        return objs;
    }

    static async create(req) {
        const { name, house_number, zip_code, email, phone, public_place, date_of_birth, space_size, district } = req.body;
        if (district == null) throw 'O bairro do Tutor deve ser preenchido!';
        const obj = await Tutor.create({ name, house_number,zip_code,email,phone_public_place,date_of_birth,space_size , districtId: district.id, });
        return await Tutor.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { name, house_number, zip_code, email, phone, public_place, date_of_birth, space_size, district } = req.body;
        if (district == null) throw 'O bairro do Tutor deve ser preenchido!';
        const obj = await Tutor.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Tutor não encontrado!';
        Object.assign(obj, { name, house_number, zip_code, email, phone, public_place, date_of_birth, space_size, districtId: district.id });
        await obj.save();
        return await Tutor.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Tutor.findByPk(id);
        if (obj == null)
            throw 'Tutor não encontrado!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }

}

export { TutorService };