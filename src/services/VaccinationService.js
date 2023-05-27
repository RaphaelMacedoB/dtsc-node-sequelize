import { Vaccination } from "../models/Vaccination.js"

import sequelize from '../config/database-connections.js';
import { QueryTypes } from 'sequelize';
import { Dog } from "../models/Dog.js";
import { Vaccine } from "../models/Vaccine.js";

class VaccinationService {

  static async findAll() {
    const objs = await Vaccination.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Vaccination.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { date, vaccine, dog, employee, veterinarian} = req.body;
    if (await this.verificarRegrasDeNegocio(req)){
      const obj = await Vaccination.create({ date, vaccineId: vaccine.id, dogId: dog.id, employeeId: employee.id, veterinarianId: veterinarian.id});
        return await Vaccination.findByPk(obj.id, { include: { all: true, nested: true } });
    } else{
      throw "O cão está sob restrição da última vacina tomada!!";
    }
  }
    

  static async findCountVaccineBreed(req){
    const {dog, vaccine} = req.body;
    const currentDog = await Dog.findByPk(dog.id)
    const breedId = await currentDog.dataValues.breedId
    const objs = await sequelize.query(`
    SELECT COUNT(*) AS qtd_restricao_raca
  FROM vaccine_breed vb 
    WHERE vb.vaccine_id = ${vaccine.id}
      AND vb.breed_id = ${breedId}`);
    return objs[0][0].qtd_restricao_raca
  }
  static async update(req) {
    const { id } = req.params;
    const { data, valor, cliente, itens } = req.body;
    const obj = await Vaccination.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Empréstimo não encontrado!';
    const t = await sequelize.transaction();
    Object.assign(obj, { data, valor, clienteId: cliente.id });
    await obj.save({ transaction: t }); // Salvando os dados simples do objeto empréstimo
    try {
      await Promise.all((await obj.itens).map(item => item.destroy({ transaction: t }))); // destruindo todos itens deste empréstimo
      await Promise.all(itens.map(item => obj.createItem({ valor: item.valor, entrega: item.entrega, VaccinationId: obj.id, fitaId: item.fita.id }, { transaction: t })));
      await t.commit();
      return await Vaccination.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Pelo menos uma das fitas informadas não foi encontrada!";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Vaccination.findByPk(id);
    if (obj == null) throw 'Empréstimo não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um empréstimo que possui devoluções ou multas!";
    }
  }

  // Implementando as regras de negócio relacionadas ao processo de negócio Empréstimo
  // Regra de Negócio 1: Para vacinar é necessário respeitar os intervalos de dose de cada vacina.
  // Regra de Negócio 2: Para vacinar deve verificar se a vacina não tem restrição para a raça do cão.
  /*
  static async findByTutor(req){
    const { tutor } = req.body;
    const objs = await Guardianship.findAll({ where: { tutorId: tutor.id}, include: { all: true, nested: true }})

    
    return objs;
  }
  */
 
  static async verificarRegrasDeNegocio(req) {

    const { date, vaccine, dog } = req.body;
    // Regra de Negócio 1: Para vacinar é necessário respeitar os intervalos de dose de cada vacina.
    const intervalDays = await VaccinationService.findDosageInveralDaysByVaccinesAndDogs(req);
    const dataRegistrada = await this.findDateVaccinationRegister(req);
    const dataSomada = this.addDays(dataRegistrada, intervalDays)
    const dataData = new Date(date)
    // Regra de Negócio 2: Para vacinar deve verificar se a vacina não tem restrição para a raça do cão.
    const count = await this.findCountVaccineBreed(req);
    if(!(dataData > dataSomada)) throw 'Intervalo de vacinas inválido !' 
    if(!(count == 0)) throw 'A raça possui restrição de vacina !'
  }

  static addDays(date, days) {
    const dateCopy = new Date(date);
    //se o dia for 
    dateCopy.setDate(dateCopy.getDate() + days);
    return dateCopy;
  }

  static async findDosageInveralDaysByVaccinesAndDogs(req){
    const {dog, vaccine} = req.body;
    const objs = await sequelize.query(`
    SELECT v.dosage_interval_days 
    FROM Vaccinations vc, Vaccines v, Dogs d
    WHERE vc.vaccine_id = v.id
      AND vc.dog_id = d.id
      AND d.id = ${dog.id}
      AND v.id = ${vaccine.id}`);
      console.log('====================================');
      console.log(objs);
      console.log('====================================');
    return objs[0][0].dosage_interval_days;
  }

  static async findDateVaccinationRegister(req){
    const {dog, vaccine} = req.body;
    const objs = await sequelize.query(`
    SELECT vc.date
    FROM Vaccinations vc,
          Vaccines v,
          Dogs d
    WHERE vc.dog_id = d.id
      AND vc.vaccine_id = v.id
      AND vc.dog_id = ${dog.id}
      AND vc.vaccine_id = ${vaccine.id}`);
    return objs[0][0].date;
  }
  
}

export { VaccinationService };