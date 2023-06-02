import { Dog } from "../models/Dog.js";
import sequelize from '../config/database-connections.js';
import { QueryTypes } from 'sequelize';
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
  //Lucas Macedo Bernardino
  static async findAllDogsByAggresionScoreAndAmountOfOccurrencesByDog(){
    const objs = await sequelize.query(`
      SELECT d.id					AS "ID",
			 d.name				AS "Dog Name",
			 toc.name			AS "Type of Ocurrence",
			 toc.severity AS "Aggressiveness",
			 COUNT(oc.id) AS "Amount Ocurrences" 
FROM dogs d
INNER JOIN occurrences oc 				ON oc.dog_id = d.id
INNER JOIN typeOfOccurrences toc 	ON oc.type_of_occurrence_id = toc.id
GROUP BY d.id, d.name, toc.severity
ORDER BY d.id;
    `, { type: QueryTypes.SELECT });
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
  //Lucas Macedo Bernardino
  static async findAllDogsByHealthState(req){
      const objs = await sequelize.query(`
      SELECT d.id									AS "ID",
			 d.name								AS "Dog Name",
			 toc.id								AS "ID Type",
			 toc.severity					AS "Aggressivennes",
			 oc.dog_health_state	AS "Dog Health State"
FROM dogs d
INNER JOIN occurrences oc					ON d.id = oc.dog_id
INNER JOIN typeOfOccurrences toc	ON toc.id = oc.type_of_occurrence_id
GROUP BY d.id, d.name, toc.severity
ORDER BY d.id;
    `, { type: QueryTypes.SELECT });
    return objs;
  }
}

export { DogService };