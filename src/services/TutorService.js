import { Tutor } from "../models/Tutor.js";
import sequelize from '../config/database-connections.js'
import { QueryTypes } from 'sequelize';

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

    static async create(req) {
        const { name, house_number, zip_code, email, phone, public_place, date_of_birth, space_size, district } = req.body;
        if (district == null) throw 'O bairro do Tutor deve ser preenchido!';
        const obj = await Tutor.create({ name, house_number,zip_code,email,phone,public_place,date_of_birth,space_size , districtId: district.id, });
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
    //Raphael Macedo Bernardino
    static async findAllTutorsByCityWithAmountDogs(req){
        const objs = await sequelize.query(
            `SELECT t.id AS "ID do Tutor",
             t.name 					AS "Nome do Tutor",
             g.date 					AS "Data da adoção",
             c.name 					AS "Nome da Cidade",
             COUNT(g.dog_id) 	AS "Quantidade de Cachorros"
             FROM tutors t
             JOIN districts d 						ON t.district_id = d.id
             INNER JOIN cities c 				ON d.city_id = c.id
             INNER JOIN guardianships g 	ON g.tutor_id = t.id
             GROUP BY t.id, t.name, c.name
             ORDER BY t.name;`, {type: QueryTypes.SELECT}
        );
        return objs;
    }
    
    //Raphael Macedo Bernardino
    static async findByPkCityTutorsByCityWithAmountDogs(req){
        const { cityId } = req.params;
        const objs = await sequelize.query(`
        SELECT t.id 			            AS "ID do Tutor",
        c.id                                AS "ID da Cidade",
		t.name 					            AS "Nome do Tutor",
		g.date 					            AS "Data da adoção",
        c.name 					            AS "Nome da Cidade",
        COUNT(g.dog_id) 	                AS "Quantidade de Cachorros"
        FROM tutors t
        JOIN districts d 					ON t.district_id = d.id
        INNER JOIN cities c 				ON d.city_id = c.id
        INNER JOIN guardianships g 	        ON g.tutor_id = t.id
        WHERE c.id = :cityId
        GROUP BY t.id, t.name, c.name
        ORDER BY t.name;
    `, {replacements: { cityId }, type: QueryTypes.SELECT})
    return objs;
    }

}

export { TutorService };